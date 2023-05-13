const mongoose = require('mongoose');

const subAssemblyItemSchema = new mongoose.Schema({
    processName: {
        type: String,
        required: true
    },
    fabricationsRequired: {
        type: [String],
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {timestamps: true})

const SubAssemblyItem = mongoose.model('SubAssemblyItem', subAssemblyItemSchema);

module.exports = SubAssemblyItem;