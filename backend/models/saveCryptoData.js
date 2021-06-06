const mongoose = require('mongoose');

const saveCrytoData = mongoose.Schema({
    id : {
        type: String,
        required: true
    },
    name : {
        type: String,
        required: true
    },
    symbol : {
        type: String,
        required: true
    },
    market_cap:{
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('SaveCrypto', saveCrytoData);