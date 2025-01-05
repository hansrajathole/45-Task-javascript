import React from 'react'
import { useState } from 'react'

const App = () => {
  const [red, setred] = useState(0)
  const [blue, setblue] = useState(0)
  const [green, setgreen] = useState()

  const generateColor = ()=>{
    setred(Math.floor(Math.random()*255))
    setblue(Math.floor(Math.random()*255))
    setgreen(Math.floor(Math.random()*255))
  }

  return (
    <div className='h-screen w-full p-8 flex flex-col justify-center items-center gap-4'>
      <button 
      onClick={generateColor}
      className='text-2xl font-semibold bg-gray-600 text-white p-2 rounded-md active:scale-95'>Generate color</button>
      <div className='h-44 w-64 bg-slate-800'
      style={{backgroundColor : `rgb(${red},${green},${blue})`,borderRadius : `5pxy`}}
      ></div>
    </div>
  )
}

export default App
