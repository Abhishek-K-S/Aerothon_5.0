const {Router} = require('express');
const router = Router();
const {createFabOrder, getFabOrders, login, signup, logout, verify, getUserRole, createFabItem, createSubAssemblyProcess, getFabItems} = require('./Controller/authControler.js')

router.post('/signup', signup)

router.post('/login', login)

router.get('/logout', logout)

router.get('/verifyuser', verify )

router.get('/role/:uid', verify, getUserRole)

router.post('/create/fabitem', verify, createFabItem)

router.get('/get/fabitem', verify, getFabItems)

router.post('/create/faborder', verify, createFabOrder)

router.get('/get/faborder', verify, getFabOrders)

router.post('/create/subassemblyprocess', verify, createSubAssemblyProcess)



module.exports = router;