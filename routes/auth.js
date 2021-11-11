const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Auth root');
});

module.exports = router;