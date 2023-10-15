import MainNavMenu from '../components/mainNavMenu/mainNavMenu'
import Search from '../components/search/search'
import Filter from '../components/filter/filter'
import Sidebar from '../components/sidebar/sidebar'
import SidebarSkeleton from '../components/sidebarSkeleton/sidebarSkeleton'
import PlayerSkeleton from '../components/playerSkeleton/playerSkeleton'
import Player from '../components/player/player'
import { getTracks, getMyTracks } from '../api'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setChoosedTrack, setPlaylist } from '../store/tracksSlice'
import * as S from './Main/index.style'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  const [tracks, setTracks] = useState([])
  const [myTracks, setMyTracks] = useState([])
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

    getMyTracks()
      .then((myTracks) => {
        setMyTracks(myTracks)
        console.log(myTracks)
      })
      .then(() => setLoading(false))
      .catch((error) => {
        setFetchTracksError(error.message)
        setLoading(false)
      })
  }, [])
  const currentTrk = useSelector((state) => state.trk)
  const [trackIndex, setTrackIndex] = useState(null)
  const [currentTrack, setCurrentTrack] = useState(currentTrk)
  const dispatch = useDispatch()
  const addSong = () => dispatch(setChoosedTrack(currentTrack))
  const addPlayList = () => dispatch(setPlaylist(tracks))
  addSong()
  useEffect(() => {
    addPlayList()
  }, [currentTrack])
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
                <Outlet
                  context={[
                    tracks,
                    setCurrentTrack,
                    currentTrack,
                    isPlaying,
                    setIsPlaying,
                    setTrackIndex,
                    fetchTracksError,
                    loading,
                    myTracks,
                    setMyTracks,
                  ]}
                />
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
