import { configureStore } from '@reduxjs/toolkit'

import playerReducer from './features/playerSlice'
import { shazamCoreApi } from './services/shazamCore'
import { unsplashCoreApi } from './services/unsplashCore'

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    [unsplashCoreApi.reducerPath]: unsplashCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamCoreApi.middleware).concat(unsplashCoreApi.middleware),
})
