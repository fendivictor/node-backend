var express = require('express');
var app = express();
var router = express.Router();

var item = require('../models/Item');

router.route('/').get(function (err, res) {
    item.find(function (err, items) {
        if (err) {
            console.log(err);
        } else {
            res.json(items);
        }
    });
});

router.route('/').post(function (req, res) {
    var post = new item(req.body);
    post.save()
        .then(item => {
            res.json('Added');
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        })
});

router.route('/').delete(function (req, res) {
    item.findByIdAndRemove({_id: req.body.id}, function (err, item) {
        if (err) {
            res.json(err);
        } else {
            res.json('Deleted');
        }
    });
});

module.exports = router;