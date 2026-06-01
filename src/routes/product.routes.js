import { Router } from "express";
import validateProduct from "../validators/product.validator.js";
import { createProduct, getAllProducts, getProductById } from "../controllers/Product.controller.js";

const router = Router()

// Route to create a new product
router.post(
    "/",
    validateProduct,
    createProduct,
)

// Route to get all product
router.get(
    "/",
   getAllProducts,
)

// Route to get product by id
router.get(
    "/:id",
    getProductById,
)



export const productRoutes = router
