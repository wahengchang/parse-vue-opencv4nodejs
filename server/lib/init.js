const cv = require('opencv4nodejs');

const classifier =  () => new cv.CascadeClassifier(cv.HAAR_FRONTALFACE_ALT2);


module.exports = {
    classifier,
    cv
}
