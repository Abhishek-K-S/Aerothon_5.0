const mongoose = require('mongoose');

const fabOrderSchema = new mongoose.Schema({
    itemID: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    inDate: {
        type: Date,
        required: true,
    },
    outDate: {
        type: Date, 
        required: true
    }
}, {timestamps: true})

const FabOrder = mongoose.model('FabOrder', fabOrderSchema);

module.exports = FabOrder