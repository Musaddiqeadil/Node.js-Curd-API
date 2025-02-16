const Product = require("../models/product.model");

const getProduct = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getSingleProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id); // ✅ Fixed Model Name
    
        if (!product) {
          return res.status(404).json({ message: "Product not found" });
        }
    
        res.status(200).json(product);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    };

const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res
          .status(201)
          .json({ message: "Product created successfully", data: product });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

const updateaProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if (!product) {
          return res.status(404).json({ message: "Product not found" });
        }
    
        const updateaProduct = await Product.findById(id);
        res
          .status(200)
          .json({ message: "Product updated successfully", data: updateaProduct });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

const Deleteaproduct = async (req, res) => {

    try {
        const { id } = req.params;
    
        const product = await Product.findByIdAndDelete(id); // No need for req.body or { new: true }
    
        if (!product) {
          return res.status(404).json({ message: "Product not found" });
        }
    
        res.status(200).json({ message: "Product deleted successfully" });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    
}

const Deleteallproducts = async (req, res) => {
   

    try {
        const result = await Product.deleteMany({}); // Delete all products
    
        if (result.deletedCount === 0) {
          return res.status(404).json({ message: "No products found to delete" });
        }
    
        res.status(200).json({ message: `${result.deletedCount} products deleted successfully` });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

module.exports = {
  getProduct, getSingleProduct, createProduct, updateaProduct, Deleteaproduct,Deleteallproducts
};
