import Playlist from '../../components/playlist/playlist'
import { useOutletContext } from 'react-router-dom'
export const Favourites = () => {
  const [
    tracks,
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
    // isSorted,
    // setIsSorted,
    // sortedTracks,
    // setSortedTracks,
  ] = useOutletContext()
  return (
    <>
      {myTracks ? (
        <Playlist
          tracks={myTracks}
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
          // isSorted={isSorted}
          // setIsSorted={setIsSorted}
          // sortedTracks={sortedTracks}
          // setSortedTracks={setSortedTracks}
        />
      ) : (
        <div style={{ textAlign: 'start' }}>В этом плейлисте нет треков</div>
      )}
    </>
  )
}
