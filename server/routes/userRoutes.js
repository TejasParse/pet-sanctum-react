const express = require("express");
const userControllers = require("../controllers/userController");
const router = express.Router();

router.post("/signup", userControllers.registerUser);
router.get("/:id", userControllers.getUser);
router.delete("/:id", userControllers.deleteUser);
router.get("/login", userControllers.loginUser);

module.exports = router;
