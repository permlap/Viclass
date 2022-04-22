import { createSlice } from '@reduxjs/toolkit'

const studentSlide = createSlice({
  name: 'student',
  initialState: {
    studentId: 0,
  },
  reducers: {
    updateStudent: (state,action) =>{
        state.studentId = action.payload
    
  },
    }
})


export const { updateStudent} = studentSlide.actions
export default studentSlide.reducer