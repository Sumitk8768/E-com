import { Router } from "express";
import validateProduct from "../validators/product.validator.js";
import { createProduct } from "../controllers/Product.controller.js";

const router = Router()

// Route to create a new product
router.post(
    "/",
    validateProduct,
    createProduct,
)

export const productRoutes = router
