import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim: true,

    },
    description: {
      type: String,
      trim: true,
    },

    price: {
      type: Number,
      required: true,
    },

    category: {
      type: String,
      trim: true,
    },

    images: [
      {
        type: String,
      },
    ],

})

let productModel = mongoose.model("Product", productSchema);

export default productModel;