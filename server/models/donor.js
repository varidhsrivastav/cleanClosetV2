const mongoose = require('mongoose')
const Schema = mongoose.Schema

const donorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'Female', 'Bisexual']
    },
    infection: {
        type: String,
        enum: ['Yes', 'No']
    },
    pickupService: {
        type: String,
        enum: ['twoWheel', 'fourWheeler', 'Truck']
    },
    NumberOfCloths: {
        type: Number
    },
    weightOfCloths: {
        type: Number
    },
    durationOfCloths: {
        type: String,
        enum: ['5month', '15month', '25month', '35month']
    },
    conditionOfCloths: {
        type: String,
        enum: ['New', 'Good', 'Average', 'Worst']
    },
    AddressLine1: {
        type: String,
        required: true
    },
    AddressLine2: {
        type: String
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    pinCode: {
        type: Number,
        required: true
    },
    dateOfPickup: {
        type: Number
    }
})

module.exports = mongoose.model('Donor', donorSchema)