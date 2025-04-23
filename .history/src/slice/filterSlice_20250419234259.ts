import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
    period: any;
  }

const initialState: FilterState = {
    period: 'h6',
  };

const filterSlice = createSlice({
    name: 'filter',
    initialState: { period: 'h6' },
    reducers: {
        setPeriod(state, action: PayloadAction<any>) {
            state.period = action.payload
        }
    }
})

export const {setPeriod} = filterSlice.actions;
export default filterSlice.reducer