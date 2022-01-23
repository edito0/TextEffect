const mongoose = require("mongoose");
const { Stringify } = require("nodemon/lib/utils");

const formSchema = new mongoose.Schema({
    name :{
        type:String,
        required:true
    },

    email :{ 
        type:String,
        required:true,
        unique:true
    },  
    phone :{
        type:Number,
        required:true,
        unique:true
    }, 
    question :{
        type:String, 
        required:true
    },

});

const Contact = new mongoose.model("Contact",formSchema);
 
module.exports = Contact
