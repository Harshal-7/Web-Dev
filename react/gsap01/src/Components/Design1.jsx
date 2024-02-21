import React from 'react'
import { useState, useEffect, useRef } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Design1() {

    let circle1 = useRef(null);
    let circle2 = useRef(null);
    let circle3 = useRef(null);
    let mainEle = useRef(null);

    useEffect(() => {
        const myCircle1 = circle1.current;
        const myCircle2 = circle2.current;
        const myCircle3 = circle3.current;
        const mainElement = mainEle.current;

        gsap.to(mainElement, { css: { visibility: 'visible' } })

        gsap.from(myCircle1, {
            x: -80,
            opacity: 0,
            ease: 'back.in'
        });
        gsap.from(myCircle2, {
            x: -80,
            opacity: 0,
            ease: 'back.in',
            delay: 0.2
        });
        gsap.from(myCircle3, {
            x: -80,
            opacity: 0,
            ease: 'back.in',
            delay: 0.4
        })

    }, [])

    const mouseEnter1 = () => {
        gsap.to(circle1.current, { width: '180', height: '180' })
    }

    const mouseLeave1 = () => {
        gsap.to(circle1.current, { width: '112', height: '112' })
    }

    const mouseEnter2 = () => {
        gsap.to(circle2.current, { width: '180', height: '180' })
    }

    const mouseLeave2 = () => {
        gsap.to(circle2.current, { width: '112', height: '112' })
    }

    const mouseEnter3 = () => {
        gsap.to(circle3.current, { width: '180', height: '180' })
    }

    const mouseLeave3 = () => {
        gsap.to(circle3.current, { width: '112', height: '112' })
    }

    return (
        <div ref={mainEle} className=''>
            <div onMouseEnter={mouseEnter1}
                onMouseLeave={mouseLeave1}
                ref={circle1}
                className='w-28 h-28 bg-red-600 rounded-full mb-8'>
            </div>

            <div onMouseEnter={mouseEnter2}
                onMouseLeave={mouseLeave2}
                ref={circle2}
                className='w-28 h-28 bg-blue-600 rounded-full mb-8'>
            </div>

            <div onMouseEnter={mouseEnter3}
                onMouseLeave={mouseLeave3}
                ref={circle3}
                className='w-28 h-28 bg-yellow-400 rounded-full mb-8'>
            </div>

        </div>
    )
}

export default Design1