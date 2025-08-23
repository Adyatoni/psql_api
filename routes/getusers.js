const express = require("express");
const router = express.Router();
const User = require("../models/usermodel");

router.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Database error" });
  }
});

module.exports = router;
