import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Period = 'h1' | 'h6' | 'h12';

interface PeriodState {
  selectedPeriod: Period;
}

const initialState: PeriodState = {
  selectedPeriod: 'h1',
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
