// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface FilterState {
//     period: any;
//   }

// const initialState: FilterState = {
//     period: 'h1',
//   };

// const filterSlice = createSlice({
//     name: 'filter',
//     initialState: { period: 'h1' },
//     reducers: {
//         setPeriod(state, action: PayloadAction<any>) {
//             state.period = action.payload
//         }
//     }
// })

// export const {setPeriod} = filterSlice.actions;
// export default filterSlice.reducer

// src/redux/periodSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Period = 'h1' | 'h6' | 'h12';

interface PeriodState {
  selectedPeriod: Period;
}

const initialState: PeriodState = {
  selectedPeriod: 'h1',  // или другой период по умолчанию
};

const periodSlice = createSlice({
  name: 'period',
  initialState,
  reducers: {
    changePeriod(state, action: PayloadAction<Period>) {
      state.selectedPeriod = action.payload;
    },
  },
});

export const { changePeriod } = periodSlice.actions;
export default periodSlice.reducer;
