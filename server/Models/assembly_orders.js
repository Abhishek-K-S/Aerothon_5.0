const mongoose = require('mongoose');

const assemblyOrdersSchema = new mongoose.Schema({
    assemblyID: {
        type: String,
        required: true
    },
    description: {
        type: String,
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

const AssemblyOrders = mongoose.model('AssemblyOrders', assemblyOrdersSchema);

module.exports = AssemblyOrders