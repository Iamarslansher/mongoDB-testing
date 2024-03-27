import express from "express";
const router = express.Router();
import Products from "../modles/Products.mjs";

// localhost:3001/products
router.get("/", async (req, res) => {
  const products = await Products.find();
  res.send({
    message: "Products fetch succefully",
    data: products,
  });
});

//  lcocalhost:3001/products/add
router.post("/add", (req, res) => {
  //  db ma data add kaengy
  res.send({ message: "Product add succefully" });
});

//  lcocalhost:3001/products/update
router.put("/update", (req, res) => {
  //  db ma  data update karengy
  res.send({ message: "Product update  succefully" });
});

// lcocalhost:3001/products/delete
router.delete("/delete", (req, res) => {
  //  db se data delete karen gy
  res.send({ message: "Product delete succefully" });
});

export default router;
