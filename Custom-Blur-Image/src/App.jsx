import React, { useEffect, useState } from 'react'
import { use } from 'react'

const App = () => {
  const [red, setred] = useState(100)
  const [green, setgreen] = useState(200)
  const [blue, setblue] = useState(50)
  const [blur, setblur] = useState(0)
  const generateColor = (e)=>{
    setblue((e.target.value)+50)
    setred(e.target.value)
    setgreen((e.target.value)+10)
    
  }


  const blurFun = (e)=>{
    setblur(e.target.value)
    console.log(blur);
    
  }

  return (
    <div className='h-screen w-full bg-red-500 p-9'
    style={{backgroundColor : (`rgb(${red},${green},${blue})`) }}
    >
      <div className='flex items-center text-center justify-center  gap-4'>
        <label htmlFor=""  className='text-2xl font-semibold'>blur</label>
        <input  className='w-60' type="range"
        value={blur}
        min={2}
        max={20}
        onChange={(e)=>{
          blurFun(e)
        }}
        />
        <div className='ml-9 flex items-center text-center justify-center gap-4'>
          <label htmlFor=""  className='text-2xl font-semibold'>color</label>
          <input className='w-60' type="range" min={50} max={200} 
          onChange={(e)=>{
           generateColor(e)
          }}
          />

        </div>

      </div>
        <div className='h-full w-full overflow-hidden flex justify-center m-4 rounded-md'
          style={{ filter: `blur(${blur}px)`}}
        >
          <img
          className='w-[500px] h-[300px] object-cover rounded-md'
          src="https://plus.unsplash.com/premium_photo-1673697239981-389164b7b87f?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
    </div>
  )
}

export default App
