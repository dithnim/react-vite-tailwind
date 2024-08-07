import React from "react";
import Navbar from "./components/Navbar.jsx";
import "./login.css";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { useNavigate } from "react-router-dom";
import jwt_decode from 'jwt-decode';

const clientId =
  "428957910211-3gi9jf9226s7t45ds0fep8mmk4134bi8.apps.googleusercontent.com";

const responseFacebook = (response) => {
  console.log(response);
};

const fbClick = (data) => {
  console.warn(data);
};

const Login = () => {
  const Navigate = useNavigate();

  const navigateToTodo = () => {
    Navigate("/todo");
  };

  function handleData(data) {
    data.preventDefault();
    const formData = new FormData(data.currentTarget);
    const user = Object.fromEntries(formData);

    // alert(user.userName + user.password);
    if (user.userName == "Dineth" && user.password == 1298) {
      navigateToTodo();
    } else {
      alert("You are not invited");
    }
  }

  const onSuccess = (response) => {
    console.log("Login Success: ", response.profileObj);
  };

  const onFailure = (response) => {
    console.log("Login Failed: ", response);
  };

  return (
    <>
      <Navbar />
      <div className="login-body flex justify-center items-center h-screen">
        <div className="wrapper bg-neutral-950 w-2/5 h-3/5 rounded-2xl flex items-center justify-center flex-col">
          <h1 className="text-white mb-10 text-3xl font-bold">Login/Signup</h1>
          <div className="apis">
            <GoogleLogin
              clientId={clientId}
              buttonText="Login with google"
              onSuccess={onSuccess}
              onFailure={onFailure}
              className="g-btn mb-3"
            />

            <FacebookLogin
              appId="388425284240144"
              autoLoad={true}
              fields="name,email,picture"
              onClick={fbClick}
              callback={responseFacebook}
              icon="fa-facebook"
            />
          </div>

          <label htmlFor="or" className="text-white text-lg text-semibold mt-5">
            Or
          </label>

          <form
            onSubmit={handleData}
            className="login-form w-full flex flex-col items-center justify-center"
          >
            <div className="content flex flex-col items-center justify-center">
              <input
                type="text"
                className="username-input font-semibold flex bg-neutral-900 border-b-2  rounded-md py-1 px-2 text-white m-4 w-full"
                placeholder="Username"
                name="userName"
              />

              <input
                type="password"
                className="password-input font-semibold bg-neutral-900 border-b-2  rounded-md py-1 px-2 text-white w-full"
                placeholder="Password"
                name="password"
              />

              <button
                type="submit"
                className="btn-login font-semibold bg-white mt-10 px-20 py-2 rounded-lg w-full text-black"
              >
                Lessgo
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
