import { useState } from "react";
import "./App.css";
import vid from "./assets/vid1.mov";
import ServiceSVG from "./components/ServiceSVG.jsx";
import svg1 from "./assets/svg1.svg";
import svg2 from "./assets/svg2.svg";
import svg3 from "./assets/svg3.svg";
import svg4 from "./assets/svg4.svg";
import svg5 from "./assets/svg5.svg";
import svg6 from "./assets/svg6.svg";
import './App.css';

function App() {
  return (
    <>
      <section
        id="#home"
        className="home bg-white dark:bg-black h-auto flex items-center flex-col pt-16"
      >
        <h1 className="text-dark dark:text-white lg:text-5xl md:text-4xl text-3xl font-semibold pb-2">
          All your tasks on
        </h1>
        <h1 className="text-dark dark:text-white lg:text-5xl md:text-4xl text-3xl font-semibold pb-4">
          one platform.
        </h1>
        <h2 className="text-dark dark:text-white lg:text-4xl md:text-3xl">
          Simple, efficient and <span>important!</span>
        </h2>
        <div className="buttons mt-16 mb-20">
          <button
            id="btn-signin"
            className="bg-red-600 dark:bg-white text-white dark:text-black py-1 px-3 md:px-5 md:py-2 text-xl mr-3 rounded-md"
          >
            Start now
          </button>
          <button className="bg-slate-200 dark:bg-neutral-900 text-black dark:text-white py-1 px-3 md:px-5 md:py-2 text-xl rounded-md">
            Try a demo
          </button>
        </div>
      </section>
      <video
        loop
        autoPlay
        muted
        src={vid}
        className="vid absolute right-[60%] top-[20%] md:right-[70%] w-56 md:w-64 "
      ></video>

      <section
        id="services"
        className="services bg-slate-200 dark:bg-neutral-950 h-80 flex items-center flex-col pt-16"
      >
        <div className="slogan-kinda bg-neutral-900/50 px-3 py-2 rounded-full text-red-300 font-semibold absolute left-7">Built for productivity</div>
      </section>
    </>
  );
}

export default App;
