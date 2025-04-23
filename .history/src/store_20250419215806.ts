import { configureStore  } from '@reduxjs/toolkit'

import { metricsSlice } from './API/metricsSlice'
import reducer from '../src/slice/filterSlice'
import { TypedUseSelectorHook, useSelector } from 'react-redux';




const store = configureStore({
reducer: {
      [metricsSlice.reducerPath]: metricsSlice.reducer,
      period: reducer,
      
},
middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(metricsSlice.middleware),
})


export default store;

export type TypeRootState = ReturnType<typeof store.getState>
// export const useTypedSelector: TypedUseSelectorHook<TypeRootState> = useSelector
