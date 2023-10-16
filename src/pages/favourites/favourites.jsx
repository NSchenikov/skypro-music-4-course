import Playlist from '../../components/playlist/playlist'
import { useOutletContext } from 'react-router-dom'
export const Favourites = () => {
  const [
    tracks,
    setCurrentTrack,
    currentTrack,
    isPlaying,
    setIsPlaying,
    setTrackIndex,
    fetchTracksError,
    loading,
    myTracks,
    setMyTracks,
  ] = useOutletContext()
  return (
    <>
      {myTracks ? (
        <Playlist
          tracks={myTracks}
          setCurrentTrack={setCurrentTrack}
          currentTrack={currentTrack}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          setTrackIndex={setTrackIndex}
        />
      ) : (
        <div style={{ textAlign: 'start' }}>В этом плейлисте нет треков</div>
      )}
    </>
  )
}
