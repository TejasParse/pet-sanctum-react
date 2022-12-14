import { Handle_Flag } from "../input";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { computeHeadingLevel } from "@testing-library/react";



export default function Handle_Submit(event) {
  let flag_index;
  let arr;
  const navigate = useNavigate();
  let btn = document.getElementById("btn_signup");
  event.preventDefault();
  arr = Handle_Flag();
  console.log(arr[2])

  // flag_index = Handle_Flag()
  flag_index = arr[0]
  // if (flag_index !== -1) {
  //   event.preventDefault();
  //   btn.style.fontSize = "15px";
  //   btn.style.width = "360px";
  //   btn.value = "Look into red colored text!";
  //   setTimeout(() => {
  //     btn.style.fontSize = "";
  //     btn.style.width = "130px";
  //     btn.value = "Submit";
  //   }, 11000);
  // }
  // else {


    let temp = new Date().valueOf();
    let formInput1 = {
      
      id: temp,
      fname:arr[1],
      lname:arr[2],
      phone:arr[4],
      uname:arr[5],
      email:arr[3],
      address:arr[9],
      state:arr[6],
      zip:arr[8],
      city:arr[7],
      password:arr[10],
      imageUrl:"./images/empty_profile.webp",
      isAdmin:0,
      adopted:[],
      rescued:[],
      __v: 0

    }
    console.log("Submitted!");
    console.log(formInput1);

    axios.post("http://localhost:3005/profiles", formInput1, {
            headers: {
                'Content-Type': 'application/json'
            }
    }
        )
            .then(res => {
              console.log("Submitted");
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
        
        // navigate(`/Login`)
  // }

  
}
