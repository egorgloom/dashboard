import { configureStore } from '@reduxjs/toolkit'



const store = configureStore({
reducer: {
      [metricsSlice.reducerPath] = metricsSlice.reducer,
      middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(JsonServerSlice.middleware),
}
})

export default store
