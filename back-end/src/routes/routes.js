const express = require('express');
const router = express.Router();
const currencyController = require('../controllers/currencyController');

router.get('/rates/:base', currencyController.getCurrencyRates);

module.exports = router;
