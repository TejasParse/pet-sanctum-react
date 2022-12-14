import "./Upload.css"
import EmptyPic from "./empty_profile.webp"
import { useState } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";

import { useNavigate } from 'react-router-dom';


let Upload = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();

    let [formInput, changeFormInput] = useState({
        type: "Dog",
        age: 0,
        sex: "Male",
        otherhumans: "No",
        otherpets: "No",
        trained: "No",
        vaccinated: "No",
        additional: "",
        imageUrl: "https://www.davpetlovers.com/wp-content/uploads/2020/04/IMG_8917.jpg",
        owner: "Team Pet Sanctum",
        phone: "9878788234",
        address: "address2",
        isAdopt: "-1",
        pincode: "500013"
    });

    let FormSubmitHandler = (event) => {
        event.preventDefault();

        handleShow(true);

    };

    let PostData = ()=>{
        let temp = new Date().valueOf();
        let formInput1 = {
            ...formInput,
            id: temp
        }

        console.log("Submitted!");
        console.log(formInput1);

        axios.post("http://localhost:3005/Pets", formInput1, {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        )
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })

        navigate(`/PetInformation/${temp}`)
    }

    let HandleInputChange = (event) => {

        let name = event.target.name;
        let value = event.target.value;

        changeFormInput(prev => {
            return {
                ...prev,
                [name]: value
            }
        })

    };

    return (
        <>
            <div className="page-content page-container" id="page-content">
                <div className="padding">
                    <div className="row container d-flex justify-content-center">
                        <div className="col-xl-8 col-md-12">
                            <div className="card user-card-full">
                                <form action="" onSubmit={FormSubmitHandler} method="post" id="form">
                                    <div className="row m-l-0 m-r-0">
                                        <div
                                            className="col-sm-4 bg-c-lite-green user-profile d-flex justify-content-center align-items-center">
                                            <div className="card-block text-center text-white">
                                                <div className="m-b-25 pet-img" style={{
                                                    backgroundImage: `url(${EmptyPic})`
                                                }}> </div>
                                                <div className="mb-3">
                                                    <label htmlFor="formFileSm" className="form-label">Choose pet Image</label>
                                                    <input className="form-control form-control-sm" id="formFileSm" type="file"
                                                        accept="image/*" name="image" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-8">
                                            <div className="card-block">
                                                <h6 className="h6_tejas m-b-20 p-b-5 b-b-default f-w-600">Enter Pet Profile</h6>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <p className="m-b-5 f-w-600">Name of Pet</p>
                                                        <input className="form-control form-control-sm" type="text" placeholder="Enter here" value={formInput.name || ""} name="name" required id="petName" onChange={HandleInputChange} />
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <p className="m-b-5 f-w-600">Animal</p>
                                                        <select value={formInput.type || "Dog"} className="form-select form-select-sm" onChange={HandleInputChange} aria-label="Default select example" name="type">

                                                            <option value="Dog">Dog</option>
                                                            <option value="Cat">Cat</option>
                                                            <option value="Fish">Fish</option>
                                                            <option value="Other">Other</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <p className="m-b-5 f-w-600">Name of Breed</p>
                                                        <input className="form-control form-control-sm" type="text" value={formInput.breed || ""} onChange={HandleInputChange} placeholder="Enter here" name="breed" id="breed" required />
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <p className="m-b-5 f-w-600">Age</p>
                                                        <input className="form-control form-control-sm" min={"0"} type="number" value={formInput.age || "1"} onChange={HandleInputChange} placeholder="Enter here" name="age" />
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <p className="m-b-5 f-w-600">Sex</p>
                                                        <select value={formInput.sex || "Male"} onChange={HandleInputChange} name="sex" id="sex" className="form-control form-control-sm">
                                                            <option value="Male">Male</option>
                                                            <option value="Female">Female</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <p className="m-b-5 f-w-600">Good with Humans</p>
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" onChange={HandleInputChange} type="radio" id="inlineRadio1" value="Yes" name="otherhumans" />
                                                            <label className="form-check-label" htmlFor="inlineRadio1">Yes</label>
                                                        </div>
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" onChange={HandleInputChange} type="radio" id="inlineRadio2" value="No" name="otherhumans" defaultChecked={true} />
                                                            <label className="form-check-label" htmlFor="inlineRadio2">No</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <p className="m-b-5 f-w-600">Good with Other Pets</p>
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" onChange={HandleInputChange} type="radio" id="inlineRadio11" value="Yes" name="otherpets" />
                                                            <label className="form-check-label" htmlFor="inlineRadio11">Yes</label>
                                                        </div>
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" onChange={HandleInputChange} type="radio" id="inlineRadio21" value="No" name="otherpets" defaultChecked={true} />
                                                            <label className="form-check-label" htmlFor="inlineRadio21">No</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <p className="m-b-5 f-w-600">Trained</p>
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="radio" id="inlineRadio12" onChange={HandleInputChange} value="Yes" name="trained" />
                                                            <label className="form-check-label" htmlFor="inlineRadio12">Yes</label>
                                                        </div>
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="radio" id="inlineRadio22" onChange={HandleInputChange} value="No" name="trained" defaultChecked={true} />
                                                            <label className="form-check-label" htmlFor="inlineRadio22">No</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <p className="m-b-5 f-w-600">Vaccinated</p>
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="radio" id="inlineRadio13" onChange={HandleInputChange} value="Yes" name="vaccinated" />
                                                            <label className="form-check-label" htmlFor="inlineRadio13">Yes</label>
                                                        </div>
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="radio" id="inlineRadio23" onChange={HandleInputChange} value="No" name="vaccinated" defaultChecked={true} />
                                                            <label className="form-check-label" htmlFor="inlineRadio23">No</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h6 className="h6_tejas m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Any Additional Information</h6>
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <textarea rows="5" className="form-control" onChange={HandleInputChange} value={formInput.additional || ""} id="exampleFormControlTextarea1" name="additional"></textarea>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-12 my-4">
                                                        <input className="btn adopt-btn" type={"submit"} value="Submit" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Are you sure?</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Footer>
                                            <Button variant="danger" onClick={handleClose}>
                                                No
                                            </Button>
                                            <Button variant="success" onClick={PostData}>
                                                Yes
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
};

export default Upload;