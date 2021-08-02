const newController = require('../controller/NewController');
const express = require('express');
const router = express.Router();
router.get('/:slug', newController.show);
router.get('/', newController.index);

module.exports = router;
