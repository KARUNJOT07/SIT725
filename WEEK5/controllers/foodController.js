// // Sample data (pretend it's from a database)
// const foodItems = [
//   { id: 1, name: "Pizza", price: "$12" },
//   { id: 2, name: "Burger", price: "$8" },
//   { id: 3, name: "Sushi", price: "$15" },
// ];

// // Controller logic
// exports.getAllFood = (req, res) => {
//   res.json({
//     status: 200,
//     data: foodItems,
//     message: "Food menu retrieved successfully",
//   });
// };

// Import the service
const foodService = require("../services/foodService");

// Controller uses the service to get data
exports.getAllFood = (req, res) => {
  const items = foodService.getAllFood();
  res.json({
    status: 200,
    data: items,
    message: "Food menu retrieved using service",
  });
};
