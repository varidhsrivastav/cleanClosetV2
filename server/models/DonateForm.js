const mongoose = require('mongoose');

const donateform = new mongoose.Schema({
    donorName:{
        type: String,
        required: true
    },
    donorEmail:{
        type: String,
        required: true
    },
    donorPhone:{
        type: String,
        required:true
    },
    donorAddress:{
        type:String,
        required:true
    },
    typeofcloth:{
        type:String,
        required : true
    },
    quantity:{
        type:String,
        required:true
    },
    condition:{
        type:String,
        required:true
    },
    additionalDetails:{
        type:String,
        required:true
    },
});

const DonorForm = mongoose.model('DONORFORM', donateform);

module.exports = DonorForm;