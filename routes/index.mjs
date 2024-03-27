import express from "express";
const router = express.Router();
import products from "./products.mjs";

router.use("/products", products);

export default router;
