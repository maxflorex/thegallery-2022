import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    // REDUCERS AKA FUNCTIONS - CHANGE VALUE AFTER STATE TO WHATEVER WAS ALREADY DECLARED
    reducers: {
        increment: (state) => { state.count += 1 },
        decrement: (state) => { state.count -= 1 }, 
        // ACTION IS A VARIABLE WE ARE ALLOWED TO PASS
        incrementByAmount: (state, action) => { state.count += action.payload },
    }
})

// EXPORT EACH INDIVIDUAL FUNCTION
export const { increment, decrement, incrementByAmount } = counterSlice.actions

// IMPORT REDUCERS
export default counterSlice.reducer 