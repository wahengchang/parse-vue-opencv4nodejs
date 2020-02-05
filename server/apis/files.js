const express = require('express')
const router = express.Router()
const formidable = require('formidable');
const fs = require('fs')
const mime = require('mime')
const face = require('../lib/face')

const downloadSingleFileToLocal = (req) => {
    return new Promise((resolve, reject)=>{
        const timestamp = `${new Date().getTime()}`

        const form = new formidable.IncomingForm();
    
        form.parse(req);
    
        form.on('fileBegin', function (name, file){
            const filename = `${timestamp}-${file.name}`
            file.path = `${__dirname}/../../images/${filename}`
        })
    
        form.on('file', function (name, file){
            console.log('Uploaded:' + `${timestamp}-${file.name}`);
            const filename = `${timestamp}-${file.name}`
            return resolve({
                filename,
                local: `${__dirname}/../../images/${filename}`,
                url: `/apis/files/download/${timestamp}-${file.name}`
            })
        });
    })
}

router.use('/upload', async (req, res) => {
    try {
        const {isExtractFace = false, resize = null} = req.query
        console.log('query, resize: ', resize)

        const file = await downloadSingleFileToLocal(req)

        if(!isExtractFace) {
            return res.status(200).json({ files: [file.url] })
        }

        const {local, filename} = file
        const faceObjList = face.extract(local, {resize})

        const urlList = []
        faceObjList.forEach((faceObj, index)=>{
            const saveTo = `${__dirname}/../../images/face-${index}-${filename}`
            require('opencv4nodejs').imwrite(saveTo, faceObj)
            urlList.push(`/apis/files/download/face-${index}-${filename}`)
        })


        return res.status(200).json({ files: [...urlList]  })
    }
    catch(e){
        console.log('[ERROR] ',e)
        res.status(500)
        return res.json(e)
    }
})

router.get('/download/:filename', async (req, res) => {
    const {filename} = req.params
    try {
        const file = __dirname + '/../../images/' + `${filename}`;
        const mimetype = mime.getType(file);
        res.setHeader('Content-disposition', 'attachment; filename=' + filename);
        res.setHeader('Content-type', mimetype);
        const filestream = fs.createReadStream(file);
        filestream.pipe(res);
    }
    catch(e){
        console.log('[ERROR] ',e)
        res.status(500)
        return res.json(e)
    }
})

module.exports = router