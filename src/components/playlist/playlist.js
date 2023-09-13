import * as S from './playlist.style'

function Playlist({ tracks }) {
  return (
    <S.ContentPlaylist>
      {tracks.map((track) => {
        return (
          <S.PlaylistItem key={track.id}>
            <S.PlaylistTrack>
              <S.TrackTitle>
                <S.TrackTitleImage>
                  <S.TrackTitleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </S.TrackTitleSvg>
                </S.TrackTitleImage>
                <S.TrackTitleText>
                  <S.TrackTitleLink href="http://">
                    {track.name}
                    <S.TrackTitleSpan>
                      {/* {trackTitleExtra} */}
                    </S.TrackTitleSpan>
                  </S.TrackTitleLink>
                </S.TrackTitleText>
              </S.TrackTitle>
              <S.TrackAuthor>
                <S.TrackAuthorLink href="http://">
                  {track.author}
                </S.TrackAuthorLink>
              </S.TrackAuthor>
              <S.TrackAlbum>
                <S.TrackAlbumLink href="http://">
                  {track.album}
                </S.TrackAlbumLink>
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
