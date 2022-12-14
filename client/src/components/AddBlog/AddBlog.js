import EmptyPic from "./empty_profile.webp";
import "./AddBlog.css";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

let AddBlogs = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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

    let PostData = ()=>{
        let temp = new Date().valueOf();
        let formInput1 = {
            ...formInput,
            id: temp
        }

        console.log("Submitted!");
        console.log(formInput1);

        axios.post("http://localhost:3005/Blogs", formInput1, {
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

        navigate(`/`)
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
    <div className=" py-5" style={{backgroundColor: `#149279`}}>
      <form method="post" onSubmit={FormSubmitHandler} id="form">
        <div className="card card_blog mb-5 ms-auto me-auto mt-5 p-4 shadow-lg">
          <div
            className="m-b-25 pet-img mx-auto"
            style={{
              backgroundImage: `url(${EmptyPic})`,
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
              name="blogImage"
              onChange={HandleInputChange}
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
              ></textarea>
              <label htmlFor="floatingTextarea">Description</label>
            </div>

            <input
              type={"submit"}
              value="Submit"
              className="btn btn-success"
            />

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
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddBlogs;
