import * as S from '../playlistItem/playlistItem.style'
import * as Styled from './playlistItemSkeleton.style'

function PlaylistItemSkeleton() {
  return (
    <S.PlaylistItem>
      <S.PlaylistTrack>
        <S.TrackTitle>
          <Styled.TrackTitleImageSkeleton />
          <Styled.TrackTitleTextSkeleton />
        </S.TrackTitle>
        <Styled.TrackAuthorSkeleton />
        <Styled.TrackAlbumSkeleton />
      </S.PlaylistTrack>
    </S.PlaylistItem>
  )
}

export default PlaylistItemSkeleton
