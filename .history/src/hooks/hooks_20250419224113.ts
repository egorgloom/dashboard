

// import { useDispatch, useSelector } from 'react-redux'
// import type { AppDispatch, RootState } from '../store'


// // Use throughout your app instead of plain `useDispatch` and `useSelector`
// export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// export const useAppSelector = useSelector.withTypes<RootState>()
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { TypeRootState } from '../store';

export const useTypedSelector: TypedUseSelectorHook<TypeRootState> = () => useSelector((state: TypeRootState) => state);
