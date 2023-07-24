const mongoose = require("mongoose");


const contactSchema = new mongoose.Schema({
    yname:{
        type : String,
        required: [true, "Name Required."],
            minLength: 3,
            maxLength: 25,
    },
    yemail:{
        type: String,
        required: [true, "Name Required."],
    },
    about:{
        type: String,
        required: [true, "about Required."],
    },
})

const ContactUs = mongoose.model('contactSchema', contactSchema);

module.exports = ContactUs;