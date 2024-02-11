import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Tabs, Tab, Accordion, Button } from "react-bootstrap";
import './Blogs.css';

import { useSelector } from "react-redux";


import { toast } from 'react-toastify';
import { RingLoader, BarLoader, ClipLoader } from "react-spinners"

function Blogs() {

  const isLogged = useSelector(state => state.isLoggedIn);
  const isAdmin = useSelector(state => state.isAdmin);

  let [totalBlog, changeBlogData] = useState([]);
  console.log(process.env.REACT_APP_SERVER_LINK);
  useEffect(() => {

    axios
      .get(`${process.env.REACT_APP_SERVER_LINK}/api/blog/`)
      .then((res) => {
        console.log(res.data);

        changeBlogData(res.data.data);
      })
      .catch((err) => {
        toast.error(`Error fetching blogs`, {
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
  }, []);

  return (
    <div className="blogs-body_sreekar" >
      <div className="container">
        {
          isAdmin ? (
            <div className="d-flex justify-content-between align-items-center">
              <h1 className="text-white p-2 pt-4">Pet Sanctum Blogs</h1>
              <Link to={"/AddBlog"}>
                <button className="btn btn-success">Add Blog</button>
              </Link>
            </div>
          ) : (
            <div className="">
              <h1 className="text-center text-white p-2 pt-4">Pet Sanctum Blogs</h1>
            </div>
          )
        }

        <hr size="8" className="hr_sreekar" />

        <h2 className="text-center mx-auto mt-2 mb-3 bg-white border-dark rounded d-inline-block p-2 text-center">
          Featured Posts
        </h2>

        {totalBlog.length == 0 && <h2>Loading...</h2>}
        {totalBlog.length != 0 && (
          <div className="maincontainer_sreekar">
            <div className="maincard_sreekar">
              <div className="card1_sreekar">
                <div className="image_sreekar">
                  <img href="#" src={totalBlog[0].imageUrl} />
                </div>
                <div className="content_sreekar">
                  <h3> {totalBlog[0].title} </h3>
                  <p>
                    {totalBlog[0].description.substring(0, 120) + "..."}
                    <Link to={`/BlogRead/${totalBlog[0]._id}`}>
                      Read More
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="maincard_sreekar">
              <div className="card1_sreekar">
                <div className="image_sreekar">
                  <img href="#" src={totalBlog[1].imageUrl} />
                </div>
                <div className="content_sreekar">
                  <h3> {totalBlog[1].title} </h3>
                  <p>
                    {totalBlog[1].description.substring(0, 120) + "..."}
                    <Link to={`/BlogRead/${totalBlog[1]._id}`}>
                      Read More
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="maincard_sreekar">
              <div className="card1_sreekar">
                <div className="image_sreekar">

                  <img href="#" src={totalBlog[2].imageUrl} />

                </div>
                <div className="content_sreekar">
                  <h3> {totalBlog[2].title} </h3>
                  <p>
                    {totalBlog[2].description.substring(0, 120) + "..."}
                    <Link to={`/BlogRead/${totalBlog[2]._id}`}>
                      Read More
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <hr size="8" className="hr_sreekar" />

        <h2
          className="text-center mt-2 mb-3 bg-white border-dark rounded d-inline-block p-2 text-center"
          style={{ background: "rgb(216, 216, 216)" }}
          data-aos="slide-up"
          data-aos-duration="500"
        >
          Explore Other Posts
        </h2>

        <Tabs>
          <Tab eventKey="allblogs" title="All Blogs">
            {totalBlog.length == 0 && <div>Loading...</div>}
            {totalBlog.length != 0 &&
              totalBlog.map((elmt) => {
                return (
                  <div style={{ background: 'white' }} class="row blog pt-4 pb-4 ps-1 mt-4 mb-4 border border-dark" data-aos="flip-up" data-aos-duration="1250">
                    <div className="blog-body col-12">
                      <div class="container-fluid row">
                        <div class="col-4">
                          <img
                            src={elmt.imageUrl}
                            alt=""
                            style={{ width: "100%" }}
                          />
                        </div>
                        <div class="col-8">
                          <h4> {elmt.title} </h4>
                          <p>
                            {" "}
                            {elmt["description"].substring(0, 450) +
                              "..."}{" "}
                          </p>
                          <Link className="a_sreekar" to={`/BlogRead/${elmt._id}`}>
                            <Button class="btn btn-outline-primary">
                              Know More
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>

                  </div>
                );
              })}
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default Blogs;
