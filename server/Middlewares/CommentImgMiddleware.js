const express = require('express');
const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

//Setting localStorage Item

let uniqueId = uuidv4();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'tmp');
    },
    filename: (req, file, cb) => {
        console.log("file", file )
        // console.log("cb", cb)
        // console.log("req", req)
        cb(null, uniqueId + path.extname(file.originalname));
    }
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
        
    } else {
        cb(null, false);
    }
};
const upload = multer({

    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter ,
    
    // store id in  local storage
    
    
    
});

module.exports = upload;