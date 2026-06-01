import { Router } from "express";
import validateProduct from "../validators/product.validator.js";
import {deleteProduct,updateProduct, createProduct, getAllProducts, getProductById } from "../controllers/Product.controller.js";

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

// Routes to update a product by id
router.patch(
    "/:id",
    updateProduct,
)

// Routes to delete a product by id
router.delete(
    "/:id",
    deleteProduct,
)

export const productRoutes = router
