import React, { useState, useEffect } from 'react'
import { setChoosedTrack, setPlaylist } from '../../store/tracksSlice'
import { useSelector } from 'react-redux'
import * as S from './filter.style'

// const S. = styled.div``

function Filter({
  tracks,
  setTracks,
  myTracks,
  setMyTracks,
  dispatch,
  categoryTracks,
  setCategoryTracks,
  location,
  isSorted,
  setIsSorted,
  sortedTracks,
  setSortedTracks,
}) {
  const [visibleFilter, setVisibleFilter] = useState(null)
  let nonUniqueAuthors = []
  // let years = ['По умолчанию', 'Сначала новые', 'Сначала старые']
  let nonUniqueGenres = []
  let nonUniqueYearsData = []

  const getUniqueValues = (array) => {
    function onlyUnique(value, index, array) {
      return array.indexOf(value) === index
    }

    return array.filter(onlyUnique)
  }

  const getAuthors = (initialArr, newArr) => {
    for (let initialAr of initialArr) {
      newArr.push(initialAr.author)
    }

    return getUniqueValues(newArr)
  }

  const getGenres = (initialArr, newArr) => {
    for (let initialAr of initialArr) {
      newArr.push(initialAr.genre)
    }

    return getUniqueValues(newArr)
  }

  // const getYearsData = (initialArr, newArr) => {
  //   for (initialArr of Object.entries(initialArr)[0][1]) {
  //     newArr.push(initialArr.release_date)
  //   }

  //   return newArr
  // }

  // const sortTracksByReleaseDateFromEarly = (arr) => {
  //   arr.sort((a, b) => {
  //     let aa = a.split('-').reverse().join(),
  //       bb = b.split('-').reverse().join()
  //     return aa < bb ? -1 : aa > bb ? 1 : 0
  //   })
  // }

  let authors = getAuthors(tracks, nonUniqueAuthors)
  let genres = getGenres(tracks, nonUniqueGenres)
  // let yearsData = getYearsData(tracks, nonUniqueYearsData)
  // console.log(sortTracksByReleaseDateFromEarly(yearsData))

  // console.log(tracks)
  const sortDown = () => {
    let sorted
    if (location.pathname === '/') {
      sorted = [...tracks]
    } else if (location.pathname === '/favourites') {
      sorted = [...myTracks]
    } else {
      sorted = [...categoryTracks]
    }
    // console.log(sorted)
    sorted.sort((a, b) => {
      const aa = new Date(a.release_date)
      const bb = new Date(b.release_date)
      return bb - aa
    })

    if (location.pathname === '/') {
      setTracks(sorted)
    } else if (location.pathname === '/favourites') {
      setMyTracks(sorted)
    } else {
      setCategoryTracks(sorted)
    }
    dispatch(setPlaylist(sorted))

    setSortedTracks(sorted)
    setIsSorted(true)
  }

  const sortUp = () => {
    let sorted
    if (location.pathname === '/') {
      sorted = [...tracks]
    } else if (location.pathname === '/favourites') {
      sorted = [...myTracks]
    } else {
      sorted = [...categoryTracks]
    }
    // console.log(sorted)
    sorted.sort((a, b) => {
      const aa = new Date(a.release_date)
      const bb = new Date(b.release_date)
      return aa - bb
    })
    if (location.pathname === '/') {
      setTracks(sorted)
    } else if (location.pathname === '/favourites') {
      setMyTracks(sorted)
    } else {
      setCategoryTracks(sorted)
    }
    dispatch(setPlaylist(sorted))

    setSortedTracks(sorted)
    setIsSorted(true)
  }

  const sortDefault = () => {
    let sorted
    if (location.pathname === '/') {
      sorted = [...tracks]
    } else if (location.pathname === '/favourites') {
      sorted = [...myTracks]
    } else {
      sorted = [...categoryTracks]
    }
    // console.log(sorted)
    sorted.sort((a, b) => {
      const aa = new Date(a.id)
      const bb = new Date(b.id)
      return aa - bb
    })
    if (location.pathname === '/') {
      setTracks(sorted)
    } else if (location.pathname === '/favourites') {
      setMyTracks(sorted)
    } else {
      setCategoryTracks(sorted)
    }
    dispatch(setPlaylist(sorted))

    setSortedTracks(sorted)
    setIsSorted(true)
  }

  const toggleVisibleFilter = (filter) => {
    setVisibleFilter(visibleFilter === filter ? null : filter)
  }

  // let authors = [
  //   'Nero',
  //   'Dynoro',
  //   'Outwork',
  //   'Mr. Gee',
  //   'Ali Bakgor',
  //   'Стоункат',
  //   'Psychopath',
  //   'Jaded',
  //   'Will Clarke',
  //   'AR/CO',
  //   'Blue Foundation',
  //   'Zeds Dead',
  //   'HYBIT',
  //   'Mr. Black',
  //   'Offer Nissim',
  //   'Hi Profile',
  //   'minthaze',
  //   'Calvin Harris',
  //   'Disciples',
  //   'Tom Boxer',
  // ]

  // let years = ['1994', '1995', '2000']

  // let genres = ['rock', 'rap', 'hip-hop', 'electronic', 'house', 'techno']

  return (
    <S.CenterblockFilter>
      <S.FilterTitle>Искать по:</S.FilterTitle>

      <S.FilterButton
        className="_btn-text"
        onClick={() => toggleVisibleFilter('author')}
      >
        исполнителю
      </S.FilterButton>
      {visibleFilter === 'author' && (
        <S.Popup $author>
          <S.PopupBox $author>
            {authors.map((item, i) => (
              <S.PopupLine key={i}>{item}</S.PopupLine>
            ))}
          </S.PopupBox>
        </S.Popup>
      )}
      <S.FilterButton
        className="_btn-text"
        onClick={() => toggleVisibleFilter('year')}
      >
        году выпуска
      </S.FilterButton>
      {visibleFilter === 'year' && (
        <S.Popup $year>
          <S.PopupBox $year>
            {/* {years.map((item, i) => (
              <S.PopupLine key={i}>{item}</S.PopupLine>
            ))} */}
            <S.PopupLine onClick={() => sortDefault()}>
              По умолчанию
            </S.PopupLine>
            <S.PopupLine onClick={() => sortDown()}>Сначала новые</S.PopupLine>
            <S.PopupLine onClick={() => sortUp()}>Сначала старые</S.PopupLine>
          </S.PopupBox>
        </S.Popup>
      )}
      <S.FilterButton
        className="_btn-text"
        onClick={() => toggleVisibleFilter('genre')}
      >
        жанру
      </S.FilterButton>
      {visibleFilter === 'genre' && (
        <S.Popup $genre>
          <S.PopupBox $genre>
            {genres.map((item, i) => (
              <S.PopupLine key={i}>{item}</S.PopupLine>
            ))}
          </S.PopupBox>
        </S.Popup>
      )}
    </S.CenterblockFilter>
  )
}

export default Filter
