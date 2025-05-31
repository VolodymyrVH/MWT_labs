const express = require('express');
const {keycloak} = require('./auth');

const router = express.Router();

router.use(keycloak.protect());

router.get('/', (req, res) => {
    res.json({
        message: 'defended',
        user: req.kauth.grant.access_token.content
    });
});

module.exports = router;