const express = require('express');
const router = express.Router();

const testController = require('../controllers/testControllers');

router.get('/',testController.test)

module.exports=router


//this is just a mock file
