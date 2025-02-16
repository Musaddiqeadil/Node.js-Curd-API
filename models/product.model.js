const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Plesae enter the product name"],
    },

    quantity: {
      type: Number,
      required: true,
      default: 0,
    },

    image: {
      type: String,
      required: false,
    },
  },

  {
    Timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);


module.exports = Product;