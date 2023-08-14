import './sidebarSkeleton.css'

function SidebarSkeleton() {
  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">Sergey.Ivanov</p>
        <div className="sidebar__icon">
          <svg alt="logout" className="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
        </div>
      </div>
      <div className="sidebar__block">
        <div className="sidebar__list">
          <div className="sidebar__item">
            <div className="sidebar__img-skeleton" />
          </div>
          <div className="sidebar__item">
            <div className="sidebar__img-skeleton" />
          </div>
          <div className="sidebar__item">
            <div className="sidebar__img-skeleton" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SidebarSkeleton
