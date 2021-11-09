const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
    res.send('Vamos equipo 5 💪');
});

module.exports = router;