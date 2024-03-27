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
router.post("/add", async (req, res) => {
try{
  await Products.create(req.body)
  res.send({ message: "Product add succefully" });
}catch(e){
  res.send({ message: e.message })
}
  
});

//  lcocalhost:3001/products/update
router.put("/update", (req, res) => {
  res.send({ message: "Product update  succefully" });
});

// lcocalhost:3001/products/delete
router.delete("/delete", (req, res) => {
  res.send({ message: "Product delete succefully" });
});

export default router;
