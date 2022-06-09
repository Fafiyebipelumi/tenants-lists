const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tenantSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    roomNum: {
        type: String,
        required: true
    },
    tenancy: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    phoneNum: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Tenants = mongoose.model('Tenants', tenantSchema);

module.exports = Tenants;