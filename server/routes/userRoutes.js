const express = require("express");
const userControllers = require("../controllers/userController");
const router = express.Router();
const protect = require('../middleware/auth')


router.post("/signup", userControllers.registerUser);
router.get("/:id", protect, userControllers.getUser);
router.delete("/:id", userControllers.deleteUser);
router.post("/login", userControllers.loginUser);

module.exports = router;
