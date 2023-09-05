import '../../components/player/player'
import Player from '../../components/player/player'
import Playlist from '../../components/playlist/playlist'
import MainNavMenu from '../../components/mainNavMenu/mainNavMenu'
import Search from '../../components/search/search'
import Filter from '../../components/filter/filter'
import Sidebar from '../../components/sidebar/sidebar'
import PlaylistSkeleton from '../../components/playlistSkeleton/playlistSkeleton'
import PlayerSkeleton from '../../components/playerSkeleton/playerSkeleton'
import SidebarSkeleton from '../../components/sidebarSkeleton/sidebarSkeleton'

import React from 'react'
import { useState, useEffect } from 'react'
import * as S from './index.style'

export const Main = () => {
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
