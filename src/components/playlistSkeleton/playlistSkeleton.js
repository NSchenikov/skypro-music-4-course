// import PlaylistItemSkeleton from '../playlistItemSkeleton/playlistItemSkeleton.js'
import * as S from './playlistSkeleton.style'

function PlaylistSkeleton() {
  return (
    <S.ContentPlaylist>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
        <S.PlaylistItem key={n}>
          <S.PlaylistTrack>
            <S.TrackTitle>
              <S.TrackTitleImageSkeleton />
              <S.TrackTitleTextSkeleton />
            </S.TrackTitle>
            <S.TrackAuthorSkeleton />
            <S.TrackAlbumSkeleton />
          </S.PlaylistTrack>
        </S.PlaylistItem>
      ))}
    </S.ContentPlaylist>
  )
}

export default PlaylistSkeleton
