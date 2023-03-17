const asyncHandler = require("express-async-handler");
const { Profile }  = require("../models/Profile");

//POST
let registerUser = asyncHandler(async (req, res) => {
  
    console.log(req.body);
    const temp = req.body;

    temp.imageUrl = "../Resources/images/empty_profile.webp";
    temp.isAdmin = 0;

	let temp1 = await Profile.findOne({ username: req.body.username });

	if(temp1) {
		res.json({
			status: "400",
			message: "Username already taken"
		});
	} else {

		let ProfileData = new Profile(temp);
		let tp1 = await ProfileData.save();
		
		console.log("Profile Data inserted successfully");
		res.json({
			status: "200",
			message: "Sign Up Successfull",
			data: tp1
		});
	
	}





});

//GET
let getUser = asyncHandler(async (req, res) => {
	
	let { id } = req.params;
	
	console.log(id);

	try {

		const Profile1 = await Profile.findById(id);
		console.log(Profile1);
		res.json({
			status: "200",
			message: "User Found",
			data: Profile1
		});

	} catch(err) {
		console.log(err);
		console.log("ruk jaa bc");

		res.json({
			"status" :"400",
			"message": "User does not exist"
		});
	}


	
    
});

//DELETE
let deleteUser = asyncHandler(async (req, res) => {
	
	try {
		const tp1 = await Profile.deleteOne({
			_id: req.params.id
		});

		res.json({
			"status": "200",
			message: "Deleted Profile Succesfully"
		})

	} catch(err) {
		res.json({
			"status": 400,
			"message": err.message
		})
	}


});

//GET
let loginUser = asyncHandler(async (req,res)=> {

	res.send("Checking login credentials for login");

});



module.exports = {
  registerUser,
  getUser,
  deleteUser,
  loginUser
};
