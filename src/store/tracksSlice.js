import { createSlice } from '@reduxjs/toolkit'

const trackSlice = createSlice({
  name: 'trks',
  initialState: {
    trk: [],
    playlist: [],
  },
  reducers: {
    setChoosedTrack(state, action) {
      // console.log(state)
      // console.log(action)

      state.trk[0] = {
        trackData: action.payload,
      }
    },
    setPlaylist(state, action) {
      state.playlist[0] = action.payload
    },
  },
})

export const { setChoosedTrack, setPlaylist } = trackSlice.actions

export default trackSlice.reducer
