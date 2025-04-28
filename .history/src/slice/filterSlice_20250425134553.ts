import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Period = 'h1' | 'h6' | 'h12';

type Servers = 'ALL' | 'web' | 'db' | 'cache';

interface PeriodState {
  selectedPeriod: Period;
  server: Servers
}

const initialState: PeriodState = {
  selectedPeriod: 'h1',
  server: 'ALL'
};

const periodSlice = createSlice({
  name: 'period',
  initialState,
  reducers: {
    changePeriod(state, action: PayloadAction<Period>) {
      state.selectedPeriod = action.payload;
    },
    changeServer(state, action: PayloadAction<Servers> ) {
      state.server = action.payload
    }
  },
});

export const { actions, reducer } = periodSlice;

export default periodSlice.reducer;
