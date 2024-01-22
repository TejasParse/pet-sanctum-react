import axios from "axios";
import { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import "./Login.css";
import { authActions } from "../../store/index"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { toast } from 'react-toastify';
import { RingLoader, BarLoader, ClipLoader } from "react-spinners"

import { getBlur, getFocus, getBlur1, getFocus1, show, show1 } from "./sideEffect_Login";

export default function Login() {
  const [username, setUsername] = useState('');
  const [pwd, setPwd] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const [show, setShow] = useState(false);

  let onLogin = (event) => {
    event.preventDefault();
    setIsLoading(true)
    console.log(username, pwd);

    axios
      .post(`${process.env.REACT_APP_SERVER_LINK}/api/user/login`, {
        username: username,
        password: pwd,
      })
      .then((res) => {
        console.log(res);
        setIsLoading(false)
        let response = res.data;
        if (response.status == 200) {
          dispatch(
            authActions.login({
              id: response.id,

              username: response.username,
              LoginProfile: response.LoginDetails,
            }) // Inside (), dictionary used (action.payload.username)\
          );
          toast.success(`Login Successful!`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          navigate("/");
        } else {
          
          setShow(true);
        }
      })
      .catch((err) => {
        setIsLoading(false)
        console.log(err);
        toast.info(`${err?.response?.data?.message || "Server Error"}`, {
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

  }

  return (
    <>
      {/* {show &&
        <Alert key={"danger"} variant={"danger"} onClose={() => setShow(false)} dismissible>
          Please Enter a valid username and password
        </Alert>
      } */}
      <div className="container_login">
        <div className="page_login">
          <div className="image_login">
            <img
              src={process.env.PUBLIC_URL + "/images/mobile.svg"}
              alt="sorry"
            />
          </div>

          <div className="form_login">
            <form name="loginForm" id="form_login" onSubmit={onLogin}>
              <div className="header_login">
                <img
                  src={process.env.PUBLIC_URL + "/images/best.jfif"}
                  alt="sorry"
                />
                <h2 id="h2_login">WELCOME</h2>
              </div>
              <div className="input-container_login">
                <label
                  for="name_login"
                  id="l-name_login"
                  className="label_class_login"
                >
                  Username
                </label>
                <span id="s-name_login" className="span_class_login">
                  Username
                </span>
                <input
                  type="text"
                  id="name_login"
                  name="name_login"
                  className="input_login"
                  value={username}
                  onChange={(e) => { setUsername(e.target.value) }}
                  onFocus={getFocus}
                  onBlur={getBlur}
                  required
                />
              </div>
              <div className="input-container_login">
                <span id="s-pwd_login" className="span_class_login">
                  Password
                </span>
                <label
                  for="pwd_login"
                  id="l-pwd_login"
                  className="label_class_login"
                >
                  Password
                </label>
                <div className="lock_login">
                  <input
                    type="password"
                    id="pwd_login"
                    className="input_login"
                    value={pwd}
                    onChange={(e) => { setPwd(e.target.value) }}
                    onFocus={getFocus1}
                    onBlur={getBlur1}
                    required
                  />
                  <img
                    src={process.env.PUBLIC_URL + "/images/c-eye.png"}
                    id="c-eye_login"
                    onClick={show}
                    alt="sorry"
                  />
                  <img
                    src={process.env.PUBLIC_URL + "/images/o-eye.png"}
                    id="o-eye_login"
                    onClick={show1}
                    alt="sorry"
                  />
                </div>
              </div>
              <div className="btn_login">
                <a id="forgot_login" href="">
                  *Forgot your password?
                </a>
                <input type="submit" id="btn_login" value="SIGN IN" />
                <div className="mt-2">
                  <BarLoader
                    color="#000"
                    height={4}
                    width={100}
                    loading={isLoading}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
