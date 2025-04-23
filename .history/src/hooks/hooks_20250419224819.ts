import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../store'

// Типизированный хук useDispatch
export const useAppDispatch: () => AppDispatch = useDispatch

// Типизированный хук useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector