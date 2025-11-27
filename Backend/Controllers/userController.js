import userModel from "../Models/userModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import validator from "validator"
import 'dotenv/config'



//login user

const loginUser = async (req, res) =>{

}

const createToken =(id) =>{
  return jwt.sign({id}, process.env.jwt_SECRET)
}

//register user
const registerUser = async (req,res) =>{
  const {name, password , email} =req.body;
  try {
    //Cheacking if already exists
    const exists = await userModel.findOne({email});
    if(exists){
      return res.json({success: false, message: "User Already Exists"})
    }

    //Validating email format stroung password
    if(!validator.isEmail(email)){
      return res.json({success: false, message: "Invalid Email"})
    }

    if (password.length < 8){
      return res.json({ success: false, message: "Please Enter Strong Password"})
    }

    //Hashing User Password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt);

    //Creating User

    const newUser = new userModel({
      name:name,
      email: email,
      passwaord: hashedPassword,
    })

    const user = await newUser.save();
    const token = createToken(user._id)
    res.json({success: true,token })

    





  } catch (error) {
    console.log(error);
    res.json({success:false, message: "Error"})
    
    
  }

}

export {loginUser, registerUser}