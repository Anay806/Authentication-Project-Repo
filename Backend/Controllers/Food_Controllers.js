import FoodModel from "../Models/Food_Model.js";
import fs from 'fs';



//Add food item
const addFood = async ( req, res) =>{

  let image_fileName = `${req.file.filename}`;

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

// View all food list from database
const listFood = async (req, res) =>{
  try {
    const foods = await FoodModel.find({});
    res.json({success: true, data: foods})
    
  } catch (error) {
    console.log(error)
    res.json({success: false , message : "error when featching food list"})
    
    
  }

}

//Remove food Item from database
const removeFood = async (req, res) =>{
  try {
    const food = await FoodModel.findById(req.body.id);
    fs.unlink(`Uploads/${food.image}`, () =>{});

    await FoodModel.findByIdAndDelete(req.body.id)
    res.json({success: true, message : "Food Item deleted successfully"})
    
  } catch (error) {
    console.log(error);
    res.json({success: false, message : "Error when i deleting food Item"})
    
    
  }

}



export {addFood, listFood, removeFood}