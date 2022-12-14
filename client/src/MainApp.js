import Adopt from "./components/Adopt/Adopt";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Upload from "./components/Upload/Upload"
import Rescue from "./components/Rescue/Rescue"
import PetInformation from "./components/PetInformation/PetInformation"
import Signup from "./components/Signup/Signup"
import DonateUs from "./components/Donate/Donate"
import Blogs from "./components/Blogs/Blogs"
import Profile from "./components/Profile/Profile"
import AddBlog from "./components/AddBlog/AddBlog"
import Contact from "./components/Contact/Contact"
import BlogRead from "./components/BlogRead/BlogRead";

let MainApp = (props)=>{
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route index element={<Home/>} />
                <Route path="/Adopt" element={<Adopt/>} />
                <Route path="/Rescue" element={<Rescue />} />
                <Route path="/Login" element={<Login/>} />
                <Route path="/Upload" element={<Upload/>} />
                <Route path="/AddBlog" element={<AddBlog/>}/>
                <Route path="/PetInformation/:id" element={<PetInformation/>} />
                <Route path="/Signup" element={<Signup/>} />
                <Route path="/DonateUs" element={<DonateUs/>} />
                <Route path="/Blogs" element={<Blogs/>} />
                <Route path="/BlogRead/:id" element={<BlogRead />} />
                <Route path="/Contact" element={<Contact/>} />
                <Route path="/Profile" element={<Profile/>} />
            </Routes>
            <Footer />
        </div>
    )
};

export default MainApp;