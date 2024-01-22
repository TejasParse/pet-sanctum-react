import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useState, useEffect } from 'react'
import './BlogRead.css'
import { useNavigate } from 'react-router-dom';


import { toast } from 'react-toastify';
import { RingLoader, BarLoader, ClipLoader } from "react-spinners"

function BlogRead(props) {

  const temp = useParams();

  let [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  let [totalBlog, changeBlogData] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_LINK}/api/blog/${temp.id}`)
      .then((res) => {
        console.log(res.data);
        setIsLoading(false);
        changeBlogData(res.data.data);
      })
      .catch((err) => {
        setIsLoading(false);
        toast.error(`Error fetching the blog`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/Blogs")
        console.log(err);
      });
  }, []);


  return (
    <div className='blog-read-body_sreekar p-4'  >
      
      <div className="blog-read-card ms-auto me-auto p-4 shadow-lg">
        <RingLoader
          color="#000"
          loading={isLoading}
          size={60}
        />
        {totalBlog._id && (
          <>
            <img src={totalBlog.imageUrl} className="card-img-top" alt="..." />
            <div className="card-body_sreekar mt-3">
              <h1 className="card-title mb-1"> {totalBlog.title} </h1>
              <p className="card-text_sreekar">
                {totalBlog.description}
              </p>
            </div>
          </>

        )}
      </div>
    </div>
  )
}

export default BlogRead
