import React from 'react'
import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Horizontal() {

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        let sections = gsap.utils.toArray('.panel')

        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: 'none',
            scrollTrigger: {
                trigger: '.box',
                pin: true,
                scrub: 1,
                snap: 1 / (sections.length - 1),

            }
        })
    });

    return (
        <div className="box flex flex-col items-center justify-center text-7xl">
            <div className='a panel w-full h-screen flex items-center justify-center bg-red-600'>A</div>
            <div className='b panel w-full h-screen flex items-center justify-center bg-blue-600'>B</div>
            <div className='c panel w-full h-screen flex items-center justify-center bg-yellow-400'>C</div>
            <div className='d panel w-full h-screen flex items-center justify-center bg-purple-600'>D</div>
        </div>
    )
}

export default Horizontal