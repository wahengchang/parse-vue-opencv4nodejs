const init = require('./init')

const getMatObj = (_source) => {
    let grayImg
    if(typeof _source === 'object') {
        grayImg = _source
    }
    else if(typeof _source === 'string') {
        const filepath = _source
        grayImg = init.cv.imread(filepath, init.cv.COLOR_BGR2RGB)
    }
    else {
        console.log('[INFO] _source error: ', _source)
    }

    return grayImg
}
const extract = (_source, options = {}) => {
    const {resize = null } = options

    console.log('resize: ', resize)

    let grayImg = getMatObj(_source)

    const _c = init.classifier()
    const faceRects = _c.detectMultiScale(grayImg).objects;
    if (!faceRects.length) {
        throw new Error('failed to detect faces');
    }

    return faceRects.map(item => {
        if(!resize) {
            return grayImg.getRegion(item)
        }
        const _resize = parseInt(resize)
        const faceObj = grayImg.getRegion(item)
        const faceImg = faceObj.resize(_resize, _resize)
        return faceImg
    })
}

module.exports = {
    extract
} 