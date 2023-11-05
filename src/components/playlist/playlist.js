import { useEffect } from 'react'
import { setPlaylist } from '../../store/tracksSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { sendLike, sendDislike, getMyTracks, getTracks } from '../../api'
import * as S from './playlist.style'

function Playlist({
  tracks,
  setTracks,
  myTracks,
  setMyTracks,
  setCurrentTrack,
  currentTrack,
  isPlaying,
  setIsPlaying,
  setTrackIndex,
  trackIndex,
  location,
  likesIndexes,
  setLikesIndexes,
  categoryTracks,
  isSorted,
  setIsSorted,
  sortedTracks,
  setSortedTracks,
}) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // useEffect(() => {
  //   for (let myTrack of myTracks) {
  //     setLikesIndexes((likesIndexes) => [...likesIndexes, myTrack.id])
  //   }
  //   // console.log('все лайкнутые', likesIndexes)
  // }, [myTracks])
  const findLike = (arr, item) => {
    if (Array.isArray(arr)) {
      let found = arr.find((element) => element === item)
      return found
    } else {
      console.log('Given data is not an array')
    }
  }
  // console.log('все лайкнутые', likesIndexes)
  const Liking = (id) => {
    sendLike(localStorage.user, id)
      .then((res) => {
        console.log(res)
        if (res.status === 401) {
          navigate('/login', { replace: true })
          return
        }
        getTracks().then((tracks) => {
          if (isSorted) {
            setTracks(sortedTracks)
          } else {
            setTracks(tracks)
          }
          // console.log(tracks)
        })
        getMyTracks(localStorage.user)
          .then((myTracks) => {
            if (isSorted) {
              setMyTracks(sortedTracks)
            } else {
              setMyTracks(myTracks)
            }
            // console.log(myTracks)
          })
          .then(() => {
            setLikesIndexes([...likesIndexes, id])
          })
      })
      .catch((error) => {
        if (
          error.message === 'Данный токен недействителен для любого типа токена'
        ) {
          navigate('/login', { replace: true })
          return
        }
        console.log(error)
        throw new Error(error)
      })
  }
  const Disliking = (id) => {
    sendDislike(localStorage.user, id)
      .then((res) => {
        console.log(res)
        if (res.status === 401) {
          navigate('/login', { replace: true })
          return
        }
        getTracks().then((tracks) => {
          if (isSorted) {
            setTracks(sortedTracks)
          } else {
            setTracks(tracks)
          }
          // console.log(tracks)
        })
        getMyTracks(localStorage.user)
          .then((myTracks) => {
            if (isSorted) {
              setMyTracks(sortedTracks)
            } else {
              setMyTracks(myTracks)
            }
            // console.log(myTracks)
          })
          .then(() => {
            let index = likesIndexes.indexOf(id)
            if (index > -1) {
              // setLikesIndexes(likesIndexes.splice(index, 1))
              likesIndexes.splice(index, 1)
            }
          })
      })
      .catch((error) => {
        if (
          error.message === 'Данный токен недействителен для любого типа токена'
        ) {
          navigate('/login', { replace: true })
          return
        }
        console.log(error)
        throw new Error(error)
      })
  }
  return (
    <S.ContentPlaylist>
      {tracks.map((track, index) => {
        return (
          <S.PlaylistItem key={track.id}>
            <S.PlaylistTrack>
              <S.TrackTitle>
                <S.TrackTitleImage
                  alt="music"
                  key={track.id}
                  onClick={() => {
                    setCurrentTrack(track)
                    isPlaying = true
                    setIsPlaying(isPlaying)
                    setTrackIndex(index)
                    location.pathname === '/'
                      ? dispatch(setPlaylist(tracks))
                      : location.pathname === '/favourites'
                      ? dispatch(setPlaylist(myTracks))
                      : dispatch(setPlaylist(categoryTracks))
                  }}
                >
                  {currentTrack === track ? (
                    <S.PlayingDot
                      style={{
                        animationPlayState: isPlaying ? 'running' : 'paused',
                      }}
                    ></S.PlayingDot>
                  ) : (
                    <S.TrackTitleSvg>
                      <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                    </S.TrackTitleSvg>
                  )}
                </S.TrackTitleImage>
                <S.TrackTitleText>
                  <S.TrackTitleLink>
                    {track.name}
                    <S.TrackTitleSpan>
                      {/* {trackTitleExtra} */}
                    </S.TrackTitleSpan>
                  </S.TrackTitleLink>
                </S.TrackTitleText>
              </S.TrackTitle>
              <S.TrackAuthor>
                <S.TrackAuthorLink>{track.author}</S.TrackAuthorLink>
              </S.TrackAuthor>
              <S.TrackAlbum>
                <S.TrackAlbumLink>{track.album}</S.TrackAlbumLink>
              </S.TrackAlbum>
              <S.TrackTime>
                {/* <S.TrackTimeSvg alt="time">
                  <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
                </S.TrackTimeSvg> */}
                {findLike(likesIndexes, track.id) ? (
                  <S.TrackTimeSvg
                    alt="time"
                    onClick={() => {
                      Disliking(track.id)
                      findLike(likesIndexes, track.id)
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="14"
                      viewBox="0 0 16 14"
                      fill="none"
                    >
                      <path
                        d="M8.10894 12.709C13.9894 9.20898 17.0547 3.9182 13.7001 1.47632C11.4999 -0.125251 9.04083 1.15074 8.10894 1.9647H8.08743H8.08737H8.06586C7.13397 1.15074 4.67486 -0.125251 2.47467 1.47632C-0.8799 3.9182 2.18537 9.20898 8.06586 12.709H8.08737H8.08743H8.10894Z"
                        fill="#B672FF"
                      />
                      <path
                        d="M8.08737 1.9647H8.10894C9.04083 1.15074 11.4999 -0.125251 13.7001 1.47632C17.0547 3.9182 13.9894 9.20898 8.10894 12.709H8.08737M8.08743 1.9647H8.06586C7.13397 1.15074 4.67486 -0.125251 2.47467 1.47632C-0.8799 3.9182 2.18537 9.20898 8.06586 12.709H8.08743"
                        stroke="#B672FF"
                      />
                    </svg>
                  </S.TrackTimeSvg>
                ) : (
                  <S.TrackTimeSvg
                    alt="time"
                    onClick={() => {
                      Liking(track.id)
                      findLike(likesIndexes, track.id)
                    }}
                  >
                    <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
                  </S.TrackTimeSvg>
                )}
                <S.TrackTimeText>
                  {Math.floor(track.duration_in_seconds / 60)}:
                  {track.duration_in_seconds % 60 >= 10
                    ? track.duration_in_seconds % 60
                    : '0' + (track.duration_in_seconds % 60)}
                </S.TrackTimeText>
              </S.TrackTime>
            </S.PlaylistTrack>
          </S.PlaylistItem>
        )
      })}
    </S.ContentPlaylist>
  )
}

export default Playlist
