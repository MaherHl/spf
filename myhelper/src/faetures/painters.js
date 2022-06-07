import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const c = async () => {
    try {
        const resp = await axios.get('http://localhost:3500/painters/allPnt');
        setPainters(resp.data);
        
    } catch (err) {
        
        console.error(err);
    }
};
       
   

            

      
export const painterSlice = createSlice({
  name: "painters",
  initialState: {value: c() },
  reducers: (state,action)=>{
      return state
  }

  
    
  
});


export default painterSlice.reducer;