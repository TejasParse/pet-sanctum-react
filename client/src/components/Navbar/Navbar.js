
import { Link } from "react-router-dom"
import { Navbar, Container, Nav } from "react-bootstrap";

import { useSelector } from "react-redux";

let Navbar1 = (props) => {

    const isLogged = useSelector(state=> state.isLoggedIn )
    const isAdmin = useSelector(state=> state.isAdmin )
    
    return (
        <div>
            <div className="d-flex justify-content-evenly bg-dark p-3 text-white">
                <Link to={"/"} style={{textDecoration:"none"}}>
                    Home
                </Link>
                <Link to={"/Adopt"} style={{textDecoration:"none"}}>
                    Adopt
                </Link>
                <Link to={"/Upload"} style={{textDecoration:"none"}}>
                    Upload
                </Link>
                <Link to={"/Rescue"} style={{textDecoration:"none"}}>
                    Rescue
                </Link>
                {
                    isAdmin && <Link to={"/AddBlog"} style={{textDecoration:"none"}}>
                        Add Blog
                    </Link>
                }
                <Link to={"/DonateUs"} style={{textDecoration:"none"}}>
                    Donate Us
                </Link>
                <Link to={"/Contact"} style={{textDecoration:"none"}}>
                    Contact
                </Link>
                <Link to={"/Blogs"} style={{textDecoration:"none"}}>
                    Blogs
                </Link>
                { isLogged && <Link to={"/Profile"} style={{textDecoration:"none"}}>
                    Profile
                </Link> }
                { !isLogged && <Link to={"/Signup"} style={{textDecoration:"none"}}>
                    Sign Up
                </Link> }
                
                { !isLogged && <Link to={"/Login"} style={{textDecoration:"none"}}>
                    Login
                </Link> }
                
                
                
            </div>
        </div>
    )

};

export default Navbar1;