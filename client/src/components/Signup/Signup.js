import { Tabs, Tab, Accordion, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import EmptyPic from "./empty_profile.webp";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { toast } from 'react-toastify';
import { RingLoader, BarLoader, ClipLoader } from "react-spinners"

import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = (props) => {

  const [showImage, changeShowImage] = useState(EmptyPic);

  let [isLoading, setIsLoading] = useState(false);

  let [formInput, changeFormInput] = useState({});

  const navigate = useNavigate();

  let FormSubmitHandler = (event) => {
    event.preventDefault();

    console.log("Submitting!");
    console.log(formInput);

    PostData();

  };

  let PostData = () => {
    setIsLoading(true);
    let formInput1 = {
      ...formInput,
    };

    const formdata1 = new FormData();
    formdata1.append("fname", formInput1.fname);
    formdata1.append("lname", formInput1.lname);
    formdata1.append("phone", formInput1.phone);
    formdata1.append("address", formInput1.address);
    formdata1.append("city", formInput1.city);
    formdata1.append("state", formInput1.state);
    formdata1.append("zip", formInput1.zip);
    formdata1.append("username", formInput1.username);
    formdata1.append("imageUrl", formInput1.imageUrl);
    formdata1.append("email", formInput1.email);
    formdata1.append("password", formInput1.password);
    formdata1.append("isAdmin", -1);

    axios
      .post(`${process.env.REACT_APP_SERVER_LINK}/api/user/signup`, formdata1)
      .then((res) => {
        setIsLoading(false);
        let response = res.data;
        console.log(response);
        if (response.status == 201) {
          toast.success(`Profiled Created Successfully!`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          navigate(`/Login`);
        } else {
          toast.error(`Failed to create Profile! Please try again`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          navigate(`/Signup`);
        }
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

    changeFormInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <div
      className="p-5"
      style={{
        backgroundColor: "#5300d9",
      }}
    >
      <form
        className="row g-3 mt-1 p-4"
        style={{
          backgroundColor: "white",
          borderRadius: "20px",
        }}
        onSubmit={FormSubmitHandler}
      >
        <div
          className="m-b-25 pet-img"
          style={{
            backgroundImage: `url(${showImage})`,
          }}
        ></div>
        <div className="col-12 input-group mb-3">
          <input
            type="file"
            className="form-control"
            id="inputGroupFile01"
            accept="image/*"
            required={true}
            name="imageUrl"
            onChange={HandleImageChange}
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
              placeholder="First Name"
              name="fname"
              onChange={HandleInputChange}
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
              placeholder="Last Name"
              name="lname"
              onChange={HandleInputChange}
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
              placeholder="Last Name"
              name="username"
              onChange={HandleInputChange}
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
              type="email"
              required={true}
              placeholder="Last Name"
              name="email"
              onChange={HandleInputChange}
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
              placeholder="Last Name"
              name="phone"
              onChange={HandleInputChange}
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
              placeholder="Last Name"
              name="password"
              onChange={HandleInputChange}
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
              placeholder="Last Name"
              name="address"
              onChange={HandleInputChange}
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
              placeholder="Last Name"
              name="city"
              onChange={HandleInputChange}
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
              placeholder="Last Name"
              name="state"
              onChange={HandleInputChange}
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
              placeholder="Last Name"
              name="zip"
              onChange={HandleInputChange}
            />
          </FloatingLabel>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Sign up

          </button>
          <BarLoader
            color="#000"
            height={4}
            width={79}
            loading={isLoading}
          />
        </div>
        <div className="col-12"></div>
      </form>
    </div>
  );
};

export default SignUp;
