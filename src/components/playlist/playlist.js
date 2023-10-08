import * as S from './playlist.style'

function Playlist({
  tracks,
  setCurrentTrack,
  currentTrack,
  isPlaying,
  setIsPlaying,
  setTrackIndex,
}) {
  // const trks = tracks
  // const newTracks = trks.map((obj) => {
  //   return {
  //     ...trks,
  //     isanimated: false,
  //   }
  // })
  return (
    <S.ContentPlaylist>
      {tracks.map((track, index) => {
        return (
          <S.PlaylistItem
            key={track.id}
            onClick={() => {
              setCurrentTrack(track)
              // setIsAnimate(true)
              isPlaying = true
              setIsPlaying(isPlaying)
              setTrackIndex(index)
              // track.isanimated = !track.isanimated
            }}
          >
            <S.PlaylistTrack>
              <S.TrackTitle>
                <S.TrackTitleImage>
                  {currentTrack === track ? (
                    <S.PlayingDot
                      style={{
                        animationPlayState: isPlaying ? 'running' : 'paused',
                      }}
                    ></S.PlayingDot>
                  ) : (
                    <S.TrackTitleSvg alt="music">
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
