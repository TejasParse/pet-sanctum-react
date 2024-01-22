import './PetInformation.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { Modal, Button } from "react-bootstrap";

import { toast } from 'react-toastify';
import { RingLoader, BarLoader, ClipLoader } from "react-spinners"

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PetInformation = (props) => {

  let [isLoading, setIsLoading] = useState(false);

  let [data, setData] = useState({});
  let temp = useParams()

  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let LoginProfile = useSelector((state) => state.LoginProfile);
  let isLoggedIn = useSelector((state) => state.isLoggedIn);

  useEffect(() => {

    axios
      .get(`${process.env.REACT_APP_SERVER_LINK}/api/pet/petinformation/${temp.id}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data.data);
      })
      .catch((err) => {
        toast.info(`Failed to fetch pet information`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return navigate("/Adopt")
        console.log(err);
      });

  }, []);


  const AdoptPet = () => {

    if (!isLoggedIn) {
      toast.info(`Please Login to get yourself a Pet`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return navigate("/Login")
    }


    axios
      .post(
        `${process.env.REACT_APP_SERVER_LINK}/api/pet/AdoptPet/${LoginProfile._id}/${data._id}`
      )
      .then((res) => {
        setIsLoading(false);
        console.log(res.data, "Here");
        toast.success(`Pet Adopted Successfully! You will be contacted soon`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/Adopt");
        // alert("Congratulations on willing to Adopt the pet! Our Volunteers will contact you soon");
      })
      .catch((err) => {
        toast.error(`Sorry for the inconveince. Please try again`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setIsLoading(false);
        navigate("/Adopt");
        console.log(err);
      });

  }

  return (
    <div className="page-content page-container" id="page-content">
      <div className="padding">
        <div className="row container d-flex justify-content-center">
          <div className="col-xl-8 col-md-12">
            <div className="card user-card-full">
              <div className="row m-l-0 m-r-0">
                <div className="col-sm-4 bg-c-lite-green user-profile d-flex justify-content-center align-items-center">
                  <div className="card-block text-center text-white">
                    <div
                      className="m-b-25 pet-img"
                      style={{
                        backgroundImage: `url(${data.imageUrl})`,
                      }}
                    ></div>
                    <h6 className="f-w-600 lead">{data.name}</h6>
                    <p className="mb-2">{data.breed}</p>
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="card-block">
                    <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                      Pet Profile
                    </h6>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Animal</p>
                        <h6 className="text-muted f-w-400">{data.type}</h6>
                      </div>
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Age</p>
                        <h6 className="text-muted f-w-400">{data.age}</h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Sex</p>
                        <h6 className="text-muted f-w-400">{data.sex}</h6>
                      </div>
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Good with Humans</p>
                        <h6 className="text-muted f-w-400">
                          {data.otherhumans}
                        </h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Good with Other Pets</p>
                        <h6 className="text-muted f-w-400">
                          {data.otherpets}
                        </h6>
                      </div>
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Trained</p>
                        <h6 className="text-muted f-w-400">{data.trained}</h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Vaccinated</p>
                        <h6 className="text-muted f-w-400">
                          {data.vaccinated}
                        </h6>
                      </div>
                    </div>
                    <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                      Owner Information
                    </h6>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Owner's Name</p>
                        <h6 className="text-muted f-w-400">{data.owner}</h6>
                      </div>
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Owner's Phone Number</p>
                        <h6 className="text-muted f-w-400">{data.phone}</h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Owner's Address</p>
                        <h6 className="text-muted f-w-400">{data.address}</h6>
                      </div>
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Owner's Pincode</p>
                        <h6 className="text-muted f-w-400">{data.pincode}</h6>
                      </div>
                    </div>

                    <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                      Additional Information
                    </h6>
                    <div className="row">
                      <div className="col-sm-12">
                        <h6 className="text-muted f-w-400">
                          {data.additional}
                        </h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12 my-4">
                        <button
                          className="btn adopt-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                          onClick={handleShow}
                        >
                          Adopt Now
                        </button>
                        <Modal show={show} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>Are you sure?</Modal.Title>
                          </Modal.Header>
                          <Modal.Footer>
                            <Button variant="danger" onClick={handleClose}>
                              No
                            </Button>
                            <Button variant="success" onClick={AdoptPet}>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PetInformation;