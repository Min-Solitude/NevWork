import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit'

import { useDispatch } from 'react-redux'
import { managerActionReducer } from './managerAllMode/slice'

export const store = configureStore({
    reducer: {
       managerAction: managerActionReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
export type RootState = ReturnType<typeof store['getState']>
export type AppDispatch = typeof store['dispatch']
export const useAppDispatch: () => AppDispatch = useDispatch