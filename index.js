const path = require('path');
require('dotenv').config();

// Initialize
const app = require('./server');
require('./database');

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.listen(app.get('port'), () => {
    console.log(`Backend server is running on port ${app.get('port')}`);
});