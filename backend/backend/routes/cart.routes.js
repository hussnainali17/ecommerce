const express = require('express');
const router = express.Router();
const Cart = require('../models/cart.model');
const authMiddleware = require('../middlewares/auth.middleware');
const cartController = require('../controllers/cart.controller');
// ➕ Add item to cart
router.post('/add', cartController.add);

// 🗑️ Remove item
router.post('/remove', cartController.remove);

// 📥 Get cart
router.post('/get', cartController.getCart);

module.exports = router;
