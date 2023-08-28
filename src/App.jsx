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
import * as S from './index.style'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timerId = setInterval(() => setLoading(false), 5000)
    return () => {
      clearInterval(timerId)
    }
  })

  return (
    <S.App>
      <S.GlobalStyle />
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <MainNavMenu />
            <S.MainCenterblock>
              <Search />
              <S.CenterblockH2>Треки</S.CenterblockH2>
              <Filter />
              <S.CenterblockContent>
                <S.ContentTitle>
                  <S.Col01>Трек</S.Col01>
                  <S.Col02>ИСПОЛНИТЕЛЬ</S.Col02>
                  <S.Col03>АЛЬБОМ</S.Col03>
                  <S.Col04>
                    <S.PlaylistTitleSvg alt="time">
                      <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
                    </S.PlaylistTitleSvg>
                  </S.Col04>
                </S.ContentTitle>
                {loading && <PlaylistSkeleton />}
                {!loading && <Playlist />}
              </S.CenterblockContent>
            </S.MainCenterblock>
            {loading && <SidebarSkeleton />}
            {!loading && <Sidebar />}
          </S.Main>

          {loading && <PlayerSkeleton />}
          {!loading && <Player />}

          <S.Footer />
        </S.Container>
      </S.Wrapper>
    </S.App>
  )
}

export default App
