const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())
router.use(bodyParser.raw())

router.use(async (req, res) => {
    try {
        console.log('req.params: ', req.params)
        console.log('req.query: ', req.query)
        return res.send('ok')
    }
    catch(e){
        console.log('[ERROR] ',e)
        res.status(500)
        return res.json(e)
    }
})

module.exports = router