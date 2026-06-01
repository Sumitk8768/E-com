import mongoose from "mongoose";

let connectDB = async (req,res)=>{
     try {
        await mongoose.connect("mongodb://localhost:27017/e-com")
        console.log("mongodb connected suceessfully")
     } catch (error) {
        console.log("Error in coonecting MongoDb",error)
     }
}

export default connectDB