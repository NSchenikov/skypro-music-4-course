import { createSlice } from '@reduxjs/toolkit'

const tracksSlice = createSlice({
  name: 'tracks',
  initialState: {
    tracks: [],
  },
  reducers: {
    nextTack(state, action) {},
    previousTrack(state, action) {},
  },
})

export const { nextTack, previousTrack } = tracksSlice.actions

export default tracksSlice.reducer
