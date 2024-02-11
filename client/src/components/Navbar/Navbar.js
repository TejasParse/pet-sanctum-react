
import { Link } from "react-router-dom"
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

import { useSelector } from "react-redux";

import "./Navbar.css";

let Navbar1 = (props) => {

    const isLogged = useSelector(state => state.isLoggedIn);
    const isAdmin = useSelector(state => state.isAdmin);

    const titleFontFamily = {
        fontFamily: "'Single Day', cursive",
        color: "#F25C05"
    }

    const linkFontFamily = {
        fontFamily: "'Poor Story', system-ui",
        color: "black"
    }

    const profileActionsFamily = {
        fontFamily: "'Montserrat', sans-serif",
        color: "blue"
    }

    const NewNavbar = () => {
        return (
            <div className="navbarClass">
                <Navbar sticky="top" collapseOnSelect bg="white" data-bs-theme="dark" expand="lg" className="bg-body-tertiary shadow-lg navbar-back">
                    <Container>
                        <Navbar.Brand>
                            <div className="d-flex flex-row align-items-center">
                                <img src={"/PetSanctumIcon.png"} width={"30px"} className="me-2"/>
                                <Link to={"/"} style={{ textDecoration: "none", ...titleFontFamily }} className="fs-3 fw-bold">
                                    Pet Sanctum
                                </Link>
                            </div>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="bg-dark"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="m-auto">
                                <Nav.Link className="navbar-div">
                                    <Link to={"/Adopt"} style={{ textDecoration: "none", ...linkFontFamily }} className="fs-5">
                                        Adopt a Pet
                                    </Link>
                                </Nav.Link>
                                <Nav.Link className="navbar-div">
                                    <Link to={"/Upload"} style={{ textDecoration: "none", ...linkFontFamily }} className="fs-5">
                                        Upload My Pet
                                    </Link>
                                </Nav.Link>
                                <Nav.Link className="navbar-div">
                                    <Link to={"/Rescue"} style={{ textDecoration: "none", ...linkFontFamily }} className="fs-5">
                                        Rescue Request
                                    </Link>
                                </Nav.Link>

                                <Nav.Link>
                                    <Link to={"/Blogs"} style={{ textDecoration: "none", ...linkFontFamily }} className="fs-5">
                                        Blogs
                                    </Link>
                                </Nav.Link>


                                <Nav.Link >
                                    <Link to={"/DonateUs"} style={{ textDecoration: "none", ...linkFontFamily }} className="fs-5">
                                        Donate Us
                                    </Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link to={"/Contact"} style={{ textDecoration: "none", ...linkFontFamily }} className="fs-5">
                                        Contact Us
                                    </Link>
                                </Nav.Link>
                            </Nav>
                            <Nav>
                                {isLogged ?
                                    (
                                        <Nav.Link>
                                            <Link to={"/Profile"} style={{ textDecoration: "none", ...profileActionsFamily }}>
                                                Profile
                                            </Link>
                                        </Nav.Link>
                                    )
                                    :
                                    (
                                        <>
                                            <Nav.Link>
                                                <Link to={"/Signup"} style={{ textDecoration: "none", ...profileActionsFamily }}>
                                                    Sign Up
                                                </Link>
                                            </Nav.Link>
                                            <Nav.Link>
                                                <Link to={"/Login"} style={{ textDecoration: "none", ...profileActionsFamily }}>
                                                    Login
                                                </Link>
                                            </Nav.Link>
                                        </>
                                    )}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>

        )
    }

    return (
        <div>
            {/* <div className="d-flex justify-content-evenly bg-dark p-3 text-white">
                <Link to={"/"} style={{ textDecoration: "none" }}>
                    Home
                </Link>
                <Link to={"/Adopt"} style={{ textDecoration: "none" }}>
                    Adopt
                </Link>
                <Link to={"/Upload"} style={{ textDecoration: "none" }}>
                    Upload
                </Link>
                <Link to={"/Rescue"} style={{ textDecoration: "none" }}>
                    Rescue
                </Link>
                {
                    isAdmin && <Link to={"/AddBlog"} style={{ textDecoration: "none" }}>
                        Add Blog
                    </Link>
                }
                <Link to={"/DonateUs"} style={{ textDecoration: "none" }}>
                    Donate Us
                </Link>
                <Link to={"/Contact"} style={{ textDecoration: "none" }}>
                    Contact
                </Link>
                <Link to={"/Blogs"} style={{ textDecoration: "none" }}>
                    Blogs
                </Link>
                {isLogged && <Link to={"/Profile"} style={{ textDecoration: "none" }}>
                    Profile
                </Link>}
                {!isLogged && <Link to={"/Signup"} style={{ textDecoration: "none" }}>
                    Sign Up
                </Link>}

                {!isLogged && <Link to={"/Login"} style={{ textDecoration: "none" }}>
                    Login
                </Link>}



            </div> */}
            < NewNavbar />
        </div>
    )

};

export default Navbar1;