import { configureStore } from '@reduxjs/toolkit'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE
} from 'redux-persist'

import reducers from '@/Redux/Reducers.ts'
import { NODE_ENV } from './env'

const AppStore = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }),
  devTools: NODE_ENV !== 'production'
})

export const PersistedAppStore = persistStore(AppStore)

export default AppStore

export type TAppStore = ReturnType<typeof AppStore.getState>

export type TAppDispatch = typeof AppStore.dispatch
