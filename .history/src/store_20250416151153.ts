import { configureStore  } from '@reduxjs/toolkit'

import { metricsSlice } from './API/metricsSlice'



const store = configureStore({
reducer: {
      [metricsSlice.reducerPath]: metricsSlice.reducer,
      
},
middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(metricsSlice.middleware),
})


export default store
