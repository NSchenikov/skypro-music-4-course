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
import { getTracks } from '../../api'

export const Main = () => {
  const [tracks, setTracks] = useState([])
  const [loading, setLoading] = useState(true)
  const [fetchTracksError, setFetchTracksError] = useState(null)
  let [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    getTracks()
      .then((tracks) => {
        setTracks(tracks)
        // console.log(tracks)
      })
      .then(() => setLoading(false))
      .catch((error) => {
        setFetchTracksError(error.message)
        setLoading(false)
      })
  }, [])

  // const [currentTrack, setCurrentTrack] = useState(null)
  const [trackIndex, setTrackIndex] = useState(null)
  const [currentTrack, setCurrentTrack] = useState(tracks[0])

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
                <p style={{ color: 'red', position: 'relative' }}>
                  {fetchTracksError}
                </p>
                {loading && <PlaylistSkeleton />}
                {!loading && (
                  <Playlist
                    tracks={tracks}
                    setCurrentTrack={setCurrentTrack}
                    currentTrack={currentTrack}
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                    setTrackIndex={setTrackIndex}
                  />
                )}
              </S.CenterblockContent>
            </S.MainCenterblock>
            {loading && <SidebarSkeleton />}
            {!loading && <Sidebar />}
          </S.Main>

          {loading && <PlayerSkeleton />}
          {currentTrack && (
            <Player
              currentTrack={currentTrack}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              tracks={tracks}
              setCurrentTrack={setCurrentTrack}
              trackIndex={trackIndex}
              setTrackIndex={setTrackIndex}
            />
          )}

          <S.Footer />
        </S.Container>
      </S.Wrapper>
    </S.App>
  )
}
