import '../../components/player/player'
import Playlist from '../../components/playlist/playlist'
import PlaylistSkeleton from '../../components/playlistSkeleton/playlistSkeleton'
import React from 'react'
import { useOutletContext } from 'react-router-dom'

export const Main = () => {
  const [
    tracks,
    setCurrentTrack,
    currentTrack,
    isPlaying,
    setIsPlaying,
    setTrackIndex,
    fetchTracksError,
    loading,
    loaction,
    myTracks,
  ] = useOutletContext()

  return (
    <>
      <p style={{ color: 'red', position: 'relative' }}>{fetchTracksError}</p>
      {loading && <PlaylistSkeleton />}
      {!loading && (
        <Playlist
          tracks={tracks}
          myTracks={myTracks}
          setCurrentTrack={setCurrentTrack}
          currentTrack={currentTrack}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          setTrackIndex={setTrackIndex}
          location={location}
        />
      )}
    </>
  )
}
