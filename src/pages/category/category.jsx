import { useParams } from 'react-router-dom'
import { categories } from '../../components/sidebar/sidebar'
import Playlist from '../../components/playlist/playlist'
import { useOutletContext } from 'react-router-dom'
import { useEffect } from 'react'

export const Category = () => {
  const params = useParams()
  const favorite = categories.find((id) => id === Number(params.id))
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
    isSorted,
    setIsSorted,
    sortedTracks,
    setSortedTracks,
  ] = useOutletContext()
  useEffect(() => {
    pushCategory()
  }, [])
  return (
    // <div>
    //   <h1>CategoryPage {favorite}</h1>
    // </div>
    <>
      {categoryTracks ? (
        <Playlist
          tracks={categoryTracks}
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
      ) : (
        <div style={{ textAlign: 'start' }}>В этом плейлисте нет треков</div>
      )}
    </>
  )
}
