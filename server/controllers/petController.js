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

module.exports = {
    getPets,
    getPetById
};
