const mongoose = require("mongoose");

const DB = process.env.MONGODB_URI|| "mongodb+srv://edito:mohit280@cluster0.j8tvx.mongodb.net/texteffect?retryWrites=true&w=majority"

mongoose.connect( DB,{
                      
}).then(()=>{
    console.log("Connection Successful");
}).catch((err)=>{  
    console.log(" No Connection");
});

