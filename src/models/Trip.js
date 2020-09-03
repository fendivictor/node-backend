var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SchemaTypes = mongoose.Schema.Types;
var Trip = new Schema({
    transaction_number: {
        type: String
    },
    driver: {
        name: {
            type: String
        },
        img_url: {
            type: String
        },
        rating: {
            type: SchemaTypes.Decimal128
        }
    },
    origin: {
        address: {
            type: String
        },
        coordinate: {
            latitude: {
                type: SchemaTypes.Decimal128
            },
            longitude: {
                type: SchemaTypes.Decimal128
            }
        }
    },
    destination: {
        address: {
            type: String
        },
        coordinate: {
            latitude: {
                type: SchemaTypes.Decimal128
            },
            longitude: {
                type: SchemaTypes.Decimal128
            }
        }
    }
}, {
    collection: 'trip'
});

module.exports = mongoose.model('Trip', Trip);