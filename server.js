const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

// Initializations
const app = express();

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'client/public/img'),
    filename: (req, file, cb, filename) => {
        cb(null, uuidv4() + path.extname(file.originalname));
    }
});
app.use(multer({
    storage: storage
}).single('image'));

// Routes
const router = require('./routes/index');
const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const projectRouter = require('./routes/projects');
const businessRouter = require('./routes/business');

app.use('/api', router);
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/projects', projectRouter);
app.use('/api/business', businessRouter);

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Settings
app.set('port', process.env.PORT || 8800);

module.exports = app;