const express = require('express');
const router = express.Router();
const {Client , Livreur , Manager} = require('../Controllers/AuthController');
const {protect} = require('../Middlewares/authMiddleware');
const  authJwt  = require("../Middlewares/authJwt");



router.get('/client/me',[authJwt.verifyToken , authJwt.isClient] , Client)
router.get('/livreur/me',[authJwt.verifyToken , authJwt.isLivreur] , Livreur)
router.get('/manager/me',[authJwt.verifyToken , authJwt.isManger] , Manager)
// router.get('/manger/me',manger)
// router.get('/livreur/me',livreur)

// router.post('api/auth/login',Login)

module.exports = router 