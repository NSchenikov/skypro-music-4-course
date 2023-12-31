import '../../components/player/player'
import Playlist from '../../components/playlist/playlist'
import PlaylistSkeleton from '../../components/playlistSkeleton/playlistSkeleton'
import React from 'react'
import { useOutletContext } from 'react-router-dom'

export const Main = () => {
  const [
    filteredTracks,
    setTracks,
    setCurrentTrack,
    currentTrack,
    isPlaying,
    setIsPlaying,
    setTrackIndex,
    trackIndex,
    fetchTracksError,
    loading,
    myTracks,
    setMyTracks,
    location,
    likesIndexes,
    setLikesIndexes,
    categoryTracks,
    pushCategory,
    isSorted,
    setIsSorted,
    sortedTracks,
    setSortedTracks,
  ] = useOutletContext()

  return (
    <>
      <p style={{ color: 'red', position: 'relative' }}>{fetchTracksError}</p>
      {loading && <PlaylistSkeleton />}
      {!loading && (
        <Playlist
          tracks={filteredTracks}
          setTracks={setTracks}
          myTracks={myTracks}
          setMyTracks={setMyTracks}
          setCurrentTrack={setCurrentTrack}
          currentTrack={currentTrack}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          setTrackIndex={setTrackIndex}
          trackIndex={trackIndex}
          location={location}
          likesIndexes={likesIndexes}
          setLikesIndexes={setLikesIndexes}
          categoryTracks={categoryTracks}
          isSorted={isSorted}
          setIsSorted={setIsSorted}
          sortedTracks={sortedTracks}
          setSortedTracks={setSortedTracks}
        />
      )}
    </>
  )
}
