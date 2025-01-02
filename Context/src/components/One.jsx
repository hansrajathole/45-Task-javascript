import React, { useContext } from 'react'
import { dets } from '../context/DataContext'
const One = () => {
    const [data, setdata] =  useContext(dets)
  return (
    <div>
      {data}
    </div>
  )
}

export default One
