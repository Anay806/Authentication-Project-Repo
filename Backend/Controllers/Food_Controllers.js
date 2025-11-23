import FoodModel from "../Models/Food_Model.js";
import fs from 'fs';



//Add food item
const addFood = async ( req, res) =>{

  let image_fileName = `$(req.file.filename)`;

  const food = new FoodModel({
    name : req.body.name,
    description : req.body .description,
    price : req.body.price,
    category : req.body.category,
    image : image_fileName
  })
  try {
    await food.save();
    res.send({success: true, message : "Food Added" })
  } catch (error) {
    console.log(error);
    res.json({success: false , message :"Error when i Adding Food"})
    
    
  }

}

//all food list
const listFood = async (req, res) =>{

}



export {addFood, listFood}