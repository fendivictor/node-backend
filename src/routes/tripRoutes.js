var express = require('express');
var app = express();
var router = express.Router();

var Trip = require('../models/Trip');

router.route('/').get(function (err, res) {
    Trip.find(function (err, items) {
        if (err) {
            console.log(err);
        } else {
            res.json(items);
        }
    });
});

router.route('/add').post(function (req, res) {
    console.log(req.body);

    var item = new Trip(req.body);
    item.save()
        .then(item => {
            res.json('Added');
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        })
});

module.exports = router;