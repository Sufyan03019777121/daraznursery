// 📄 File: backend/routes/products.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const multer = require('multer');
const path = require('path');

// 📸 Image Upload Config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Ensure the 'uploads' folder exists
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage }); 

// 🟢 GET all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Server Error' });
  }
});

// 🔵 POST new product
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const image = req.file ? req.file.path : '';

    const newProduct = new Product({ name, price, description, image });
    const savedProduct = await newProduct.save();
    res.json(savedProduct);
  } catch (error) {
    console.error('❌ Error saving product:', error);
    res.status(500).json({ error: 'Server Error' });
  }
});

// 🔴 DELETE a product by ID
router.delete('/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('❌ Error deleting product:', error);
    res.status(500).json({ error: 'Server Error' });
  }
});

// 🟠 UPDATE a product by ID
router.put('/:id', upload.single('image'), async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const image = req.file ? req.file.path : undefined;

    const updateFields = { name, price, description };
    if (image) updateFields.image = image;

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      updateFields,
      { new: true }
    );

    res.json(updatedProduct);
  } catch (error) {
    console.error('❌ Error updating product:', error);
    res.status(500).json({ error: 'Server Error' });
  }
});

// 🟡 GET a single product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
});

module.exports = router;