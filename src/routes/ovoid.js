const OVOID = require('ovoid');
var express = require('express');
var router = express.Router();
let ovoid = new OVOID();
let state = {
    refId: '',
    accessToken: {}
}

router.route('/').post(async function(req, res, next) {
    try {
        let nomor = req.body.nomor;
        let refId = await ovoid.login2FA(nomor);
        state.refId = refId;
        
        res.send(refId);
    } catch (err) {
        next(err)
    }
});

router.route('/otp').post(async function(req, res, next) {
    try {
        let otp = req.body.otp;
        let nomor = req.body.nomor;
        let accessToken = await ovoid.login2FAVerify(state.refId, otp, nomor);
        state.accessToken = accessToken;

        res.send(accessToken);
    } catch (err) {
        next(err)
    }
});

router.route('/pin').post(async function(req, res, next) {
    try {
        let pin = req.body.pin;
        let authToken = await ovoid.loginSecurityCode(pin, state.accessToken.updateAccessToken);
        ovoid = new OVOID(authToken.token);

        res.send(authToken);
    } catch (err) {
        next(err)
    }
});

module.exports = router;