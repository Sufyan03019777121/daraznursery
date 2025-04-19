// 📄 File: backend/server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const path = require('path');

const app = express();

// 🔓 Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// 📂 Serve static files (images) from "uploads" folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// 🔗 Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// ✅ Sample test route
app.get('/', (req, res) => {
  res.send('🌱 Nursery E-Commerce Backend Running');
});

// 🔁 Load product API routes
const productRoutes = require('./routes/products');
app.use('/api/products', productRoutes);

// 🚀 Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
