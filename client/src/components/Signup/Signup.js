import { Tabs, Tab, Accordion, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import EmptyPic from "./empty_profile.webp";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const SignUp = (props) => {

    const [showImage, changeShowImage] = useState(EmptyPic);

    let [formInput, changeFormInput] = useState({});

    let FormSubmitHandler = (event) => {
        event.preventDefault();

        console.log("Submitting!");
        console.log(formInput);

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
              name="ProfileImage"
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
              Edit
            </button>
          </div>
          <div className="col-12"></div>
        </form>
      </div>
    );
};

export default SignUp;
