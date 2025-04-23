import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
    period: string;
  }

const initialState: FilterState = {
    period: 'h1',
  };

const filterSlice = createSlice({
    name: 'filter',
    initialState: { period: 'h1' },
    reducers: {
        setPeriod(state, action: PayloadAction<string>) {
            state.period = action.payload
        }
    }
})

export const {setPeriod} = filterSlice.actions;
export default filterSlice.reducer