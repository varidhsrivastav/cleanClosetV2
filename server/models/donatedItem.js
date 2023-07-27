const mongoose = require('mongoose');

const donatedItem = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    infection: {
        type: String,
        required: true
    },
    infectionName: {
        type: String,
        required: true
    },
    pickupService: {
        type: String,
        required: true
    },
    NumberOfCloths: {
        type: String,
        required: true
    },
    weightOfCloths: {
        type: String,
        required: true
    },
    AddressLine1: {
        type: String,
        required: true
    },
    AddressLine2: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    pinCode:  {
        type:Number,
        required: true,
    },
    dateOfPickup:  {
        type:String,
        required: true,
    },

})

const Donated = mongoose.model('DONATEDSCHEMA', donatedItem)

module.exports = Donated;