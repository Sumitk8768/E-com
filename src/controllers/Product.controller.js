import productModel from "../models/Product.js";

// Create Product Controller
export const createProduct = async (req, res) => {
  try {

    // Get data sent by client from req.body
    const { name, description, price, category } = req.body;

    // Create a new product document in MongoDB
    const product = await productModel.create({
      name,
      description,
      price,
      category,
    });

    // Send success response
    return res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: product,
    });

  } catch (error) {

    // Handle unexpected server/database errors
    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};