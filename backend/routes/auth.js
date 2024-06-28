const express = require("express");
const { body } = require("express-validator");
const { signup } = require("../middleware/auth/Signup"); // Assuming signup logic is in Signup.js
const { signin } = require("../middleware/auth/Signin"); // Assuming signin logic is in Signin.js
const { UsersInfo } = require("../middleware/auth/UsersInfo"); // Assuming user info retrieval logic is in UsersInfo.js
const router = express.Router();

// Route: /api/auth/SignUp
// Description: Create a new user
router.post("/SignUp", [
  body("name").isLength({ min: 3 }).withMessage("Name must be at least 3 characters"),
  body("email").isEmail().withMessage("Enter a valid email"),
  body("password").isLength({ min: 5 }).withMessage("Password must be at least 5 characters"),
], signup);

// Route: /api/auth/login
// Description: Authenticate user and generate JWT token
router.post("/SignIn", [
  body("email").isEmail().withMessage("Enter a valid email"),
  body("password").exists().withMessage("Password cannot be empty"),
], signin);

// Route: /api/auth/getuser
// Description: Get user details using JWT token
router.post("/getuser", UsersInfo);

module.exports = router;
