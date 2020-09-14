const OVOID = require('ovoid');
var express = require('express');
const { response } = require('express');
var router = express.Router();
let ovoid = new OVOID();

const login = async (nomor) => {
    await ovoid.login2FA(nomor)
        .then((json) => {
            json.json();
        })
        .then((response) => {
            return response;
        })
        .catch((err) => {
            return err;
        });
}

router.route('/').post(async function(req, res) {
    let nomor = req.body.nomor;
    let refId = login(nomor);
    
    res.send(refId);
});

module.exports = router;