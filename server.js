import app from "./src/app.js";
import connectDB from "./src/config/db.js";
let port = 3000;

connectDB()




app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})