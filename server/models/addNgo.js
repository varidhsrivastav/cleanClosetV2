const mongoose = require("mongoose");


const addngo = new mongoose.Schema({
    ngoname: {
        type : String,
        required : true,   
    },
    ngoType: {
        type : String,
        required: true
    },
    NgoAddress:{
        type: String,
        required:true,
    },
    ngodescription:{
        type:String,
        required:true
    }

})

const Addngo = mongoose.model("ADDNGO", addngo);

module.exports = Addngo;