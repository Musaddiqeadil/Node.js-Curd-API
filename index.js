const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productroute = require("./routes/productroute.js");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products",productroute);

app.get("/", (req, res) => {
  res.send("Hello From Node API! Server My name is Mohammed Musaddiqe Adil");
});









// Delete all products
app.delete("/api/products", async (req, res) => {
  try {
    const result = await Product.deleteMany({}); // Delete all products

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "No products found to delete" });
    }

    res.status(200).json({ message: `${result.deletedCount} products deleted successfully` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Connect to MongoDB first, then start the server
mongoose
  .connect(
    "mongodb+srv://MusaddiqeAdil:Adil%40142351262@cluster0.f8s8y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0z"
  )
  .then(() => {
    console.log("✅ Connected to MongoDB");

    // Start the server only after a successful database connection
    app.listen(4000, () => {
      console.log("🚀 Server is running on http://localhost:4000");
    });
  })
  .catch((err) => {
    console.error("❌ Error connecting to database:", err);
  });
