import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: "user",
    initialState:{
        userInfo:{
            firstName:"No value",
            lastName: "No value",

        }
    },
    reducers:{
       
        UpdateUser: (state,action) =>{
            state.userInfo = action.payload
            state.pendding = false
        }
        
    }
    
})

export const {UpdateUser} = userSlice.actions
export default userSlice.reducer;