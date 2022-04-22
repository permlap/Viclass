import {  configureStore } from '@reduxjs/toolkit'
import counterSlide from './counterSlide'
import studentSlide from './studentSlide'
import UserSlice from "./UserSlice"
export default configureStore({
    reducer:{
        user: UserSlice,
        counter: counterSlide,
        student: studentSlide
    }
})