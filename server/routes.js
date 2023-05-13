const {Router} = require('express');
const router = Router();
const {login, signup, logout, verify, getUserRole} = require('./Controller/authControler.js')

router.post('/signup', signup)

router.post('/login', login)

router.get('/logout', logout)

router.get('/verifyuser', verify )

router.get('/role/:uid', verify, getUserRole)

module.exports = router;