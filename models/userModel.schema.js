const mongoose = require('mongoose')
// Making a new Schema for storing name,email and Password
const registrationSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true,"Name is required for registration"],
        trim:true
    },
    email:{
        type:String,
        require:[true,"Name is required for registration"],
    },
    password:{
        type:String,
        require:[true,"Password is required for further Process"],
    }
})
// Exporting this Schema as User
module.exports = mongoose.model("User", registrationSchema)


