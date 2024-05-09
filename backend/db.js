import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/paytm")
const { Schema } = mongoose;

// Modify the checks like written for the username to other attributes also

const userSchema = new Schema({
    username:{
        type: String,
        required:true,
        unique: true,
        trim:true,
        lowercase:true,
        minlength: 5,
        maxLength: 30  
    },
    password:String,
    firstName: String,
    lastName: String
});

const User = mongoose.model('User', userSchema)

module.exports = {
    User
};