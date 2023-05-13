const mongoose = require('mongoose');

const subAssemblyOrdersSchema = new mongoose.Schema({
    subAssemblyID: {
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

const SubAssemblyOrders = mongoose.model('SubAssemblyOrders', subAssemblyOrdersSchema);

module.exports = SubAssemblyOrders