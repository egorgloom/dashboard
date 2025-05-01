import { configureStore  } from '@reduxjs/toolkit'

import { metricsSlice } from './API/metricsSlice'
import  { reducer } from '../src/slice/filterSlice'




const store = configureStore({
reducer: {
      [metricsSlice.reducerPath]: metricsSlice.reducer,
      metrics: reducer,
      
},
middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(metricsSlice.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store;


