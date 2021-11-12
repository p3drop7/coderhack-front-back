const path = require('path');
require('dotenv').config();

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