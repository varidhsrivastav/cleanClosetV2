const mongoose = require("mongoose");


const addngoSchema = new mongoose.Schema({
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

const Addngo = mongoose.model("AddNgo", addngoSchema);

module.exports = Addngo;