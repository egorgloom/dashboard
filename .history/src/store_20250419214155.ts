import { configureStore  } from '@reduxjs/toolkit'

import { metricsSlice } from './API/metricsSlice'
import filterReducer from '../src/slice/filterSlice'



const store = configureStore({
reducer: {
      [metricsSlice.reducerPath]: metricsSlice.reducer,
      period: filterReducer,
      
},
middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(metricsSlice.middleware),
})


export default store
