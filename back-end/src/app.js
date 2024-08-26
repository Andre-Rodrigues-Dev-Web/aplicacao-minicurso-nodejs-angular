const express = require('express');
const currencyRoutes = require('./routes/routes');

const app = express();

app.use('/api', currencyRoutes);

module.exports = app;
