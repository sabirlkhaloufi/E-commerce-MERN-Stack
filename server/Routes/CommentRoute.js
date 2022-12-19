const express = require('express');
const router = express.Router();
const {index , create , show , update , Delete ,uploadImage} = require('../Controllers/CommentController');
const upload = require('../Middlewares/CommentImgMiddleware');
const CommentValidation = require('../Middlewares/CommentValidation');
// const {protect} = require('../Middlewares/authMiddleware');


 
router.get("/", index);
router.post("/upload",  upload.single("image"), uploadImage);
router.post("/" , CommentValidation ,create);
router.get("/:id", show);
router.patch("/:id", update);
router.delete("/:id", Delete);

// router.post('api/auth/login',Login)

module.exports = router  