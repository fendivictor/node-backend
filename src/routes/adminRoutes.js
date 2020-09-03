var express = require('express');
var app = express();
var router = express.Router();

router.route('/').get(function (req, res) {
    res.render('dashboard', {
        title: 'Dashboard'
    });
});

router.route('/item/form').get(function (req, res) {
    res.render('pages/item/form', {
        title: 'New Item',
        subtitle: 'Add New Item',
        jsPlugins: ['/plugins/blockui/blockui.js']
    });
});

router.route('/item/process').post(function (req, res) {
    res.send(req.body);
});

module.exports = router;