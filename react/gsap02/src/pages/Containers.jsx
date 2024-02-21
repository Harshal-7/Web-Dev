import React from 'react'
import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Containers() {

    const box = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.utils.toArray('.panel').forEach((panel, i) => {
            ScrollTrigger.create({
                trigger: panel,
                start: "top top",
                pin: true,
                pinSpacing: false,
                snap: 1,
            })
        })
    });

    return (
        <div className="flex flex-col items-center justify-center text-7xl">
            <div className='a panel w-full h-screen flex items-center justify-center bg-red-600'>A</div>
            <div className='b panel w-full h-screen flex items-center justify-center bg-blue-600'>B</div>
            <div className='c panel w-full h-screen flex items-center justify-center bg-yellow-400'>C</div>
            <div className='d panel w-full h-screen flex items-center justify-center bg-purple-600'>D</div>
        </div>
    )
}

export default Containers