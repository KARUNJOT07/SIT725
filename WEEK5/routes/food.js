// // const express = require("express");
// // const router = express.Router();

// // // Import the controller
// // const foodController = require("../controllers/foodController");

// // // Route → Controller function
// // router.get("/", foodController.getAllFood);

// // module.exports = router;

// const express = require("express");
// const router = express.Router();

// // Import all controllers via index.js
// const Controllers = require("../controllers");

// router.get("/", Controllers.foodController.getAllFood);

// module.exports = router;

const express = require("express");
const router = express.Router();

// Import all controllers via index.js
const Controllers = require("../controllers");

router.get("/", Controllers.foodController.getAllFood);

module.exports = router;
