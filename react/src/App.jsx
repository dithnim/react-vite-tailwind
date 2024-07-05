import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import vid from "./assets/vid1.mov";
import ServiceSVG from "./components/ServiceSVG.jsx";
import "./App.css";

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
        className="zoom-in absolute right-[60%] top-[20%] md:right-[70%] w-[140px] md:w-56 "
      ></video>

      <section
        id="services"
        className="services bg-slate-200 dark:bg-neutral-950 h-auto flex flex-col items-center px-20 lg:flex-row pt-16"
      >
        <div className="intro w-[100%] lg:w-[60%] flex flex-col items-start justify-center">
          <div className="slogan-kinda bg-neutral-900/50 px-3 py-2 rounded-full text-red-300 font-semibold  mb-4">
            Built for productivity
          </div>
          <p className="font-semibold text-3xl mb-5 z-10">
            Stay on top of your tasks and boost your productivity with Kodi.
            Designed with simplicity and efficiency in mind, Kodi is the
            ultimate tool for managing your daily tasks and collaborative
            projects.
          </p>
        </div>
        <div className="decor-services w-[100%] lg:w-[60%] lg:px-2 flex flex-col items-center font-semibold justify-center mt-20">
          <div className="flex">
            <label
              htmlFor=""
              className="text-sm md:text-lg lg:text-2xl border border-neutral-900 px-[10vw] lg:px-[70px] py-6 rounded-full me-[15px]"
            >
              PRODUCTIVITY
            </label>
            <label
              htmlFor=""
              className="text-sm md:text-lg lg:text-2xl border border-neutral-900 px-[10vw] lg:px-[70px] py-6 rounded-full"
            >
              VERSATILITY
            </label>
          </div>
          <label
            htmlFor=""
            className="text-sm md:text-lg lg:text-2xl border border-neutral-900 px-[29vw] lg:px-[225px] py-6 mt-[15px] rounded-full"
          >
            MINIMALISM
          </label>
        </div>
      </section>
    </>
  );
}

export default App;
