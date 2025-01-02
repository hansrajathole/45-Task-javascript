import React, { useState } from 'react'
import { createContext } from 'react'

export const dets = createContext(null)
const DataContext = (props) => {
  const [data, setdata] = useState("Hansraj")
  return (
    <dets.Provider value={[data, setdata]}>
      {props.children}
    </dets.Provider>
  )
}

export default DataContext
