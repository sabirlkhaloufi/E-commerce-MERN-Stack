const express = require('express');
const router = express.Router();
const {index , create , show , update , Delete} = require('../Controllers/CommentController');
// const {protect} = require('../Middlewares/authMiddleware');


 
router.get("/", index);
router.post("/", create);
router.get("/:id", show);
router.patch("/:id", update);
router.delete("/:id", Delete);

// router.post('api/auth/login',Login)

module.exports = router  