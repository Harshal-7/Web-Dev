import { useState, useRef, useEffect } from "react";
import "./App.css";
import img from "./assets/img.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Containers from "./pages/Containers";
import Horizontal from "./pages/Horizontal";

function App() {
  const box = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(".c", {
      scrollTrigger: {
        trigger: ".c",
        markers: true,
        scrub: 3,
        toggleActions: "restart pause reverse pause",
      },
      x: 800,
      rotation: 360,
      duration: 3,
    });
  });

  return (
    <div
      ref={box}
      className="flex flex-col items-center gap-32 mb-96 justify-center text-7xl"
    >
      <div className="a w-40 h-40 mt-72  mb-72 flex items-center justify-center bg-red-600">
        A
      </div>
      <div className="b w-40 h-40 mb-44 flex items-center justify-center bg-blue-600">
        B
      </div>
      <div className="c w-40 h-40 mt-72  mb-96 flex items-center justify-center bg-yellow-400">
        C
      </div>
      <div className="mt-72  mb-96"></div>
    </div>

    // <div>
    //   <Containers />
    //   <Horizontal />
    // </div>
  );
}

export default App;
