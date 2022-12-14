import './Rescue.css';
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

import { useNavigate } from 'react-router-dom';

const Container1 = (props) => {
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();

    let [formInput, changeFormInput] = useState({
        type: "Dog",
        age: "NA",
        sex: "Male",
        otherhumans: "NA",
        otherpets: "NA",
        trained: "NA",
        vaccinated: "NA",
        additional: "",
        imageUrl: "https://www.davpetlovers.com/wp-content/uploads/2020/04/IMG_8917.jpg",
        owner: "NA",
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

    return(
        <div>
            <div className="page-content page-container" id="page-content">
            <div className="padding">
                <div className="row container d-flex justify-content-center temp1">
                    <div className="col-xl-12 col-md-12">
                        <div className="card user-card-full">
                            <form action="" onSubmit={FormSubmitHandler} method="post" id="form">
                                <div className="row m-l-0 m-r-0 form-background">
                                    <div
                                        className="col-sm-4 bg-c-lite-green user-profile d-flex justify-content-center align-items-center">
                                        <div className="card-block text-center text-white">
                                            <div className="m-b-25 pet-img"> </div>
                                            <div className="mb-3">
                                                <label for="formFileSm" className="form-label">Choose pet Image</label>
                                                <input className="form-control form-control-sm" id="formFileSm" type="file"
                                                    accept="image/*" onchange="loadFile(event)" name="image" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-8 form-back">
                                        <div className="card-block">
                                            <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Enter Stray Details</h6>

                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <p className="m-b-5 f-w-600">Name of Stray</p>
                                                    <input className="form-control form-control-sm" type="text"
                                                        placeholder="Enter here" required name="name" id="nameInput" onChange={HandleInputChange} />
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-5 f-w-600">Animal</p>
                                                    <select className="form-select form-select-sm"
                                                        aria-label="Default select example" name="type" onChange={HandleInputChange}>

                                                        <option selected value="Dog">Dog</option>
                                                        <option value="Cat">Cat</option>
                                                        <option value="Fish">Fish</option>
                                                        <option value="Other">Other</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <p className="m-b-5 f-w-600">Breed</p>
                                                    <input className="form-control form-control-sm" type="text"
                                                        placeholder="Enter here" name="breed" required id="breed" value={formInput.breed || ""} onChange={HandleInputChange} />
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-5 f-w-600">Locality</p>
                                                    <input className="form-control form-control-sm" type="text"
                                                        placeholder="Enter here" name="address" required id="address" onChange={HandleInputChange} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <p className="m-b-5 f-w-600">Phone</p>
                                                    <input className="form-control form-control-sm" type="tel"
                                                        placeholder="8234567890" name="phone" required id="phone" onChange={HandleInputChange} />
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-5 f-w-600">Pincode</p>
                                                    <input className="form-control form-control-sm" type="text" maxlength="6" minlength="6"
                                                        placeholder="500012" name="pincode" required id="pincode" onChange={HandleInputChange} />
                                                </div>
                                            </div>
                                        </div>

                                        <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Any Additional Information
                                        </h6>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <textarea rows="5" className="form-control" id="exampleFormControlTextarea1"
                                                 name="additional" onChange={HandleInputChange} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 my-4">
                                                <button className="btn upload-btn" type="submit">
                                                    Upload
                                                </button>
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
        </div>
        
    )
}

export default Container1;