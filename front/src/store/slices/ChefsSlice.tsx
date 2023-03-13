import {createSlice} from "@reduxjs/toolkit";
import {IChefsState} from '../../Interfaces';

const presentChefs = async () => { 
    try{
        const response = await fetch('http://localhost:8000/api/chefs',{
            method: 'GET',
    });
        const data = await response.json();
        return data ;  
    } catch (error) {
        console.log('There was an error', error);
    }
  }
  
  const chefs:IChefsState = await presentChefs();
  
  
export const chefsSlice = createSlice({
    name: "chefs",
    initialState: {
        value: chefs,
    },
    reducers: {
  
    }
});
export default chefsSlice.reducer;