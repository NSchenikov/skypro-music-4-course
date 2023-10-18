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
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

export const Layout = () => {
  const [tracks, setTracks] = useState([])
  const [myTracks, setMyTracks] = useState([])
  const [loading, setLoading] = useState(true)
  const [fetchTracksError, setFetchTracksError] = useState(null)
  let [isPlaying, setIsPlaying] = useState(false)
  const [likesIndexes, setLikesIndexes] = useState([])

  const navigate = useNavigate()

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

    getMyTracks(localStorage.user)
      .then((myTracks) => {
        setMyTracks(myTracks)
        // console.log(myTracks)
      })
      .then(() => setLoading(false))
      .catch((error) => {
        if (
          error.message === 'Данный токен недействителен для любого типа токена'
        ) {
          navigate('/login', { replace: true })
          return
        }
        setFetchTracksError(error.message)
        setLoading(false)
      })
  }, [])
  useEffect(() => {
    for (let myTrack of myTracks) {
      setLikesIndexes((likesIndexes) => [...likesIndexes, myTrack.id])
    }
    // console.log('все лайкнутые', likesIndexes)
  }, [myTracks])
  const currentTrk = useSelector((state) => state.trk)
  const [trackIndex, setTrackIndex] = useState(null)
  const [currentTrack, setCurrentTrack] = useState(currentTrk)
  const dispatch = useDispatch()
  const addSong = () => dispatch(setChoosedTrack(currentTrack))
  const addPlayList = () => {
    location.pathname === '/'
      ? dispatch(setPlaylist(tracks))
      : dispatch(setPlaylist(myTracks))
  }
  addSong()
  useEffect(() => {
    addPlayList()
  }, [currentTrack])
  const location = useLocation()
  return (
    <S.App>
      <S.GlobalStyle />
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <MainNavMenu />
            <S.MainCenterblock>
              <Search />
              <S.CenterblockH2>
                {location.pathname === '/' ? 'Треки' : 'Мои треки'}
              </S.CenterblockH2>
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
              myTracks={myTracks}
              setCurrentTrack={setCurrentTrack}
              trackIndex={trackIndex}
              setTrackIndex={setTrackIndex}
              location={location}
            />
          )}
          <S.Footer />
        </S.Container>
      </S.Wrapper>
    </S.App>
  )
}
