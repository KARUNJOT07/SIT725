const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to the Projects Room");
});

module.exports = router;
