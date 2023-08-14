import './playlistItemSkeleton.css'

function PlaylistItemSkeleton() {
  return (
    <div className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image-skeleton"></div>
          <div className="track__title-text-skeleton"></div>
        </div>
        <div className="track__author-skeleton"></div>
        <div className="track__album-skleleton"></div>
      </div>
    </div>
  )
}

export default PlaylistItemSkeleton
