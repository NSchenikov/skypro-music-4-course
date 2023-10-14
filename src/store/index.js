import { configureStore } from '@reduxjs/toolkit'
import trackReducer from './tracksSlice'

export default configureStore({
  reducer: {
    track: trackReducer,
  },
})
