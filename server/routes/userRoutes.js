const express = require("express");
const userControllers = require("../controllers/userController");
const router = express.Router();
const protect = require('../middleware/auth')

const { storage } = require("../cloud");
const multer = require("multer");

const upload = multer({ storage });

router.post("/signup",upload.single("imageUrl"), userControllers.registerUser);
router.get("/:id", userControllers.getUser);
router.delete("/:id", userControllers.deleteUser);
router.post("/login", userControllers.loginUser);

module.exports = router;
