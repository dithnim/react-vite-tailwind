import React from "react";
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5173/");
      const data = response.json();
      console.log(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <App />
    </>
  );
};

export default Home;
