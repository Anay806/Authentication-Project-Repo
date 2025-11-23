import express from 'express';
import cors from 'cors';
import { connectDB } from './Config/DB.js';
import foodRouter from './Routers/Food_Routes.js';




//app config
const app = express();
const port = 4000


//middlewares
app.use(express.json());
app.use(cors());

//Database connection 
connectDB();

//Api EndPoints
app.use("/api/food", foodRouter)
app.use('/images',express.static('Uploads') )



app.get('/', (req, res) =>{
  res.send('Hello World How are you')

})

//listen
app.listen(port, () =>{
  console.log(`Server is running : ${port}`);
  
})


//mongodb+srv://anayshrivastava1999_db:anayshrivastava1999_db@anay-clusters.q6te7de.mongodb.net/?appName=Anay-Clusters
