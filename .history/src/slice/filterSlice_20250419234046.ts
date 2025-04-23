import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
    period: any;
  }

const initialState: FilterState = {
    period: 'h1',
  };

const filterSlice = createSlice({
    name: 'filter',
    initialState: { period: 'h1' },
    reducers: {
        setPeriod(state, action: PayloadAction<any>) {
            state.period = action.payload
        }
    }
})

export const {setPeriod} = filterSlice.actions;
export default filterSlice.reducer