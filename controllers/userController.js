// Requiring the Schema of User Registration 
const User= require('../models/userModel.schema.js')
// Making Controller for registration for User
exports.registerUser = async(req,res)=>{
    try {
        const {name ,email , password } = req.body
        // Checking if all the fields are given by user
        if(!name || !email || !password) {
            res.status(400).json({
                success:false,
                message:"Please fill out all fields"
            })
            throw new Error("Please fill all fields")
        }
        const user = await User.create({
            name,
            email,
            password
        })
        res.status(201).json({
            success:true,
            message:"User Registered Successfully",
            user:user
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            success:false,
            message:error.message
        })
    }

}
// Controller for User Login
exports.loginuser = async (req,res)=>{
    try {
        const {email,password_given} = req.body
        const emailExists =await User.find({email})
        // Checking if User exists
        if(emailExists.length == 0) {
            res.status(400).json({
                success:false,
                message:"No account associated with the password"
            })

        }else 
        { 
            // If Exists and Password is correct
            if(emailExists[0].password === password_given) {
                res.status(400).json({
                    status:true,
                    message:"User Login Successfully"
                })
            }
            // If Exists and the Password is Incorrect
            else{
                res.status(400).json({
                    status:false,
                    messasge:"Password is Wrong"
                })
            }
        }
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status:400,
            message:error.message
        })   
    }
}