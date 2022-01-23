const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/TextEffect",{

}).then(()=>{
    console.log("Connection Successful");
}).catch(()=>{  
    console.log(" No Connection");
});