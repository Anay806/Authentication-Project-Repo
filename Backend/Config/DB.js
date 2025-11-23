import mongoose from "mongoose";



export const connectDB = async () =>{
  await mongoose.connect('mongodb+srv://anayshrivastava1999_db:anayshrivastava1999_db@anay-clusters.q6te7de.mongodb.net/Food-Delivery-App').then(() =>{
    console.log("Database Connected...");
    
  })
}