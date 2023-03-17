const express = require("express");
const petControllers = require("../controllers/petController");
const router = express.Router();

router.get("/:filter", petControllers.getPets);
router.get("/petinformation/:id", petControllers.getPetById);
router.post("/addPet", petControllers.addPet)



module.exports = router;
