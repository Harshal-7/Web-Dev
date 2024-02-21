import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { TweenMax, Power3 } from 'gsap'
import Design1 from './Components/Design1';

function App() {

  const myRef = useRef(null);

  console.log(myRef);

  useEffect(() => {
    const header1 = myRef.current;

    gsap.from(header1, {
      opacity: 0,
      y: -150, // Move the text 50 pixels down during the animation
      duration: 1.5,
      ease: 'Power3.out', // Custom easing function
    })

  }, [])


  return (
    <div className='flex h-screen w-full justify-center items-center'>
      <h1 className='text-7xl'>
        {/* Helu!! */}
      </h1>

      <Design1/>
    </div>
  )
}

export default App
