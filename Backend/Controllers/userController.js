import userModel from "../Models/userModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import validator from "validator"
import 'dotenv/config'



//login user

const loginUser = async (req, res) =>{
  const {password, email} = req.body;
  try {
    const user = await userModel.findOne({email});

    if(!user){
      res.json({success:false, message: "User Not exists"})
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch){
     return res.json({success:false, message: "Invalid Credentials"})
    }

    const token = createToken (user._id);
    res.json({success:true, token})

  } catch (error) {
    console.log(error);
    res.json({success: false, message: "Error"})
    
    
  }

}

const createToken =(id) =>{
  return jwt.sign({id}, process.env.JWT_SECRET)
}

//register user
const registerUser = async (req,res) =>{
  console.log(req.body);
  
  const {name, password , email} = req.body;
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
      password: hashedPassword,
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