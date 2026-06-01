import { configDotenv } from "dotenv";
import app from "./src/app.js";
import connectDB from "./src/config/db.js";
import "dotenv"

configDotenv()
const port = process.env.PORT || 4000; 

connectDB()




app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})