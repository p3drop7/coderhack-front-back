const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

// Initializations
const app = express();

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

// Routes
const router = require('./routes/index');
const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');

app.use('/api', router);
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);

// Settings
app.set('port', process.env.PORT || 8800);

module.exports = app;