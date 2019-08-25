const express = require('express');
const userCtrlr = require('../user/user.controller');
const router = express.Router();

router.use(function(req, res, next) {
    console.log(req.method, req.url);
    if (Object.keys(req.body).length > 0) {
        console.log(req.body);
    }
    next();
});

router.route('/login').post(userCtrlr.login);
router.route('/logout').post(userCtrlr.logout);

module.exports = router;
