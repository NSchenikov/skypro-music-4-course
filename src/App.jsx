import logo from './logo.svg'
import './App.css'
import '../src/components/player/player.js'
import Player from '../src/components/player/player.js'
import Playlist from './components/playlist/playlist.js'

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <main className="main">
            <nav className="main__nav nav">
              <div className="nav__logo logo">
                <img className="logo__image" src="img/logo.png" alt="logo" />
              </div>
              <div className="nav__burger burger">
                <span className="burger__line"></span>
                <span className="burger__line"></span>
                <span className="burger__line"></span>
              </div>
              <div className="nav__menu menu">
                <ul className="menu__list">
                  <li className="menu__item">
                    <a href="#" className="menu__link">
                      Главное
                    </a>
                  </li>
                  <li className="menu__item">
                    <a href="#" className="menu__link">
                      Мой плейлист
                    </a>
                  </li>
                  <li className="menu__item">
                    <a href="../signin.html" className="menu__link">
                      Войти
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="main__centerblock centerblock">
              <div className="centerblock__search search">
                <svg className="search__svg">
                  <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
                </svg>
                <input
                  className="search__text"
                  type="search"
                  placeholder="Поиск"
                  name="search"
                />
              </div>
              <h2 className="centerblock__h2">Треки</h2>
              <div className="centerblock__filter filter">
                <div className="filter__title">Искать по:</div>
                <div className="filter__button button-author _btn-text">
                  исполнителю
                </div>
                <div className="filter__button button-year _btn-text">
                  году выпуска
                </div>
                <div className="filter__button button-genre _btn-text">
                  жанру
                </div>
              </div>
              <div className="centerblock__content">
                <div className="content__title playlist-title">
                  <div className="playlist-title__col col01">Трек</div>
                  <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
                  <div className="playlist-title__col col03">АЛЬБОМ</div>
                  <div className="playlist-title__col col04">
                    <svg className="playlist-title__svg" alt="time">
                      <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
                    </svg>
                  </div>
                </div>
                <Playlist />
              </div>
            </div>
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
                    <a className="sidebar__link" href="#">
                      <img
                        className="sidebar__img"
                        src="img/playlist01.png"
                        alt="day's playlist"
                      />
                    </a>
                  </div>
                  <div className="sidebar__item">
                    <a className="sidebar__link" href="#">
                      <img
                        className="sidebar__img"
                        src="img/playlist02.png"
                        alt="day's playlist"
                      />
                    </a>
                  </div>
                  <div className="sidebar__item">
                    <a className="sidebar__link" href="#">
                      <img
                        className="sidebar__img"
                        src="img/playlist03.png"
                        alt="day's playlist"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <Player />

          <footer className="footer"></footer>
        </div>
      </div>
    </div>
  )
}

export default App
