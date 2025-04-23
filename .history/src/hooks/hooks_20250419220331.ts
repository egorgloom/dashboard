import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../root.reducer';

import { TypeRootState } from '../store';

// export const useTypedSelector: TypedUseSelectorHook<TypeRootState> = useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector