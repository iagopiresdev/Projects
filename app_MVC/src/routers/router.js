const express = require('express');
const mainController = require('../controllers/main');
const morgan = require('morgan');

const router = express.Router();

router.use(morgan('combined'));
router.get('/', mainController.index);
router.get('/profs', mainController.profs);
router.get('/sobre', mainController.about);

module.exports = router;