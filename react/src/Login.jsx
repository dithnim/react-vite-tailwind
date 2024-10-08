import React from "react";
import Navbar from "./components/Navbar.jsx";
import "./login.css";
import { useNavigate } from "react-router-dom";

const clientId =
  "428957910211-3gi9jf9226s7t45ds0fep8mmk4134bi8.apps.googleusercontent.com";

const responseFacebook = (response) => {
  console.log(response);
};

const fbClick = (data) => {
  console.warn(data);
};

const Login = () => {
  const navigate = useNavigate();

  const navigateToTodo = () => {
    navigate("/todo");
  };

  const onSuccess = (response) => {
    console.log("Login Success: ", response.profileObj);
    navigateToTodo();
  };

  const onFailure = (response) => {
    console.log("Login Failed: ", response);
    alert("Google Login failed. Please try again.");
  };

  function handleData(data) {
    data.preventDefault();
    const formData = new FormData(data.currentTarget);
    const user = Object.fromEntries(formData);

    if (user.userName === "Dineth" && user.password === "1298") {
      navigateToTodo();
    } else {
      alert("You are not invited");
    }
  }

  function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId());
    console.log("Name: " + profile.getName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());
  }

  return (
    <>
      <Navbar />
      <div className="login-body flex justify-center items-center h-screen">
        <div className="wrapper bg-neutral-950 w-2/5 h-3/5 rounded-2xl flex items-center justify-center flex-col">
          <h1 className="text-white mb-10 text-3xl font-bold">Login/Signup</h1>
          <div className="apis">
            <GoogleLogin
              clientId={clientId}
              buttonText="Login with Google"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={"single_host_origin"}
              className="g-btn mb-3"
            />

            <FacebookLogin
              appId="388425284240144"
              autoLoad={false}
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
                className="username-input font-semibold flex bg-neutral-900 border-b-2 rounded-md py-1 px-2 text-white m-4 w-full"
                placeholder="Username"
                name="userName"
              />
              <input
                type="password"
                className="password-input font-semibold bg-neutral-900 border-b-2 rounded-md py-1 px-2 text-white w-full"
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
