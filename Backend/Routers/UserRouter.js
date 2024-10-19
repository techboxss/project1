const express = require('express');
const router = express.Router();
const userController = require('../Controllers/UserController');


router.get('/', userController.getAllUsers); 
router.post('/', userController.createUser); 
router.get('/:id', userController.getUserById);
router.delete('/:id', userController.deleteUser); 
module.exports = router;
