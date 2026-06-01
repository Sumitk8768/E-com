import { Router } from "express";
import validateProduct from "../validators/product.validator.js";
import { createProduct, getAllProducts } from "../controllers/Product.controller.js";

const router = Router()

// Route to create a new product
router.post(
    "/",
    validateProduct,
    createProduct,
)

router.get(
    "/",
   validateProduct,
   getAllProducts
)

export const productRoutes = router
