const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

// Initializations
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const router = require('./routes/index');
app.use('/api', router);

// Settings
app.set('port', process.env.PORT || 8800);

module.exports = app;