import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import {useState, useEffect} from 'react'
import './BlogRead.css'

function BlogRead(props) {

    const temp = useParams();

    let [totalBlog, changeBlogData] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_LINK}/api/blog/${temp.id}`)
      .then((res) => {
        console.log(res.data);

        changeBlogData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

    
  return (
    <div className='blog-read-body_sreekar p-4'  >
     { totalBlog._id && (
    <div className="blog-read-card ms-auto me-auto p-4 shadow-lg">
        <img src={totalBlog.imageUrl} className="card-img-top" alt="..." />
        <div className="card-body_sreekar">
          <h1 className="card-title"> {totalBlog.title} </h1>
          <p className="card-text_sreekar">
              {totalBlog.description}
          </p>
        </div>
    </div>
     )}
    </div>
  )
}

export default BlogRead
