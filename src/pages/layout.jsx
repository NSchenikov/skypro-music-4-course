import MainNavMenu from '../components/mainNavMenu/mainNavMenu'
import Search from '../components/search/search'
import Filter from '../components/filter/filter'
import Sidebar from '../components/sidebar/sidebar'
import SidebarSkeleton from '../components/sidebarSkeleton/sidebarSkeleton'
import PlayerSkeleton from '../components/playerSkeleton/playerSkeleton'
import Player from '../components/player/player'
import { getTracks, getMyTracks, sendLike, sendDislike } from '../api'
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
  const [isSorted, setIsSorted] = useState(false)
  const [sortedTracks, setSortedTracks] = useState([])
  const [saveTracks, setSaveTracks] = useState([])

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
        getLikesIndxes()
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
  const getLikesIndxes = () => {
    for (let myTrack of myTracks) {
      setLikesIndexes((likesIndexes) => [...likesIndexes, myTrack.id])
    }
    let outputArray = []
    let count = 0
    let start = false
    for (let j = 0; j < likesIndexes.length; j++) {
      for (let k = 0; k < outputArray.length; k++) {
        if (likesIndexes[j] == outputArray[k]) {
          start = true
        }
      }
      count++
      if (count == 1 && start == false) {
        outputArray.push(likesIndexes[j])
      }
      start = false
      count = 0
      setLikesIndexes(outputArray)
    }
  }
  useEffect(() => {
    getLikesIndxes()
  }, [myTracks])
  // sendLike(localStorage.user, 29).then((res) => console.log(res))
  const currentTrk = useSelector((state) => state.trk)
  const [trackIndex, setTrackIndex] = useState(null)
  const [currentTrack, setCurrentTrack] = useState(currentTrk)
  const dispatch = useDispatch()
  const addSong = () => dispatch(setChoosedTrack(currentTrack))
  addSong()
  const location = useLocation()
  let [categoryTracks, setCategoryTracks] = useState([])
  const findCategoryTracks = (categoryName) => {
    // categoryTracks = tracks.filter((el) => el.genre === categoryName)
    setCategoryTracks(saveTracks.filter((el) => el.genre === categoryName))
  }
  const pushCategory = () => {
    switch (location.pathname) {
      case '/category/1':
        // setCategoryTracks(findCategoryTracks('Классическая музыка'))
        findCategoryTracks('Классическая музыка')
        break
      case '/category/2':
        // setCategoryTracks(findCategoryTracks('Электронная музыка'))
        findCategoryTracks('Электронная музыка')
        break
      case '/category/3':
        // setCategoryTracks(findCategoryTracks('Рок музыка'))
        findCategoryTracks('Рок музыка')
        break
      // default:
      //   null
    }
  }
  useEffect(() => {
    pushCategory()
    // console.log('category', categoryTracks)
  }, [])
  useEffect(() => {
    pushCategory()
    // console.log('category', categoryTracks)
  }, [location])

  // console.log(categoryTracks)

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
                {location.pathname === '/'
                  ? 'Треки'
                  : location.pathname === '/favourites'
                  ? 'Мои треки'
                  : location.pathname === '/category/1'
                  ? 'Классическая музыка'
                  : location.pathname === '/category/2'
                  ? 'Электронная музыка'
                  : 'Рок музыка'}
              </S.CenterblockH2>
              <Filter
                tracks={tracks}
                setTracks={setTracks}
                myTracks={myTracks}
                setMyTracks={setMyTracks}
                dispatch={dispatch}
                categoryTracks={categoryTracks}
                setCategoryTracks={setCategoryTracks}
                location={location}
                isSorted={isSorted}
                setIsSorted={setIsSorted}
                sortedTracks={sortedTracks}
                setSortedTracks={setSortedTracks}
                saveTracks={saveTracks}
                setSaveTracks={setSaveTracks}
              />
              <S.CenterblockContent>
                <S.ContentTitle>
                  <S.Col01>Трек</S.Col01>
                  <S.Col02>ИСПОЛНИТЕЛЬ</S.Col02>
                  <S.Col03>АЛЬБОМ</S.Col03>
                  <S.Col04>
                    <S.PlaylistTitleSvg alt="time">
                      <use xlinkHref="/img/icon/sprite.svg#icon-watch"></use>
                    </S.PlaylistTitleSvg>
                  </S.Col04>
                </S.ContentTitle>
                <Outlet
                  context={[
                    tracks,
                    setTracks,
                    setCurrentTrack,
                    currentTrack,
                    isPlaying,
                    setIsPlaying,
                    setTrackIndex,
                    trackIndex,
                    fetchTracksError,
                    loading,
                    myTracks,
                    setMyTracks,
                    location,
                    likesIndexes,
                    setLikesIndexes,
                    categoryTracks,
                    pushCategory,
                    isSorted,
                    setIsSorted,
                    sortedTracks,
                    setSortedTracks,
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
              setTracks={setTracks}
              myTracks={myTracks}
              setMyTracks={setMyTracks}
              setCurrentTrack={setCurrentTrack}
              trackIndex={trackIndex}
              setTrackIndex={setTrackIndex}
              location={location}
              likesIndexes={likesIndexes}
              setLikesIndexes={setLikesIndexes}
            />
          )}
          <S.Footer />
        </S.Container>
      </S.Wrapper>
    </S.App>
  )
}
