import { createSlice } from "@reduxjs/toolkit";


const filterSlice = createSlice({
    name: 'filter',
    initialState: { period: 'h1' },
    reducers: {
        setPeriod(state, action) {
            state.period = action.payload
        }
    }
})

export const {setPeriod} = filterSlice.actions;
export default filterSlice.reducer