// routes/counter.js
const express = require('express');
const router = express.Router();
const Counter = require('../models/counter');

// Ensure to have at least one counter document in the database
const initializeCounter = async () => {
  const count = await Counter.countDocuments();
  if (count === 0) {
    await new Counter({ count: 0 }).save();
  }
};

// Get the current counter value
router.get('/counter', async (req, res) => {
  try {
    await initializeCounter();
    const counter = await Counter.findOne();
    res.json(counter);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update the counter value
router.put('/counter', async (req, res) => {
  try {
    await initializeCounter();
    const counter = await Counter.findOne();
    counter.count += 1; // Increment counter
    await counter.save();
    res.json(counter);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
