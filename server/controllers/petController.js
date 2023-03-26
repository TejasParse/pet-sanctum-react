const asyncHandler = require("express-async-handler");
const { Pet } = require("../models/Pets");



// GET
let getPets = asyncHandler(async (req, res) => {

    let { filter } = req.params;

    let searchJson = {}
    
    if(filter!=="all") {
        searchJson = {
            type: filter
        }
    }

    try {
        const petsData = await Pet.find(searchJson);

        res.json({
            status: "200",
            message: "Pets Found",
            data: petsData,
        });

    } catch (err) {
        console.log(err);

        res.status(500).json({
            status: "500",
            message: "Error",
        });
    }
});

// GET
let getPetById = asyncHandler(async (req, res) => {

    let { id } = req.params;

    try {
        const petsData = await Pet.findById(id);

        res.json({
            status: "200",
            message: "Pet Found",
            data: petsData,
        });

    } catch (err) {
        console.log(err);

        res.status(500).json({
            status: "500",
            message: "Error",
        });
    }
});

// POST
let addPet = asyncHandler(async (req,res) => {

    let profile = req.file;
    console.log(profile);

    try {

        console.log(req.body);
        req.body.imageUrl = req.file
          ? req.file.path
          : "https://hips.hearstapps.com/wdy.h-cdn.co/assets/16/11/3200x1600/1458326940-landscape-gettyimages-530330473-1.jpg?resize=1200:*";
    
        const pet1 = new Pet(req.body);
    
        await pet1.save();
    
        res.status(200).json({
            status: 200,
            message: "Pet has been added!",
            data: pet1
        });

    } catch(err) {
        console.log(err);

        res.status(500).json({
          status: "500",
          message: err.message,
        });
    }


});

module.exports = {
    getPets,
    getPetById,
    addPet
};
