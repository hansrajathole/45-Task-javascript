import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'

const Clock = () => {


    const secondRef = useRef(null)
    const hourRef = useRef(null)
    const minuteRef = useRef(null)

   
    setInterval(function () {
        let date = new Date()
        let second = date.getSeconds();
        let minute = date.getMinutes();
        let hour = date.getHours();
        
        let secDeg = ((second / 60)*360);
        let minDeg = ((minute / 60)*360);
        let hrDeg = ((minute / 12)*360);
        
        
        secondRef.current.style.transform = `rotate(${secDeg}deg) translateY(-50%)`
        hourRef.current.style.transform = `rotate(${hrDeg}deg) translateY(-50%)`
        minuteRef.current.style.transform = `rotate(${minDeg}deg) translateY(-50%)`

    },1000)

  return (
    <div className='h-screen w-full bg-gray-600 flex justify-center items-center'>
        <div className='border-4 border-white rounded-full h-[250px] w-[250px] relative'>
            <div ref={secondRef} className={`h-[2px] w-[50%] z-10 bg-red-500  origin-top-right absolute top-[50%] ease-linear duration-100 `}></div>
            <div ref={hourRef} className={`h-1 w-[50%] bg-black  origin-top-right absolute top-[50%] ease-linear duration-100  `}></div>
            <div ref={minuteRef} className={`h-[3px] w-[50%] bg-white origin-top-right absolute top-[50%]  ease-linear duration-100 `}  ></div>
            <div className='border-2 rounded-full bg-indigo-600 absolute top-[49%] left-[48%] z-30 h-2 w-2'></div>
        </div>
    </div>
  )
}

export default Clock
