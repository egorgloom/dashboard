import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMetrics } from '../interfaces/interface';

interface MetricsState {
  rawData: IMetrics[] | null;
  filteredData: IMetrics[] | null;
  selectedPeriod: 'h1' | 'h6' | 'h12';
  server: 'ALL' | 'WEB' | 'DB' | 'CACHE';
  isFetching: Boolean;
}

const initialState: MetricsState = {
  rawData: null,
  filteredData: null,
  selectedPeriod: 'h1',
  server: 'ALL',
  isFetching: true

};

const metricsSlice = createSlice({
  name: 'metrics',
  initialState,
  reducers: {
    setRawData(state, action: PayloadAction<IMetrics[]>) {
      state.rawData = action.payload;
    },
    setSelectedPeriod(state, action: PayloadAction<'h1' | 'h6' | 'h12'>) {
      state.selectedPeriod = action.payload;
    },
    setServerFilter(state, action: PayloadAction<'ALL' | 'WEB' | 'DB' | 'CACHE'>) {
      state.server = action.payload;
    },
    processData(state) {
      if (!state.rawData) {
        state.filteredData = null;
        return;
      }
      let periodFilteredData = state.rawData
        .map((item) : IMetrics | null => {
          const periodData = item.historicalData?.[state.selectedPeriod];

          if (periodData) {
            return {
              ...item,
              historicalData: {
                [state.selectedPeriod]: {
                  timestamp: periodData.timestamp,
                  responseTime: periodData.responseTime,
                  rps: periodData.rps,
                  cpu: periodData.cpu,
                  memory: periodData.memory,
                },
              },
            };
          }
          return null;
        })
        .filter((item): item is IMetrics => item !== null);

        if (state.server !== 'ALL') {
          periodFilteredData = periodFilteredData.filter(item => item.server === state.server);
        }
        state.filteredData = periodFilteredData;
    },
    toggleRefetchMetrics(state) {
      state.isFetching = !state.isFetching
    }

  },
});

export const { setRawData, setSelectedPeriod, setServerFilter, processData } = metricsSlice.actions;

export default metricsSlice.reducer;
