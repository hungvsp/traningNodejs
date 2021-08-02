const siteController = require('./../controller/siteController');
const express = require('express');
const router = express.Router();
//router.get('',siteController.home)
router.get('/search', siteController.search);
module.exports = router;
