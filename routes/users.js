const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('User root');
});

module.exports = router;