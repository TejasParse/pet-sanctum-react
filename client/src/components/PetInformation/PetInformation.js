import './PetInformation.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios';

const PetInformation = (props) => {
    let [data, setData] = useState({});
    let temp = useParams()

    useEffect(() => {

        axios.get(`http://localhost:3005/Pets/${temp.id}`)
            .then(res => {
                console.log(res.data);
                setData(res.data);
            })
            .catch(err => {
                console.log(err);
            })

    }, []);
    return (
        <div className="page-content page-container" id="page-content">
            <div className="padding">
                <div className="row container d-flex justify-content-center">
                    <div className="col-xl-8 col-md-12">
                        <div className="card user-card-full">
                            <div className="row m-l-0 m-r-0">
                                <div
                                    className="col-sm-4 bg-c-lite-green user-profile d-flex justify-content-center align-items-center">
                                    <div className="card-block text-center text-white">
                                        <div className="m-b-25 pet-img"
                                            style={{
                                                backgroundImage: `url(${data.imageUrl})`,
                                            }}
                                            >
                                        </div>
                                        <h6 className="f-w-600 lead">
                                            {data.name}
                                        </h6>
                                        <p className="mb-2">
                                            {data.breed}
                                        </p>

                                    </div>
                                </div>
                                <div className="col-sm-8">
                                    <div className="card-block">
                                        <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Pet Profile</h6>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">Animal</p>
                                                <h6 className="text-muted f-w-400">
                                                    {data.type}
                                                </h6>
                                            </div>
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">Age</p>
                                                <h6 className="text-muted f-w-400">
                                                    {data.age}
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">Sex</p>
                                                <h6 className="text-muted f-w-400">
                                                    {data.sex}
                                                </h6>
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
                                                <h6 className="text-muted f-w-400">
                                                    {data.trained}
                                                </h6>
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
                                        <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Owner Information</h6>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">Owner's Name</p>
                                                <h6 className="text-muted f-w-400">
                                                    {data.owner}
                                                </h6>
                                            </div>
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">Owner's Phone Number</p>
                                                <h6 className="text-muted f-w-400">
                                                    {data.phone}
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">Owner's Address</p>
                                                <h6 className="text-muted f-w-400">
                                                    {data.address}
                                                </h6>
                                            </div>
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">Owner's Pincode</p>
                                                <h6 className="text-muted f-w-400">
                                                    {data.pincode}
                                                </h6>
                                            </div>
                                        </div>




                                        <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Additional Information
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

                                                <button className="btn adopt-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                    Adopt Now
                                                </button>

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
    )
}

export default PetInformation;