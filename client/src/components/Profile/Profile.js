import "./Profile.css"
import { Tabs, Tab, Accordion, Button, Modal } from "react-bootstrap"; 
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom" 
import axios from "axios"
import EmptyProfile from "./images/empty_profile.webp"
import { authActions } from "../../store/index"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { toast } from 'react-toastify';
import { RingLoader, BarLoader, ClipLoader } from "react-spinners"

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
  
    let isAdmin = LoginProfile.isAdmin;
    
    let onClickLogout = (event)=>{
      toast.success(`Logged Out Succesfully!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
        dispatch(
            authActions.logout({}) // Inside (), dictionary used (action.payload.username)
        )
        navigate("/")
    }

    let [totalPet, changePetData] = useState([]);
    let [totalBlog, changeBlogData] = useState([]);
    let [totalProfile, changeProfileData] = useState([]);
    let [totalAdopted, changeAdoptedData] = useState([]);
    
    
    let [uploadedPet, changeUploadedPet] = useState([]);
    let [adoptedPet, changeAdoptedPet] = useState([]);
    let [emptyUploaded, changeUploaded] = useState(0);
    let [emptyAdopted, changeAdopted] = useState(0);

    useEffect(()=>{
      axios
        .get(`${process.env.REACT_APP_SERVER_LINK}/api/user/rescuedPets/${LoginProfile._id}`)
        .then((res) => {
          // console.log(res.data);
          if (res.data.data.length == 0) {
            changeUploaded(1);
          }
          changeUploadedPet(res.data.data);

        })
        .catch((err) => {
          console.log(err);
        });
    }, [])

    useEffect(()=>{
      axios
        .get(`${process.env.REACT_APP_SERVER_LINK}/api/user/adoptedPets/${LoginProfile._id}`)
        .then((res) => {
          // console.log(res.data);
          if(res.data.data.length==0) {
            changeAdopted(1);
          }
          changeAdoptedPet(res.data.data);

        })
        .catch((err) => {
          console.log(err);
        });
    }, [])

    useEffect(()=>{
        
        axios.get(`${process.env.REACT_APP_SERVER_LINK}/api/pet/all`)
            .then(res=>{
                
                // console.log(res.data);
        
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
            // console.log(res.data);

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
            // console.log(res.data, "idhar");

            changeProfileData(res.data.data);
          })
          .catch((err) => {
            console.log(err);
          });

    },[])

    useEffect(()=>{
        
        axios
          .get(`${process.env.REACT_APP_SERVER_LINK}/api/pet/totalAdopted`)
          .then((res) => {
            // console.log(res.data, "idhar");

            changeAdoptedData(res.data.data);
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

    const oldP = useRef();
    const newP = useRef();
    const newP1 = useRef();

    const onChangePassword = (event)=>{
        if(newP.current.value !== newP1.current.value) {
          return alert("Passwords not Matching");
        }

        console.log(oldP.current.value);
        console.log(newP.current.value);
        console.log(newP1.current.value);

        axios
          .post(
            `${
              process.env.REACT_APP_SERVER_LINK
            }/api/user/passwordChange/${LoginProfile._id}`, {
              oldPassword: oldP.current.value,
              newPassword: newP.current.value,
              newPassword1: newP1.current.value
            }
          )
          .then((res) => {
            toast.success(`${res.data.message}`, {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            // alert(res.data.message)

          })
          .catch((err) => {
            toast.error(`Error: ${err.message}`, {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
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
              {isAdmin == 1 ? "Admin" : "User"}

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
            <Tab eventKey="edit" title="Change Password">
              <form className="row g-3 mt-1">
                <div className="input-group mb-2 col-6">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Old Password"
                    className="mb-3 w-100"
                  >
                    <Form.Control
                      type="password"
                      required={true}
                      defaultValue={""}
                      ref={oldP}
                      placeholder="Last Name"
                    />
                  </FloatingLabel>
                </div>
                <div className="input-group mb-2 col-6">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="New Password"
                    className="mb-3 w-100"
                  >
                    <Form.Control
                      type="password"
                      required={true}
                      defaultValue={""}
                      ref={newP}
                      placeholder="Last Name"
                    />
                  </FloatingLabel>
                </div>
                <div className="input-group mb-2 col-6">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Confirm New Password"
                    className="mb-3 w-100"
                  >
                    <Form.Control
                      type="password"
                      required={true}
                      defaultValue={""}
                      ref={newP1}
                      placeholder="Last Name"
                    />
                  </FloatingLabel>
                </div>

                <div className="col-12">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={onChangePassword}
                  >
                    Edit
                  </button>
                </div>
                <div className="col-12"></div>
              </form>
            </Tab>
            <Tab eventKey="uploaded" title="Pets Uploaded">
              {uploadedPet.length == 0 && emptyUploaded == 0 && (
                <div>Loading...</div>
              )}
              {emptyUploaded == 1 && <div>No Pets Uploaded!</div>}
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
              {adoptedPet.length == 0 && emptyAdopted == 0 && (
                <div>Loading...</div>
              )}
              {emptyAdopted == 1 && (
                <div>
                  No Pets Adopted! Please Adopt pets and help the community!
                </div>
              )}
              {adoptedPet.length != 0 &&
                adoptedPet.map((elmt) => {
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

            {isAdmin == 1 && (
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
                                {elmt.isAdmin ? (
                                  <span class="badge badge-primary bg-primary">
                                    Admin
                                  </span>
                                ) : <></>}

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

            {isAdmin == 1 && (
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
                                  <Button class="btn btn-outline-primary me-3">
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

            {isAdmin == 1 && (
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
                                  <Button class="btn btn-outline-primary me-3">
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
            {isAdmin == 1 && (
              <Tab eventKey="alladoptedpets" title="All Adopted Pets">
                {totalAdopted.length == 0 && <div>Loading...</div>}
                {totalAdopted.length != 0 &&
                  totalAdopted.map((elmt) => {
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
            )}
          </Tabs>
        </div>
      </div>
    );

};

export default Profile;