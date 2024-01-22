import EmptyPic from "./empty_profile.webp";
import "./AddBlog.css";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import { RingLoader, BarLoader, ClipLoader } from "react-spinners"

let AddBlogs = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let [isLoading, setIsLoading] = useState(true);

  const [showImage, changeShowImage] = useState(EmptyPic);

  const navigate = useNavigate();

  let [formInput, changeFormInput] = useState({
    title: "Title",
    description: "Description",
    imageUrl: "https://www.davpetlovers.com/wp-content/uploads/2020/04/IMG_8917.jpg",
  });

  let FormSubmitHandler = (event) => {
    event.preventDefault();
    handleShow(true);
    console.log("submit")
  };

  let PostData = () => {

    setIsLoading(true);

    let formInput1 = {
      ...formInput,
    }

    const formdata1 = new FormData();
    formdata1.append("title", formInput1.title);
    formdata1.append("description", formInput1.description);
    formdata1.append("imageUrl", formInput1.imageUrl);


    console.log("Submitted!");
    console.log(formdata1);

    axios
      .post(
        `${process.env.REACT_APP_SERVER_LINK}/api/blog/addBlog`,
        formdata1
      )
      .then((res) => {
        setIsLoading(false);
        console.log(res);
        toast.success(`Blog Created Successfully!`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate(`/BlogRead/${res.data.data._id}`)
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

  }

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
    <div className=" py-5" style={{ backgroundColor: `#149279` }}>
      <form method="post" onSubmit={FormSubmitHandler} id="form">
        <div className="card card_blog mb-5 ms-auto me-auto mt-5 p-4 shadow-lg">
          <div
            className="m-b-25 pet-img mx-auto"
            style={{
              backgroundImage: `url(${showImage})`,
            }}
          ></div>
          <div className="card card_blog-body">
            <label className="input-group-text" htmlFor="inputGroupFile01">
              Upload Blog Picture
            </label>
            <input
              type="file"
              className="form-control"
              id="inputGroupFile01"
              accept="image/*"
              name="imageUrl"
              onChange={HandleImageChange}
            />

            <div className="form-floating mb-3 mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="name@example.com"
                name="title"
                id="title"
                maxLength="1000"
                onChange={HandleInputChange}
                required
              />
              <label htmlFor="floatingInput">Title</label>
            </div>

            <div className="form-floating mb-3">
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                name="description"
                id="description"
                required
                maxLength="10000"
                onChange={HandleInputChange}
              ></textarea>
              <label htmlFor="floatingTextarea">Description</label>
            </div>

            <input type={"submit"} value="Submit" className="btn btn-success" />

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
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddBlogs;
// Add blog page