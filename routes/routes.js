const express = require('express')
const {createUser, registerUser} = require('../controllers/userController.js')
const router = express.Router()
router.post('/register' , registerUser);
router.post('/login' , loginuser)
module.exports = router