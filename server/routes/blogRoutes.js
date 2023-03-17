const express = require("express");
const blogControllers = require("../controllers/blogController");
const router = express.Router();

router.get("/", blogControllers.listBlog);
router.post("/addBlog", blogControllers.addBlog);
router.get("/:id", blogControllers.getBlog);
router.delete("/:id", blogControllers.deleteBlog);

module.exports = router;