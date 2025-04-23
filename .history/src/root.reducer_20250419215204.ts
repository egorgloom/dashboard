import { combineReducers } from '@reduxjs/toolkit'
// import Notes from './notes/notes.slice'

import filterReducer from '../src/slice/filterSlice'

const rootReducer = combineReducers({
  period: filterReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
