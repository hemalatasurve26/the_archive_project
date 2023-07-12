const express = require("express");
const {
  getAllUsers,
  registerController,
  loginController,
} = require("../controllers/userController");

// router object

const router = express.Router();

// get all users || get
router.get("/all-users", getAllUsers);

// create user || Post
router.post("/register", registerController);

// Login || Post
router.post("/login", loginController);

module.exports = router;
