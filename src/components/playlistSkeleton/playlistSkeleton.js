import './playlistSkeleton.css'
import PlaylistItemSkeleton from '../playlistItemSkeleton/playlistItemSkeleton.js'

function PlaylistSkeleton() {
  return (
    <div className="content__playlist playlist">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
        <PlaylistItemSkeleton key={n} />
      ))}
    </div>
  )
}

export default PlaylistSkeleton
