import * as S from './playlistItem.style'

function PlaylistItem({
  trackTitle,
  trackTitleExtra,
  trackAuthor,
  trackAlbum,
  trackTime,
}) {
  return (
    <S.PlaylistItem>
      <S.PlaylistTrack>
        <S.TrackTitle>
          <S.TrackTitleImage>
            <S.TrackTitleSvg alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </S.TrackTitleSvg>
          </S.TrackTitleImage>
          <S.TrackTitleText>
            <S.TrackTitleLink href="http://">
              {trackTitle}
              <S.TrackTitleSpan>{trackTitleExtra}</S.TrackTitleSpan>
            </S.TrackTitleLink>
          </S.TrackTitleText>
        </S.TrackTitle>
        <S.TrackAuthor>
          <S.TrackAuthorLink href="http://">{trackAuthor}</S.TrackAuthorLink>
        </S.TrackAuthor>
        <S.TrackAlbum>
          <S.TrackAlbumLink href="http://">{trackAlbum}</S.TrackAlbumLink>
        </S.TrackAlbum>
        <S.TrackTime>
          <S.TrackTimeSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </S.TrackTimeSvg>
          <S.TrackTimeText>{trackTime}</S.TrackTimeText>
        </S.TrackTime>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  )
}

export default PlaylistItem
