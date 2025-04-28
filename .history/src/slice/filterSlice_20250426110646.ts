// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// type Period = 'h1' | 'h6' | 'h12';

// type Servers = 'ALL' | 'web' | 'db' | 'cache';

// interface PeriodState {
//   selectedPeriod: Period;
//   server: Servers
// }

// const initialState: PeriodState = {
//   selectedPeriod: 'h1',
//   server: 'ALL'
// };

// const periodSlice = createSlice({
//   name: 'period',
//   initialState,
//   reducers: {
//     changePeriod(state, action: PayloadAction<Period>) {
//       state.selectedPeriod = action.payload;
//     },
//     changeServer(state, action: PayloadAction<Servers> ) {
//       state.server = action.payload
//     }
//   },
// });

// export const { changePeriod, changeServer } = periodSlice.actions;

// export default periodSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMetrics } from '../interfaces/interface';

interface MetricsState {
  rawData: IMetrics[] | null;
  filteredData: IMetrics[] | null;
  selectedPeriod: 'h1' | 'h6' | 'h12';
  server: 'ALL' | 'web' | 'db' | 'cache';
}

const initialState: MetricsState = {
  rawData: null,
  filteredData: null,
  selectedPeriod: 'h1',
  server: 'ALL',
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
    setServerFilter(state, action: PayloadAction<'ALL' | 'web' | 'db' | 'cache'>) {
      state.server = action.payload;
    },
    processData(state) {
      if (!state.rawData) {
        state.filteredData = null;
        return;
      }
      state.filteredData = state.rawData
        .map((item) : any => {
          const periodData = item.historicalData?.[state.selectedPeriod];

          // const serv = item.server?.[state.server]
          if (periodData) {
            return {
              ...item,
              // server: 
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
    },
    serverFil(state) {
      if (!state.filteredData) {
        state.filteredData = null;
        return;
      }
      state.filteredData = state.filteredData?.map((elem: any) => {
      
        const serv = elem.server?.[state.server]
        if(serv) {
          return {
            ...elem, 
            server: serv
          }
        }
      }
      )
    }
  },
});

export const { setRawData, setSelectedPeriod, setServerFilter, processData, serverFil } = metricsSlice.actions;

export default metricsSlice.reducer;
