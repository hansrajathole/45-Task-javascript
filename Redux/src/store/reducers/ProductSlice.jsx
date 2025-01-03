import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    data : [
        {   
            id: 23,
            product : "iphone",
            price : 12324
        },
        {   
            id: 23,
            product : "mac",
            price : 12324
        },
        {   
            id: 23,
            product : "vivophone",
            price : 12324
        },
        {   
            id: 23,
            product : "mobile",
            price : 12324
        },
        {   
            id: 23,
            product : "bike",
            price : 12324
        },
    ],
}

const productSlice = createSlice({
    name : "products",
    initialState,
    reducers : {
        add : (state,action)=>{
            console.log(action);
            state.data.push(action.payload)
            
        },
    },
})
export default productSlice.reducer;
export const {add} = productSlice.actions;