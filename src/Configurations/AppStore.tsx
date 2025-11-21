import { configureStore } from '@reduxjs/toolkit'
import localforage from 'localforage'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE
} from 'redux-persist'

import type { TReducers } from '@/Redux/Reducers.ts'
import reducers, { persistedReducers } from '@/Redux/Reducers.ts'
import { APP_TITLE, NODE_ENV } from './env'

const persistConfig = {
  key: APP_TITLE || 'APP_TITLE',
  version: 1,
  storage: localforage,
  whitelist: persistedReducers
}

const AppStore = configureStore({
  reducer: persistReducer<TReducers>(persistConfig, reducers),
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
