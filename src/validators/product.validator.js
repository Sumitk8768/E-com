 const validateProduct = (req, res, next) => {
        const {name, description, price, category , images} = req.body

  if (!name) {
    return res.status(400).json({
      success: false,
      message: "name is required",
    });
  }

  if (!description) {
    return res.status(400).json({
      success: false,
      message: "description is required",
    });
  }

  if (!price) {
    return res.status(400).json({
      success: false,
      message: "price is required",
    });
  }

  if (isNaN(Number(price))) {
    return res.status(400).json({
      success: false,
      message: "price should be a number",
    });


  }
  next();
};

export default validateProduct