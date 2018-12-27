const express = require('express');
const router = express.Router();
const getUserInfo = require('./userInfo')
const login = require('./login')

router.get('/getuserinfo', getUserInfo)
router.post('/login', login)

module.exports = router; 