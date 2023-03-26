const asyncHandler = require("express-async-handler");
const { Blog } = require("../models/Blogs");

let addBlog = asyncHandler(async (req, res) => {
    const newBlog = new Blog({
      imageUrl: "This is a new URL",
      title: req.body.title,
      description: req.body.description,
      author: req.body.author || "This is a test a author",
    });

    await newBlog
      .save()
      .then((hmm) => {
        console.log(hmm);

        // res.redirect(`/BlogRead?uid=${hmm._id}`);
        res.json({
            status: 200,
            message: "Blog Added!"
        })
      })
      .catch((err) => {
        console.log(err);
        // res.redirect("/");
        res.json({
          status: 500,
          message: "Error adding blog",
        });

      });
});

let getBlog = asyncHandler(async (req,res) => {

    console.log(req.params);
    const getBlog1 = await Blog.findById(req.params.id)
    
    res.status(200).json({
      status: 200,
      message: "Blog Succesfully Retreived",
      data: getBlog1
    });
});

let deleteBlog = asyncHandler(async (req,res) => {

    const { id } = req.params;

    const tmp = await Blog.findByIdAndDelete(id);

    res.status(200).json({
      status: 200,
      message: "Blog Succesfully Deleted!"
    });
});

let listBlog = asyncHandler(async (req, res)=>{

  try {
    const listBlog = await Blog.find({});
  
    res.status(200).json({
      status: 200,
      data: listBlog
    })
  } catch(err) {
    res.status(200).json({
      status: 200,
      data: listBlog,
    });
  }


});

module.exports = {
  addBlog,
  getBlog,
  deleteBlog,
  listBlog
};
