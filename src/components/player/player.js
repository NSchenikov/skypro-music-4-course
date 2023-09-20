import { useState, useRef, useEffect, useCallback } from 'react'
import * as S from './player.style'

function Player(currentTrack) {
  if (!currentTrack) return null
  if (currentTrack) {
    const [isPlaying, setIsPlaying] = useState(false)
    const audioRef = useRef()
    const togglePlayPause = () => {
      setIsPlaying((prev) => !prev)
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
                <S.PlayerBtnPrev>
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
                    <S.PlayerBtnPlaySvg alt="play">
                      <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                    </S.PlayerBtnPlaySvg>
                  </S.PlayerBtnPlay>
                )}
                <S.PlayerBtnNext>
                  <S.PlayerBtnNextSvg alt="next">
                    <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                  </S.PlayerBtnNextSvg>
                </S.PlayerBtnNext>
                <S.PlayerBtnRepeat className="_btn-icon">
                  <S.PlayerBtnRepeatSvg alt="repeat">
                    <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                  </S.PlayerBtnRepeatSvg>
                </S.PlayerBtnRepeat>
                <S.PlayerBtnShuffle className="_btn-icon">
                  <S.PlayerBtnShuffleSvg alt="shuffle">
                    <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                  </S.PlayerBtnShuffleSvg>
                </S.PlayerBtnShuffle>
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
                      {currentTrack.currentTrack.name}
                    </S.PlayAuthorLink>
                  </S.TrackPlayAuthor>
                  <S.TrackPlayAlbum>
                    <S.TrackPlayAlbumLink href="http://">
                      {currentTrack.currentTrack.author}
                    </S.TrackPlayAlbumLink>
                  </S.TrackPlayAlbum>
                  <audio
                    src={currentTrack.currentTrack.track_file}
                    ref={audioRef}
                    onLoadedMetadata={onLoadedMetadata}
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
