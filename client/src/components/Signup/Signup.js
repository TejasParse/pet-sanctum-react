import React from "react";
import {Input} from "../sub_Components/input";
import { Handle_Submit } from "../sub_Components/validation/handle_submit";

import "./Signup.css";

export default function Signup() {



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
