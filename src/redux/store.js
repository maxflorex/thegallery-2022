import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import userReducer from './userSlice';

const store = configureStore({
    // ADD EACH REDUCER SLICE HERE - CHANGED THE NAMES
    reducer: {
        counter: counterReducer,
        user: userReducer
    }
})



export default store;