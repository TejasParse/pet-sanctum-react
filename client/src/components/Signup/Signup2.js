import React from "react";
import {Input} from "../sub_Components/input";
import { Handle_Flag } from "../sub_Components/input";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import "./Signup.css";

export default function Signup() {

  function Handle_Submit(event) {
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

  return (
    <>
      <div className="container_signup">
        <div className="main_signup">
          <div className="heading_signup">Sign Up</div>
          <div className="form_signup">
            <form id="signup_form" onSubmit={Handle_Submit} > 
              <div id="input_area_signup">
                <div className="input_name_signup"> 
                  <div className="input_signup">
                    <Input
                      type="text"
                      input_id="fname_signup"
                      input_class="input_field_signup"
                      label_class="label_signup"
                      label_child="First name"
                    />
                  </div>
                  
                  <div className="input_signup">
                    <Input
                      type="text"
                      input_id="lname_signup"
                      input_class="input_field_signup"
                      label_class="label_signup"
                      label_child="Last name"
                    />
                  </div>
                  
                  <div className="input_signup">
                    <Input
                      type="text"
                      input_id="phone_signup"
                      input_class="input_field_signup"
                      label_class="label_signup"
                      label_child="Contact Number"
                    />
                  </div>
                  <div className="input_signup">
                    <Input
                      type="text"
                      input_id="state_signup"
                      input_class="input_field_signup"
                      label_class="label_signup"
                      label_child="State"
                    />
                  </div>
                </div>
                <div className="input_address">
                  <div className="input_signup">
                    <Input
                      type="text"
                      input_id="city_signup"
                      input_class="input_field_signup"
                      label_class="label_signup"
                      label_child="City"
                      input_value
                    />
                  </div>
                  <div className="input_signup">
                    <Input
                      type="text"
                      input_id="zip_signup"
                      input_class="input_field_signup"
                      label_class="label_signup"
                      label_child="Pincode"
                    />
                  </div>

                  <div className="input_signup">
                    <Input
                      type="text"
                      input_id="address_signup"
                      input_class="input_field_signup"
                      label_class="label_signup"
                      label_child="Address"
                    />
                  </div>
                  
                </div>
                <div className="input_user">
                <div className="input_signup">
                    <Input
                      type="text"
                      input_id="email_signup"
                      input_class="input_field_signup"
                      label_class="label_signup"
                      label_child="Email"
                    />
                  </div>
                  <div className="input_signup">
                    <Input
                      type="text"
                      input_id="uname_signup"
                      input_class="input_field_signup"
                      label_class="label_signup"
                      label_child="Username"
                    />
                  </div>
                  <div className="input_signup">
                    <Input
                      type="password"
                      input_id="pwd_signup"
                      input_class="input_field_signup"
                      label_class="label_signup"
                      label_child="Password"
                    />
                  </div>
                  <div className="input_signup">
                    <Input
                      type="password"
                      input_id="cpwd_signup"
                      input_class="input_field_signup"
                      label_class="label_signup"
                      label_child=" Confirm Password"
                    />
                  </div>
                </div>
              </div>
              <div id="submit_area">
                <input type="submit" value="Submit" id="btn_signup" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
