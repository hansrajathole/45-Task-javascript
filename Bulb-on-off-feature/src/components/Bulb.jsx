import React, { useState } from 'react'

const Bulb = () => {
    const [bulb, setbulb] = useState()
    const BulbHandle = ()=>{
        setbulb(!bulb)
    }
  return (
    <div className='flex flex-col gap-5'>
        <div className={`h-[200px] w-[200px]  ${bulb?"bg-yellow-500 shadow-sm shadow-yellow-500":"bg-white"} rounded-full`}></div>
        <button 
        onClick={()=>{
            BulbHandle()
        }}
        className='bg-green-500 text-2xl rounded-lg font-semibold p-1'>{bulb?"Off the Bulb":"On the Bulb"}</button>
    </div>
  )
}

export default Bulb