require("dotenv").config()

const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");
const petRoutes = require("./routes/petRoutes");
const connectDb = require("./config/db")
connectDb();

const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRoutes);
app.use("/api/blog", blogRoutes);
app.use("/api/pet", petRoutes);

app.get("*", (req,res)=>{

    res.status(404).json({
        status: "404",
        message: "Page not found!"
    });
});

app.listen(PORT, ()=>{
    console.log(`Listening to PORT ${PORT}`);
});