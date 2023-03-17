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

// POST
let addPet = asyncHandler(async (req,res) => {

    console.log(req.body);

    const pet1 = new Pet(req.body);

    await pet1.save();

    res.status(200).json({
        status: 200,
        message: pet1,
        data: pet1
    })

});

module.exports = {
    getPets,
    getPetById,
    addPet
};
