var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SchemaTypes = mongoose.Schema.Types;
var Item = new Schema({
    item_number: {
        type: String
    },
    item_name: {
        type: String
    },
    lot_number: {
        type: String
    },
    location: {
        type: String
    },
    qty: {
        type: Number
    },
    unit: {
        type: String
    },
    attribute: {
        contract: {
            type: String
        },
        style: {
            type: String
        },
        size: {
            type: String
        },
        color: {
            type: String
        },
        brand: {
            type: String
        }
    }
}, {
    collection: 'items'
});

module.exports = mongoose.model('Item', Item);