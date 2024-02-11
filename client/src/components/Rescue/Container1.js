import './Rescue.css';
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import EmptyPic from "./empty_profile.webp";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { toast } from 'react-toastify';
import { RingLoader, BarLoader, ClipLoader } from "react-spinners"

const Container1 = (props) => {
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let [isLoading, setIsLoading] = useState(false);
 
    const [showImage, changeShowImage] = useState(EmptyPic); 

    let LoginProfile = useSelector((state) => state.LoginProfile);
    console.log(LoginProfile);

    const navigate = useNavigate();

    


    let [formInput, changeFormInput] = useState({
        type: "Dog",
        age: 2,
        sex: "Male",
        otherhumans: "NA",
        otherpets: "NA",
        trained: "NA",
        vaccinated: "NA",
        additional: " ",
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

    let PostData = () => {

      if(!LoginProfile._id) {
        toast.info(`Please Login`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
  
        return navigate("/login")
      }

      setIsLoading(true);

      let formInput1 = {
        ...formInput,
      };

      const formdata1 = new FormData();
      formdata1.append("name", formInput1.name);
      formdata1.append("breed", formInput1.breed);
      formdata1.append("pincode", formInput1.pincode);
      formdata1.append("isAdopt", formInput1.isAdopt);
      formdata1.append("address", formInput1.address);
      formdata1.append("phone", formInput1.phone);
      formdata1.append("owner", formInput1.owner);
      formdata1.append("imageUrl", formInput1.imageUrl);
      formdata1.append("additional", formInput1.additional);
      formdata1.append("vaccinated", formInput1.vaccinated);
      formdata1.append("trained", formInput1.trained);
      formdata1.append("otherpets", formInput1.otherpets);
      formdata1.append("otherhumans", formInput1.otherhumans);
      formdata1.append("sex", formInput1.sex);
      formdata1.append("age", formInput1.age);
      formdata1.append("type", formInput1.type);

      console.log("Submitted!");
      console.log(formInput1);

      axios
        .post(`${process.env.REACT_APP_SERVER_LINK}/api/pet/addPet/${LoginProfile._id}`, formdata1)
        .then((res) => {
          console.log(res);
          setIsLoading(false);
          toast.success(`Pet Uploaded Successfully!`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          navigate(`/PetInformation/${res.data.data._id}`);
        })
        .catch((err) => {
          setIsLoading(false);
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
    };

    let HandleImageChange = (event) => {
      let name = event.target.name;
      let value = event.target.files[0];

      let imageUrl = URL.createObjectURL(value);
      changeShowImage(imageUrl);

      console.log(event.target.files[0]);

      changeFormInput((prev) => {
        return {
          ...prev,
          [name]: value,
        };
      });
    };

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
      <div>
        <div className="page-content page-container" id="page-content">
          <div className="padding">
            <div className="row container d-flex justify-content-center temp1">
              <div className="col-xl-12 col-md-12">
                <div className="card user-card-full">
                  <form
                    action=""
                    onSubmit={FormSubmitHandler}
                    method="post"
                    id="form"
                  >
                    <div className="row m-l-0 m-r-0 form-background">
                      <div className="col-sm-4 bg-c-lite-green user-profile d-flex flex-column justify-content-center align-items-center">
                        <div className="card-block text-center text-white d-flex flex-column justify-content-center align-items-center">
                          <div
                            className="pet-img"
                            style={{
                              backgroundImage: `url(${showImage})`,
                            }}
                          ></div>
                          <div className="mb-3">
                            <label for="formFileSm" className="form-label">
                              Choose pet Image
                            </label>
                            <input
                              className="form-control form-control-sm"
                              id="formFileSm"
                              type="file"
                              accept="image/*"
                              name="imageUrl"
                              onChange={HandleImageChange}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-8 form-back">
                        <div className="card-block">
                          <h6 className="mb-3 pb-2 b-b-default f-w-600">
                            Enter Stray Details
                          </h6>

                          <div className="row">
                            <div className="col-sm-6 mb-3">
                              <p className="mb-1 f-w-600">Name of Stray</p>
                              <input
                                className="form-control form-control-sm"
                                type="text"
                                placeholder="Enter here"
                                required
                                name="name"
                                id="nameInput"
                                onChange={HandleInputChange}
                              />
                            </div>
                            <div className="col-sm-6 mb-3">
                              <p className="mb-1 f-w-600">Animal</p>
                              <select
                                className="form-select form-select-sm"
                                aria-label="Default select example"
                                name="type"
                                onChange={HandleInputChange}
                              >
                                <option selected value="Dog">
                                  Dog
                                </option>
                                <option value="Cat">Cat</option>
                                <option value="Fish">Fish</option>
                                <option value="Other">Other</option>
                              </select>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-6 mb-3">
                              <p className="mb-1 f-w-600">Breed</p>
                              <input
                                className="form-control form-control-sm"
                                type="text"
                                placeholder="Enter here"
                                name="breed"
                                required
                                id="breed"
                                value={formInput.breed || ""}
                                onChange={HandleInputChange}
                              />
                            </div>
                            <div className="col-sm-6 mb-3">
                              <p className="mb-1 f-w-600">Locality</p>
                              <input
                                className="form-control form-control-sm"
                                type="text"
                                placeholder="Enter here"
                                name="address"
                                required
                                id="address"
                                onChange={HandleInputChange}
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-6 mb-3">
                              <p className="mb-1 f-w-600">Phone</p>
                              <input
                                className="form-control form-control-sm"
                                type="tel"
                                placeholder="8234567890"
                                name="phone"
                                required
                                id="phone"
                                onChange={HandleInputChange}
                              />
                            </div>
                            <div className="col-sm-6 mb-3">
                              <p className="mb-1 f-w-600">Pincode</p>
                              <input
                                className="form-control form-control-sm"
                                type="text"
                                maxlength="6"
                                minlength="6"
                                placeholder="500012"
                                name="pincode"
                                required
                                id="pincode"
                                onChange={HandleInputChange}
                              />
                            </div>
                          </div>
                        </div>

                        <h6 className="mb-2 p-b-5 b-b-default f-w-600">
                          Any Additional Information
                        </h6>
                        <div className="row">
                          <div className="col-sm-12">
                            <textarea
                              rows="5"
                              className="form-control"
                              id="exampleFormControlTextarea1"
                              name="additional"
                              onChange={HandleInputChange}
                            />
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
                          <BarLoader
                              color="#fff"
                              height={4}
                              width={25}
                              loading={isLoading}
                          />
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
    );
}

export default Container1;