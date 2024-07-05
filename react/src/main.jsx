import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Error.jsx";
import Login from "./Login.jsx";
import Todo from "./Todo.jsx";
import Challenge from "./Challenge.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/todo",
    element: <Todo />,
  },
  {
    path: "/challenge",
    element: <Challenge />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Navbar />
    <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
