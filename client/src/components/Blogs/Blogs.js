import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Tabs, Tab, Accordion, Button } from "react-bootstrap";
import './Blogs.css';

function Blogs() {
  let [totalBlog, changeBlogData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3005/Blogs")
      .then((res) => {
        console.log(res.data);

        changeBlogData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="blogs-body_sreekar" >
      <div className="container">
        <h1 className="text-center text-white p-2">Pet Sanctum Blogs</h1>
        <hr size="8" className="hr_sreekar"/> 

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
                    {totalBlog[0].description.substring(0,36)+"..."}
                    <Link to={`/BlogRead/${totalBlog[0].id}`}>
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
                    {totalBlog[1].description.substring(0,36)+"..."}
                    <Link to={`/BlogRead/${totalBlog[1].id}`}>
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
                    {totalBlog[2].description.substring(0,36)+"..."}
                    <Link to={`/BlogRead/${totalBlog[2].id}`}>
                    Read More
                  </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <hr size="8" className="hr_sreekar mt-4" />

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
                  <div style={{background: 'white'}} class="row blog pt-4 pb-4 ps-1 mt-4 mb-4 border border-dark" data-aos="flip-up" data-aos-duration="1250">
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
                            <Link className="a_sreekar" to={`/BlogRead/${elmt.id}`}>
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
