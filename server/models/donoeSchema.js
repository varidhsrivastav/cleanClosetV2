const mongoose = require("mongoose");


const donorSchema = new mongoose.Schema({
    // name:{
    //     type: String,
    //     required: [true, "Name Required."],
    //     minLength: 3,
    //     maxLength: 25,
    // },
    // email:{
    //     type: String,
    //     required:[true, " email is required "]

    // },
    // phone: {
    //     type: Number,
    //     required: [true, "Phone Number Required."],
    //     unique: true,
    //   },
    // gender: {
    //     type: String,
    //     enum: ["Male", "Female", "Transgender"],
    //     required: [true, "Gender Required."],
    //   },
    // infection:{
    //     type: String,
    //     enum: ["Yes", "No"], 
    //     required: [true, "please let us know about infection"], 
    // },
    // pickup:{
    //     type:String,
    //     enum: ["light","heavy","group"],
    //     required: [true, "Please selet the "]
    // },
    // totalnumberOfCloths:{
    //     type:String,

    // }

    name:{
        type : String,
        required: [true, "Name Required."],
            minLength: 3,
            maxLength: 25,
    },
    email:{
        type: String,
        required: [true, "Name Required."],
    },
    phone:{
        type: Number,
        required: [true, "Name Required."],
    },
    gender: {
        type:String,
        required: [true, "Name Required."],
    },
    infection:  {
        type:String,
        required: [true, "Name Required."],
    },
    infectionName: {
        type:String,
        required: [true, "Name Required."],
    },
    pickupService:  {
        type:String,
        required: [true, "Name Required."],
    },
    NumberOfCloths:  {
        type:Number,
        required: [true, "Name Required."],
    },
    weightOfCloths:  {
        type:String,
        required: [true, "Name Required."],
    },
    durationOfCloths:  {
        type:String,
        required: [true, "Name Required."],
    },
    conditionOfCloths:  {
        type:String,
        required: [true, "Name Required."],
    },
    AddressLine1:  {
        type:String,
        required: [true, "Name Required."],
    },
    AddressLine2:  {
        type:String,
        required: [true, "Name Required."],
    },
    state:  {
        type:String,
        required: [true, "Name Required."],
    },
    city:  {
        type:String,
        required: [true, "Name Required."],
    },
    country:  {
        type:String,
        required: [true, "Name Required."],
    },
    pinCode:  {
        type:Number,
        required: [true, "Name Required."],
    },
    dateOfPickup:  {
        type:String,
        required: [true, "Name Required."],
    },
})

const Donor = mongoose.model('donorSchema', donorSchema);

module.exports = Donor;