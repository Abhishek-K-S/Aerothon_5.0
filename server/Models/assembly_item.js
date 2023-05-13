const mongoose = require('mongoose');

const assemblyItemSchema = new mongoose.Schema({
    processName: {
        type: String,
        required: true
    },
    subProcessRequired: {
        type: [String],
        required: true
    }
}, {timestamps: true})

const AssemblyItem = mongoose.model('AssemblyItem', assemblyItemSchema);

module.exports = AssemblyItem;