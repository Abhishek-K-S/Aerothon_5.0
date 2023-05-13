const mongoose = require('mongoose');

const fabItemSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true
    },
    materialsRequired: {
        type: String,
        required: true
    }
}, {timestamps: true})

const FabItem = mongoose.model('FabItem', fabItemSchema);

module.exports = FabItem;