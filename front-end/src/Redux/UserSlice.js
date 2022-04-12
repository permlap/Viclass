import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: "user",
    initialState:{
        firstName: "----",
        lastName: "----"
    },
    reducers:{
        update:(state,action) =>{
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
        }
    }
    
})

export const {update} = userSlice.actions
export default userSlice.reducer;