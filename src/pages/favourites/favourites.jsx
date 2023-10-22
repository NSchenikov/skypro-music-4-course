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
    fetchTracksError,
    loading,
    myTracks,
    setMyTracks,
    location,
    likesIndexes,
    setLikesIndexes,
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
          location={location}
          likesIndexes={likesIndexes}
          setLikesIndexes={setLikesIndexes}
        />
      ) : (
        <div style={{ textAlign: 'start' }}>В этом плейлисте нет треков</div>
      )}
    </>
  )
}
