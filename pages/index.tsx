import React from "react";
import { useRouter } from "next/router";
import Navbar from "../components/navbar";

export default function Index() {
  const router = useRouter();
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-stone-700">
      <Navbar />
      <div className="flex flex-col items-center w-full min-h-screen md:w-11/12 lg:w-4/5 bg-stone-600 transition-all sm:shadow-2xl shadow-none mt-16 mb-8 md:pt-0 pt-10 md:rounded-md md:mt-24 overflow-hidden">
        <section className="h-96 w-full z-0 relative overflow-hidden p-5 flex items-center justify-center sm:flex-row flex-col mb-10 select-none">
          <div className="absolute -z-10 top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 bg-stone-600 bg-opacity-50"></div>
          <div className="absolute -z-10 top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 bg-[url('./../assets/devdashbg.svg')] bg-opacity-50"></div>
          <img
            src={require("./../assets/devdashbg.svg").default.src}
            className="absolute -z-20 top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2"
            alt=""
          />
          <img
            src={require("./../assets/DevDash-Green.svg").default.src}
            alt=""
          />
          <h1 className="text-center text-3xl font-bold text-white sm:ml-5 p-4 mb-5 sm:mb-0 rounded-lg bg-opacity-70 backdrop-blur-md bg-stone-800">
            DevDash
          </h1>
          <button onClick={() => {
            router.push("https://devdash.vercel.app");
          }} className="bg-green-500 pl-6 pr-6 pt-2 pb-2 rounded-tl-lg rounded-br-lg border-2 border-green-400 hover:border-green-300 active:border-green-500 hover:bg-green-400 active:bg-green-600 transition-all duration-75 text-white font-bold drop-shadow-sm hover:drop-shadow-lg active:shadow-inner active:drop-shadow-none tracking-wider absolute bottom-2 left-1/2 -translate-x-1/2 z-30 cursor-pointer hover:text-gray-700 active:text-white">
            <p>Visit Website</p>
          </button>
          <div className="w-full absolute bottom-0 left-0 h-16 bg-stone-700 bg-opacity-50 backdrop-blur-lg z-10"></div>
        </section>
      </div>
    </div>
  );
}
