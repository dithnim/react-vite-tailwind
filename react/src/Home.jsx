import React from "react";
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  return (
    <>
      <Navbar />
      <App />
    </>
  );
};

export default Home;
