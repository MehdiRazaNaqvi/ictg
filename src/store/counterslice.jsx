import { createSlice } from '@reduxjs/toolkit'

// import { database } from "../firebase/firebase";

// import { set, ref, onValue, remove } from 'firebase/database';





const initialState = {


  home : false , 
  
  

}





export const counterSlice = createSlice({

  name: 'counter',

  initialState,


  reducers: {








  },
})




export const { current_user , load_data} = counterSlice.actions

export default counterSlice.reducer