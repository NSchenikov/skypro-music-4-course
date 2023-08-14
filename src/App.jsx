import logo from './logo.svg'
import './App.css'
import '../src/components/player/player.js'
import Player from '../src/components/player/player.js'
import Playlist from './components/playlist/playlist.js'
import MainNavMenu from './components/mainNavMenu/mainNavMenu.js'
import Search from './components/search/search.js'
import Filter from './components/filter/filter.js'
import Sidebar from './components/sidebar/sidebar.js'
import PlaylistSkeleton from './components/playlistSkeleton/playlistSkeleton.js'
import PlayerSkeleton from './components/playerSkeleton/playerSkeleton.js'
import SidebarSkeleton from './components/sidebarSkeleton/sidebarSkeleton.js'

import React from 'react'
import { useState, useEffect } from 'react'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timerId = setInterval(() => setLoading(false), 5000)
    return () => {
      clearInterval(timerId)
    }
  })

  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <main className="main">
            <MainNavMenu />
            <div className="main__centerblock centerblock">
              <Search />
              <h2 className="centerblock__h2">Треки</h2>
              <Filter />
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
                {loading && <PlaylistSkeleton />}
                {!loading && <Playlist />}
              </div>
            </div>
            {loading && <SidebarSkeleton />}
            {!loading && <Sidebar />}
          </main>

          {loading && <PlayerSkeleton />}
          {!loading && <Player />}

          <footer className="footer"></footer>
        </div>
      </div>
    </div>
  )
}

export default App
