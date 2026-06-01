import mongoose from "mongoose";
import productModel from "../models/Product.js";

// Create a new product in the database
export const createProduct = async (req, res) => {
  try {
    const { name, description, price, category } = req.body;

    // Save product data to MongoDB
    const product = await productModel.create({
      name,
      description,
      price,
      category,
    });

    return res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: product,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Fetch all available products from the database
export const getAllProducts = async (req, res) => {
  try {
    // Retrieve all documents from the collection
    let products = await productModel.find();

    return res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Fetch a specific product using its unique MongoDB ID
export const getProductById = async(req, res) => {
    try {
        // Extract ID from URL route parameters
        const {id} = req.params;

        // Search database by object identifier
        let product = await productModel.findById(id);

        // Return error if no matching document exists
        if(!product) return res.status(404).json({
            success:false,
            message: "Product not found"
        })

        return res.status(200).json({
            success:true,
            message: "Product fetched successfully",
            product,
        })

    } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
    }
}
