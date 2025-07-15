const express = require('express');
const router = express.Router();
const products = require('../data/products.json');

// console.log("➡️ products.js file is loading");
// console.log("➡️ Imported product count:", products.length);

router.use((req, res, next) => {
  console.log("➡️  Received request to:", req.originalUrl);
  next();
});

router.get('/ping', (req, res) => res.send('pong'));

// GET /products
router.get('/', (req, res) => {
    // res.send('/products route is working');
    const category = req.query.category;
    if (category) {
    const filtered = products.filter(p => p.category === category);
        return res.json(filtered);
    }
    res.json(products);
});

// GET /products/:id
router.get('/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) return res.status(404).json({ error: "Product not found" });
  res.json(product);
});

// POST /products
router.post('/', (req, res) => {
  const { title, category, price, imageUrl, description } = req.body;
  if (!title || !category || !price || !imageUrl || !description) {
    return res.status(400).json({ error: "Invalid product data" });
  }
  const newProduct = {
    id: products.length + 1,
    title,
    imageUrl,
    description,
    price,
    category
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

module.exports = router;