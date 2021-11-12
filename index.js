const path = require('path');
require('dotenv').config();

// Initialize
const app = require('./server');
require('./database');

app.listen(app.get('port'), () => {
    console.log(`Backend server is running on port ${app.get('port')}`);
});