import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: "user",
    initialState:{
        firstName: "Permlap",
        lastName: "Phola"
    },
    reducers:{
        update:(state,action) =>{
            state.firstName = action.payload
            state.lastName = action.payload
        }
    }
    
})

export const {update} = userSlice.actions
export default userSlice.reducer;