import Playlist from '../../components/playlist/playlist'
import { useOutletContext } from 'react-router-dom'
export const Favourites = () => {
  const [
    myTracks,
    setMyTracks,
    setCurrentTrack,
    currentTrack,
    isPlaying,
    setIsPlaying,
    setTrackIndex,
  ] = useOutletContext()
  // console.log(myTracks)
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
