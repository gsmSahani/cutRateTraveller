const mongoose = require("mongoose");

// creating db

mongoose.connect("mongodb://127.0.0.1:27017/CommunityRegistration",{
    // useNewUrlParser: true,
    // useUnifiedTopology:true,
}).then(() => {
    console.log(`connection successful`);
}).catch((error) =>{
    console.log(error);
});