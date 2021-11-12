const path = require('path');
require('dotenv').config();
const cors = require('cors');

const whitelist = ['http://localhost:3000', 'http://localhost:8800', 'https://coderhack-equipo5.herokuapp.com/', 'http://coderhack-equipo5.herokuapp.com/'];
const corsOptions = {
    origin: function (origin, callback) {
        console.log('** Origin or request ' + origin);
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            console.log('Origin acceptable');
            callback(null, true);
        } else {
            console.log('Origin rejected');
            callback(new Error('Not allowed by CORS'));
        }
    }
};

// Initialize
const app = require('./server');
require('./database');

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    })
}

app.listen(app.get('port'), () => {
    console.log(`Backend server is running on port ${app.get('port')}`);
});