const express = require('express');
const router = express.Router();

const controllerLocation = require('../controllers/location.controller');
const controllerCurrent = require('../controllers/current.controller');
const controllerForecast = require('../controllers/forecast.controller');

router.get('/location', controllerLocation);
router.get('/current/:city?', controllerCurrent);
router.get('/forecast/:city?', controllerForecast);

module.exports = router;
