import { useState, useRef, useEffect, useCallback } from 'react'
import * as S from './player.style'

function Player({
  currentTrack,
  isPlaying,
  setIsPlaying,
  tracks,
  setCurrentTrack,
  trackIndex,
  setTrackIndex,
}) {
  if (!currentTrack) return null
  if (currentTrack) {
    const audioRef = useRef()
    const togglePlayPause = () => {
      setIsPlaying(() => !isPlaying)
    }
    useEffect(() => {
      if (isPlaying) {
        audioRef.current.play()
      } else {
        audioRef.current.pause()
      }
    }, [isPlaying, audioRef])
    const progressBarRef = useRef()
    const handleProgressChange = () => {
      audioRef.current.currentTime = progressBarRef.current.value
    }
    const [timeProgress, setTimeProgress] = useState(0)
    const [duration, setDuration] = useState(0)
    const onLoadedMetadata = () => {
      const seconds = audioRef.current.duration
      setDuration(seconds)
      progressBarRef.current.max = seconds
    }
    const formatTime = (time) => {
      if (time && !isNaN(time)) {
        const minutes = Math.floor(time / 60)
        const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
        const seconds = Math.floor(time % 60)
        const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`
        return `${formatMinutes}:${formatSeconds}`
      }
      return '00:00'
    }
    const playAnimationRef = useRef()

    const repeat = useCallback(() => {
      const currentTime = audioRef.current.currentTime
      setTimeProgress(currentTime)
      progressBarRef.current.value = currentTime
      progressBarRef.current.style.setProperty(
        '--range-progress',
        `${(progressBarRef.current.value / duration) * 100}%`,
      )

      playAnimationRef.current = requestAnimationFrame(repeat)
    }, [audioRef, duration, progressBarRef, setTimeProgress])
    useEffect(() => {
      if (isPlaying) {
        audioRef.current.play()
      } else {
        audioRef.current.pause()
      }
      playAnimationRef.current = requestAnimationFrame(repeat)
    }, [isPlaying, audioRef, repeat])
    const [volume, setVolume] = useState(60)
    useEffect(() => {
      if (audioRef) {
        audioRef.current.volume = volume / 100
      }
    }, [volume, audioRef])
    let [isRepeating, setIsRepeating] = useState(false)
    const toggleRepeating = () => {
      audioRef.current.loop = !audioRef.current.loop
      setIsRepeating(!isRepeating)
    }
    const doesItRepeats = () => {
      if (isRepeating) {
        audioRef.current.loop = true
      } else {
        handleNext()
      }
    }
    const notRealized = () => {
      alert('Еще не реализовано')
    }

    const handlePrevious = () => {
      if (playShuffle) {
        shuffled()
      } else if (trackIndex === 0) {
        let lastTrackIndex = tracks.length - 1
        setTrackIndex(lastTrackIndex)
        setCurrentTrack(tracks[lastTrackIndex])
      } else {
        setTrackIndex((prev) => prev - 1)
        setCurrentTrack(tracks[trackIndex - 1])
      }
    }
    const handleNext = () => {
      if (playShuffle) {
        shuffled()
      } else if (trackIndex >= tracks.length - 1) {
        setTrackIndex(0)
        setCurrentTrack(tracks[0])
      } else {
        setTrackIndex((prev) => prev + 1)
        setCurrentTrack(tracks[trackIndex + 1])
      }
    }
    const [playShuffle, setIsPlayShuffle] = useState(false)
    const getRandomSong = (max) => {
      return Math.floor(Math.random() * max)
    }
    const shuffleOnChange = () => {
      setIsPlayShuffle(!playShuffle)
    }
    const shuffled = () => {
      if (playShuffle) {
        let ind = getRandomSong(tracks.length)
        setCurrentTrack(tracks[ind])
        // setTrackIndex(ind)
        trackIndex = ind
        console.log(
          `рандомный индекс${ind}, установленный индекс ${trackIndex}`,
        )
      }
      // else {
      //   handleNext()
      // }
    }
    return (
      <S.Bar>
        <S.BarContent>
          <S.Progress>
            <S.TimeCurrent>{formatTime(timeProgress)}</S.TimeCurrent>
            <S.BarPlayerProgress
              type="range"
              defaultValue="0"
              ref={progressBarRef}
              onChange={handleProgressChange}
            />
            <S.Time>{formatTime(duration)}</S.Time>
          </S.Progress>
          <S.BarPlayerBlock>
            <S.BarPlayer>
              <S.PlayerControls>
                <S.PlayerBtnPrev onClick={handlePrevious}>
                  <S.PlayerBtnPrevSvg alt="prev">
                    <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                  </S.PlayerBtnPrevSvg>
                </S.PlayerBtnPrev>
                {isPlaying ? (
                  <S.PlayerBtnPlay
                    audioRef={audioRef}
                    onClick={togglePlayPause}
                    className="_btn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="19"
                      viewBox="0 0 15 19"
                      fill="none"
                    >
                      <rect width="5" height="19" fill="#D9D9D9" />
                      <rect x="10" width="5" height="19" fill="#D9D9D9" />
                    </svg>
                  </S.PlayerBtnPlay>
                ) : (
                  <S.PlayerBtnPlay onClick={togglePlayPause} className="_btn">
                    {' '}
                    <S.PlayerBtnPlaySvg alt="play">
                      <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                    </S.PlayerBtnPlaySvg>
                  </S.PlayerBtnPlay>
                )}
                <S.PlayerBtnNext onClick={handleNext}>
                  <S.PlayerBtnNextSvg alt="next">
                    <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                  </S.PlayerBtnNextSvg>
                </S.PlayerBtnNext>
                {isRepeating ? (
                  <S.PlayerBtnRepeat
                    onClick={toggleRepeating}
                    audioRef={audioRef}
                    className="_btn-icon"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="19"
                      viewBox="0 0 20 19"
                      fill="none"
                    >
                      <path
                        d="M10.0005 3.70312L5.00049 0.816374V6.58988L10.0005 3.70312ZM7.00049 15.2031C3.96292 15.2031 1.50049 12.7407 1.50049 9.70312H0.500488C0.500488 13.293 3.41064 16.2031 7.00049 16.2031V15.2031ZM1.50049 9.70312C1.50049 6.66556 3.96292 4.20312 7.00049 4.20312V3.20312C3.41064 3.20312 0.500488 6.11327 0.500488 9.70312H1.50049Z"
                        fill="white"
                      />
                      <path
                        d="M10.0005 15.7031L15.0005 18.5899V12.8164L10.0005 15.7031ZM13.0005 4.20312C16.0381 4.20312 18.5005 6.66556 18.5005 9.70312H19.5005C19.5005 6.11327 16.5903 3.20312 13.0005 3.20312V4.20312ZM18.5005 9.70312C18.5005 12.7407 16.0381 15.2031 13.0005 15.2031V16.2031C16.5903 16.2031 19.5005 13.293 19.5005 9.70312H18.5005Z"
                        fill="white"
                      />
                    </svg>
                  </S.PlayerBtnRepeat>
                ) : (
                  <S.PlayerBtnRepeat
                    onClick={toggleRepeating}
                    audioRef={audioRef}
                    className="_btn-icon"
                  >
                    <S.PlayerBtnRepeatSvg alt="repeat">
                      <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                    </S.PlayerBtnRepeatSvg>
                  </S.PlayerBtnRepeat>
                )}
                {playShuffle ? (
                  <S.PlayerBtnShuffle
                    onClick={shuffleOnChange}
                    className="_btn-icon"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                    >
                      <path
                        d="M19.0005 15.7031L14.0005 12.8164V18.5899L19.0005 15.7031ZM9.66366 12.7864L9.20912 12.9947L9.66366 12.7864ZM6.83732 6.61985L6.38279 6.82818L6.83732 6.61985ZM0.000488281 4.20312H2.292V3.20312H0.000488281V4.20312ZM6.38279 6.82818L9.20912 12.9947L10.1182 12.5781L7.29185 6.41152L6.38279 6.82818ZM14.209 16.2031H14.5005V15.2031H14.209V16.2031ZM9.20912 12.9947C10.1052 14.9497 12.0584 16.2031 14.209 16.2031V15.2031C12.4494 15.2031 10.8513 14.1776 10.1182 12.5781L9.20912 12.9947ZM2.292 4.20312C4.05153 4.20312 5.64967 5.22864 6.38279 6.82818L7.29185 6.41152C6.39582 4.45654 4.44254 3.20312 2.292 3.20312V4.20312Z"
                        fill="white"
                      />
                      <path
                        d="M19.0005 3.70312L14.0005 6.58988V0.816374L19.0005 3.70312ZM9.66366 6.61985L9.20912 6.41152L9.66366 6.61985ZM6.83732 12.7864L6.38279 12.5781L6.83732 12.7864ZM0.000488281 15.2031H2.292V16.2031H0.000488281V15.2031ZM6.38279 12.5781L9.20912 6.41152L10.1182 6.82818L7.29185 12.9947L6.38279 12.5781ZM14.209 3.20312H14.5005V4.20312H14.209V3.20312ZM9.20912 6.41152C10.1052 4.45654 12.0584 3.20312 14.209 3.20312V4.20312C12.4494 4.20312 10.8513 5.22864 10.1182 6.82818L9.20912 6.41152ZM2.292 15.2031C4.05153 15.2031 5.64967 14.1776 6.38279 12.5781L7.29185 12.9947C6.39582 14.9497 4.44254 16.2031 2.292 16.2031V15.2031Z"
                        fill="white"
                      />
                    </svg>
                  </S.PlayerBtnShuffle>
                ) : (
                  <S.PlayerBtnShuffle
                    onClick={shuffleOnChange}
                    className="_btn-icon"
                  >
                    <S.PlayerBtnShuffleSvg alt="shuffle">
                      <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                    </S.PlayerBtnShuffleSvg>
                  </S.PlayerBtnShuffle>
                )}
              </S.PlayerControls>

              <S.PlayerTrackPlay>
                <S.TrackPlayContain>
                  <S.TrackPlayImage>
                    <S.TrackPlaySvg alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </S.TrackPlaySvg>
                  </S.TrackPlayImage>
                  <S.TrackPlayAuthor>
                    <S.PlayAuthorLink href="http://">
                      {currentTrack.name}
                    </S.PlayAuthorLink>
                  </S.TrackPlayAuthor>
                  <S.TrackPlayAlbum>
                    <S.TrackPlayAlbumLink href="http://">
                      {currentTrack.author}
                    </S.TrackPlayAlbumLink>
                  </S.TrackPlayAlbum>
                  <audio
                    src={currentTrack.track_file}
                    ref={audioRef}
                    onLoadedMetadata={onLoadedMetadata}
                    onEnded={() => {
                      doesItRepeats()
                      shuffled()
                    }}
                  ></audio>
                </S.TrackPlayContain>

                <S.TrackPlayLikeDis>
                  <S.TrackPlayLike className="_btn-icon">
                    <S.TrackPlayLikeSvg alt="like">
                      <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    </S.TrackPlayLikeSvg>
                  </S.TrackPlayLike>
                  <S.TrackPlayDislike className="_btn-icon">
                    <S.TrackPlayDislikeSvg alt="dislike">
                      <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                    </S.TrackPlayDislikeSvg>
                  </S.TrackPlayDislike>
                </S.TrackPlayLikeDis>
              </S.PlayerTrackPlay>
            </S.BarPlayer>
            <S.BarVolumeBlock>
              <S.VolumeContent>
                <S.VolumeImage>
                  <S.VolumeSvg alt="volume">
                    <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                  </S.VolumeSvg>
                </S.VolumeImage>
                <S.VolumeProgress className="_btn">
                  <S.VolumeProgressLine
                    className="_btn"
                    type="range"
                    name="range"
                    min={0}
                    max={100}
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                  />
                </S.VolumeProgress>
              </S.VolumeContent>
            </S.BarVolumeBlock>
          </S.BarPlayerBlock>
        </S.BarContent>
      </S.Bar>
    )
  }
}

export default Player
