import express from "express";
import { productRoutes } from "./routes/product.routes.js";
let app = express()
app.use(express.json())

app.use("/api/products", productRoutes);

export default app;