// Middleware to validate product data before processing the request
const validateProduct = (req, res, next) => {
  // Extract product fields from request body
  const {name, description, price, category , images} = req.body

  // Validate name existence
  if (!name) {
    return res.status(400).json({
      success: false,
      message: "name is required",
    });
  }

  // Validate description existence
  if (!description) {
    return res.status(400).json({
      success: false,
      message: "description is required",
    });
  }

  // Validate price existence
  if (!price) {
    return res.status(400).json({
      success: false,
      message: "price is required",
    });
  }

  // Validate price data type
  if (isNaN(Number(price))) {
    return res.status(400).json({
      success: false,
      message: "price should be a number",
    });
  }
  
  // Pass control to the next middleware or controller
  next();
};

export default validateProduct
