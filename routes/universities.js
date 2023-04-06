var express = require('express');
var router = express.Router();
var universityController = require('../controllers/university.controller')

router.get('/', universityController.getUniversities);

module.exports = router;