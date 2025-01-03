import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../store/reducers/ProductSlice'
const One = () => {

    const {data} =  useSelector((state)=>state.products)
    console.log(data);
    const dispatch = useDispatch
    const AddHandler = ()=>{
        let newData = [
            {
                id : 345,
                product : "laptop",
                price : 8976
            }
        ]
        dispatch(add(newData))
        // console.log(dispatch);
        
    }

  return (
    <div>
      {data.map((elem,index)=>{
        return <div key={index}>
            <h1>{elem.product}</h1>
            <h2>{elem.id}</h2>
            <h2>{elem.price}</h2>
            <button onClick={AddHandler}>add </button>
            <br />
            <br />
        </div>
      })}
    </div>
  )
}

export default One
