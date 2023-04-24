import "./Profile.css"
import { Tabs, Tab, Accordion, Button, Modal } from "react-bootstrap"; 
import { useState, useEffect } from "react";
import { Link } from "react-router-dom" 
import axios from "axios"
import EmptyProfile from "./images/empty_profile.webp"
import { authActions } from "../../store/index"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


import { useSelector } from "react-redux"

let Profile = ()=>{ 

    const dispatch = useDispatch();
    const navigate = useNavigate();
   

    let isLoggedIn = useSelector(state=> state.isLoggedIn);

    if(!isLoggedIn) {
        navigate("/Login");
    }

    let LoginProfile = useSelector((state=> state.LoginProfile ));
  
    let isAdmin = useSelector((state=> state.isAdmin));
    
    let onClickLogout = (event)=>{
        dispatch(
            authActions.logout({}) // Inside (), dictionary used (action.payload.username)
        )
        navigate("/")
    }

    let [totalPet, changePetData] = useState([]);
    let [totalBlog, changeBlogData] = useState([]);
    let [totalProfile, changeProfileData] = useState([]);

    let [uploadedPet, changeUploadedPet] = useState([]);

    useEffect(()=>{
      axios
        .get(`${process.env.REACT_APP_SERVER_LINK}/api/user/rescuedPets/${LoginProfile._id}`)
        .then((res) => {
          console.log(res.data);

          changeUploadedPet(res.data.data);

        })
        .catch((err) => {
          console.log(err);
        });
    }, [])

    useEffect(()=>{
        
        axios.get(`${process.env.REACT_APP_SERVER_LINK}/api/pet/all`)
            .then(res=>{
                
                console.log(res.data);
        
                changePetData(res.data.data);
                
            })
            .catch(err=>{
                console.log(err);
            })

    },[]);

    useEffect(()=>{
        
        axios
          .get(
            `${process.env.REACT_APP_SERVER_LINK}/api/blog/`
          )
          .then((res) => {
            console.log(res.data);

            changeBlogData(res.data.data);
          })
          .catch((err) => {
            console.log(err);
          });

    },[])
    
    useEffect(()=>{
        
        axios
          .get(`${process.env.REACT_APP_SERVER_LINK}/api/user/listProfiles`)
          .then((res) => {
            console.log(res.data, "idhar");

            changeProfileData(res.data.data);
          })
          .catch((err) => {
            console.log(err);
          });

    },[])

    let onDeleteProfile = (event)=>{
        axios
          .delete(`${process.env.REACT_APP_SERVER_LINK}/api/user/${event.target.getAttribute("data-id")}`)
          .then((res) => {
            console.log(res.data, "Deleted Profile yay");

            changeProfileData(res.data.data);
          })
          .catch((err) => {
            console.log(err);
          });
    };

    let onDeletePet = (event)=>{
      axios
        .delete(
          `${process.env.REACT_APP_SERVER_LINK}/api/pet/${event.target.getAttribute(
            "data-id"
          )}`
        )
        .then((res) => {
          console.log(res.data, "Deleted Pet yay");

          changePetData(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    let onDeleteBlog = (event)=>{
      axios
        .delete(
          `${process.env.REACT_APP_SERVER_LINK}/api/blog/${event.target.getAttribute(
            "data-id"
          )}`
        )
        .then((res) => {
          console.log(res.data, "Deleted Pet yay");

          changeBlogData(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }


    return (
      <div className="container-lg p-3" id="Mainbox">
        <div className="row">
          <div className="col-lg-3 col-md-6 p-3 d-flex justify-content-center">
            <img
              src={LoginProfile.imageUrl}
              alt=""
              id="profile"
              width="200px"
              height="200px"
              style={{
                backgroundPosition: "center",
                backgroundSize: "contain",
              }}
            />
          </div>
          <div className="col-lg-9 col-md-6 p-3">
            <h2>{LoginProfile.fname + " " + LoginProfile.lname}</h2>
            <p className="mb-1">
              {isAdmin && "Admin"}
              {!isAdmin && "User"}
            </p>
            <p className="fst-italic">Joined Feb 2020</p>

            <button className="btn btn-danger" onClick={onClickLogout}>
              Log Out
            </button>
          </div>
        </div>

        <div className="container-fluid pt-3">
          <Tabs
            defaultActiveKey="profile"
            id="justify-tab-example"
            className="mb-3"
            justify
          >
            <Tab eventKey="edit" title="Edit Profile Info">
              <form
                className="row g-3 mt-1"
                method="post"
                action="/editProfileInfo?id=<%= LoginProfile._id %>"
                enctype="multipart/form-data"
              >
                <div className="col-12 input-group mb-3">
                  <input
                    type="file"
                    className="form-control"
                    id="inputGroupFile01"
                    accept="image/*"
                    onchange="loadFile(event)"
                    name="ProfileImage"
                  />
                </div>
                <div className="col-6 form-floating mb-2">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="First Name"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      required={true}
                      defaultValue={LoginProfile.fname}
                      placeholder="First Name"
                    />
                  </FloatingLabel>
                </div>
                <div className="col-6 form-floating mb-2">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Last Name"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      required={true}
                      defaultValue={LoginProfile.lname}
                      placeholder="Last Name"
                    />
                  </FloatingLabel>
                </div>
                <div className="col-6 form-floating mb-2">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Username"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      required={true}
                      defaultValue={LoginProfile.username}
                      placeholder="Last Name"
                    />
                  </FloatingLabel>
                </div>
                <div className="col-md-6 form-floating mb-2">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Email Adress"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      required={true}
                      defaultValue={LoginProfile.email}
                      placeholder="Last Name"
                    />
                  </FloatingLabel>
                </div>
                <div className="input-group mb-3 col-6">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Phone Number"
                    className="mb-3 w-100"
                  >
                    <Form.Control
                      type="tel"
                      required={true}
                      defaultValue={LoginProfile.phone}
                      placeholder="Last Name"
                    />
                  </FloatingLabel>
                </div>
                <div className="input-group mb-2 col-6">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Password"
                    className="mb-3 w-100"
                  >
                    <Form.Control
                      type="password"
                      required={true}
                      defaultValue={LoginProfile.password}
                      placeholder="Last Name"
                    />
                  </FloatingLabel>
                </div>
                <div className="col-12 form-floating mb-2">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Address"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      required={true}
                      defaultValue={LoginProfile.address}
                      placeholder="Last Name"
                    />
                  </FloatingLabel>
                </div>
                <div className="col-md-6 form-floating mb-2">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="City"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      required={true}
                      defaultValue={LoginProfile.city}
                      placeholder="Last Name"
                    />
                  </FloatingLabel>
                </div>
                <div className="col-md-4 form-floating mb-2">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="State"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      required={true}
                      defaultValue={LoginProfile.state}
                      placeholder="Last Name"
                    />
                  </FloatingLabel>
                </div>
                <div className="col-md-2 form-floating mb-2">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Zip Code"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      required={true}
                      defaultValue={LoginProfile.zip}
                      placeholder="Last Name"
                    />
                  </FloatingLabel>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary">
                    Edit
                  </button>
                </div>
                <div className="col-12"></div>
              </form>
            </Tab>
            <Tab eventKey="uploaded" title="Pets Uploaded">
              {uploadedPet.length == 0 && <div>Loading...</div>}
              {uploadedPet.length != 0 &&
                uploadedPet.map((elmt) => {
                  return (
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          Pet Name: {` ${elmt.name}, Type: ${elmt.type}`}
                        </Accordion.Header>
                        <Accordion.Body>
                          <div class="container-fluid row">
                            <div class="col-2">
                              <img
                                src={elmt.imageUrl}
                                alt=""
                                style={{ width: "100%" }}
                              />
                            </div>
                            <div class="col-10 mt-1">
                              <h4> Name: {elmt.name} </h4>

                              <p> Age: {elmt.age}</p>
                              <p>Additional Information: {elmt.additional}</p>
                              <Link to={`/PetInformation/${elmt._id}`}>
                                <Button class="btn btn-outline-primary">
                                  Know More
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  );
                })}
            </Tab>
            <Tab eventKey="adopted" title="Adopted">
              Pets Adopted
            </Tab>

            {isAdmin && (
              <Tab eventKey="allprofiles" title="All Profiles">
                {totalProfile.length == 0 && <div>Loading...</div>}
                {totalProfile.length != 0 &&
                  totalProfile.map((elmt, index123) => {
                    return (
                      <Accordion>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            Username: {` ${elmt.username}`}
                          </Accordion.Header>
                          <Accordion.Body>
                            <div class="container-fluid row">
                              <div class="col-2">
                                <img
                                  src={EmptyProfile}
                                  alt=""
                                  style={{ width: "100%" }}
                                />
                              </div>
                              <div class="col-10 mt-1">
                                <h3 className="d-inline">
                                  {elmt.fname + " " + elmt.lname + " "}
                                </h3>
                                {elmt.isAdmin && (
                                  <span class="badge badge-primary bg-primary">
                                    Admin
                                  </span>
                                )}

                                <p class="m-1"> {elmt.email} </p>
                                <p class="m-1">Adddress: {elmt.address} </p>
                                <p class="m-1 mb-2"> {`${elmt.phone}`} </p>
                                <button
                                  class="btn btn-danger m-1 mt-2"
                                  id={`${elmt._id}`}
                                  onDoubleClick={onDeleteProfile}
                                  data-id={`${elmt._id}`}
                                >
                                  Delete Profile
                                </button>

                                {/* {isAdmin && elmt.isAdmin == 0 && (
                                  <button
                                    class="btn btn-success m-1 mt-2"
                                    data-id={`${elmt._id}`}
                                    data-index={index123}
                        
                                    onDoubleClick={onMakeAdmin}
                                  >
                                    Make Admin
                                  </button>
                                )} */}
                              </div>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    );
                  })}
              </Tab>
            )}

            {isAdmin && (
              <Tab eventKey="allpets" title="All Pets">
                {totalPet.length == 0 && <div>Loading...</div>}
                {totalPet.length != 0 &&
                  totalPet.map((elmt) => {
                    return (
                      <Accordion>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            Pet Name: {` ${elmt.name}, Type: ${elmt.type}`}
                          </Accordion.Header>
                          <Accordion.Body>
                            <div class="container-fluid row">
                              <div class="col-2">
                                <img
                                  src={elmt.imageUrl}
                                  alt=""
                                  style={{ width: "100%" }}
                                />
                              </div>
                              <div class="col-10 mt-1">
                                <h4> Name: {elmt.name} </h4>

                                <p> Age: {elmt.age}</p>
                                <p>Additional Information: {elmt.additional}</p>
                                <Link to={`/PetInformation/${elmt._id}`}>
                                  <Button class="btn btn-outline-primary">
                                    Know More
                                  </Button>
                                </Link>

                                <Button
                                  class="btn btn-danger"
                                  data-id={`${elmt._id}`}
                                  onDoubleClick={onDeletePet}
                                >
                                  Delete Pet Data
                                </Button>
                              </div>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    );
                  })}
              </Tab>
            )}

            {isAdmin && (
              <Tab eventKey="allblogs" title="All Blogs">
                {totalBlog.length == 0 && <div>Loading...</div>}
                {totalBlog.length != 0 &&
                  totalBlog.map((elmt) => {
                    return (
                      <Accordion>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            Blog Title: {` ${elmt.title}`}
                          </Accordion.Header>
                          <Accordion.Body>
                            <div class="container-fluid row">
                              <div class="col-2">
                                <img
                                  src={elmt.imageUrl}
                                  alt=""
                                  style={{ width: "100%" }}
                                />
                              </div>
                              <div class="col-10 mt-1">
                                <h4> {elmt.title} </h4>
                                <p>
                                  {" "}
                                  {elmt["description"].substring(0, 200) +
                                    "..."}{" "}
                                </p>
                                <Link to={`/BlogRead/${elmt._id}`}>
                                  <Button class="btn btn-outline-primary">
                                    Know More
                                  </Button>
                                </Link>

                                <Button
                                  data-id={`${elmt._id}`}
                                  class="btn btn-danger"
                                  onDoubleClick={onDeleteBlog}
                                >
                                  Delete Blog Data
                                </Button>
                              </div>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    );
                  })}
              </Tab>
            )}
          </Tabs>
        </div>
      </div>
    );

};

export default Profile;