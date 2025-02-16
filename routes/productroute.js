const express = require("express");
const router = express.Router();
const {getProduct, getSingleProduct, createProduct, updateaProduct, Deleteaproduct, Deleteallproducts} = require("../controlers/product.controler.js");


router.get("/", getProduct);  
router.get("/:id", getSingleProduct);  
router.post("/", createProduct)
router.put("/", updateaProduct)
router.delete("/:id", Deleteaproduct)
router.delete("/", Deleteallproducts)


module.exports = router;