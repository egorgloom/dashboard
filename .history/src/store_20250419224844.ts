import { configureStore  } from '@reduxjs/toolkit'

import { metricsSlice } from './API/metricsSlice'
import reducer from '../src/slice/filterSlice'




const store = configureStore({
reducer: {
      [metricsSlice.reducerPath]: metricsSlice.reducer,
      period: reducer,
      
},
middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(metricsSlice.middleware),
})

export type AppDispatch = typeof store.dispatch

// Типизация корневого состояния
export type RootState = ReturnType<typeof store.getState>

export default store;


