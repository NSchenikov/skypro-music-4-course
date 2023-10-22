import { setPlaylist } from '../../store/tracksSlice'
import { useDispatch } from 'react-redux'
import * as S from './playlist.style'

function Playlist({
  tracks,
  myTracks,
  setCurrentTrack,
  currentTrack,
  isPlaying,
  setIsPlaying,
  setTrackIndex,
  location,
}) {
  const dispatch = useDispatch()
  return (
    <S.ContentPlaylist>
      {tracks.map((track, index) => {
        return (
          <S.PlaylistItem key={track.id}>
            <S.PlaylistTrack>
              <S.TrackTitle>
                <S.TrackTitleImage
                  alt="music"
                  key={track.id}
                  onClick={(event) => {
                    setCurrentTrack(track)
                    isPlaying = true
                    setIsPlaying(isPlaying)
                    setTrackIndex(index)
                    // if (event.target && location.pathname === '/favourites') {
                    //   setPlaylistChange((pr) => pr)
                    // }
                    // if (event.target && location.pathname === '/') {
                    //   setPlaylistChange((pr) => !pr)
                    // }

                    location.pathname === '/'
                      ? dispatch(setPlaylist(tracks))
                      : dispatch(setPlaylist(myTracks))
                  }}
                >
                  {currentTrack === track ? (
                    <S.PlayingDot
                      style={{
                        animationPlayState: isPlaying ? 'running' : 'paused',
                      }}
                    ></S.PlayingDot>
                  ) : (
                    <S.TrackTitleSvg>
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </S.TrackTitleSvg>
                  )}
                </S.TrackTitleImage>
                <S.TrackTitleText>
                  <S.TrackTitleLink>
                    {track.name}
                    <S.TrackTitleSpan>
                      {/* {trackTitleExtra} */}
                    </S.TrackTitleSpan>
                  </S.TrackTitleLink>
                </S.TrackTitleText>
              </S.TrackTitle>
              <S.TrackAuthor>
                <S.TrackAuthorLink>{track.author}</S.TrackAuthorLink>
              </S.TrackAuthor>
              <S.TrackAlbum>
                <S.TrackAlbumLink>{track.album}</S.TrackAlbumLink>
              </S.TrackAlbum>
              <S.TrackTime>
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </S.TrackTimeSvg>
                <S.TrackTimeText>
                  {Math.floor(track.duration_in_seconds / 60)}:
                  {track.duration_in_seconds % 60 >= 10
                    ? track.duration_in_seconds % 60
                    : '0' + (track.duration_in_seconds % 60)}
                </S.TrackTimeText>
              </S.TrackTime>
            </S.PlaylistTrack>
          </S.PlaylistItem>
        )
      })}
    </S.ContentPlaylist>
  )
}

export default Playlist
