// 📄 File: backend/routes/products.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// 🟢 GET all products
router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// 🔵 POST new product (admin use)
router.post('/', async (req, res) => {
  const newProduct = new Product(req.body);
  const saved = await newProduct.save();
  res.json(saved);
});

module.exports = router;
