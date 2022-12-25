const multer = require('multer')
const path = require('path')

const storeImage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log('req.file', req.file)
        cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

exports.upload = multer({
    storage: storeImage,
    limits: { fileSize: '5000000' },
    fileFilter: (req, file, cb) => {
        const exts = /jpeg|png|jpg|gif/
        const fileType = exts.test(file.mimetype)
        const imgExt = exts.test(path.extname(file.originalname))
        if(fileType && imgExt) return cb(null, true)
        cb(JSON.stringify('file uploded is invalid'))
        
    }
}).array('image',4)

