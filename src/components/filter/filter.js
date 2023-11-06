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
  let nonUniqueGenres = []

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

  let authors = getAuthors(tracks, nonUniqueAuthors)
  let genres = getGenres(tracks, nonUniqueGenres)
  let chosenAuthors = []
  let chosenGenres = []

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

  const addChosenToArray = (array, item, callback) => {
    array.push(item)
    // console.log('done')
    callback()
  }

  const filterByGenres = (chosenGenres, array) => {
    let filtered = []
    for (let chosenGenre of chosenGenres) {
      for (let item of array) {
        if (chosenGenre.includes(item.genre)) {
          filtered.push(item)
        }
      }
    }
    console.log(filtered)
    setSortedTracks(filtered)
    sortedTracks = [...filtered]
    setIsSorted(true)
  }

  const filterByAuthors = (chosenAuthors, array) => {
    let filtered = []
    for (let chosenAuthor of chosenAuthors) {
      for (let item of array) {
        if (chosenAuthor.includes(item.author)) {
          filtered.push(item)
        }
      }
    }
    console.log(filtered)
    setSortedTracks(filtered)
    sortedTracks = [...filtered]
    setIsSorted(true)
  }

  const detectPageForFilteringGenres = () => {
    switch (location.pathname) {
      case '/':
        filterByGenres(chosenGenres, tracks)
        setTracks(sortedTracks)
        break
      case '/favourites':
        filterByGenres(chosenGenres, myTracks)
        setMyTracks(sortedTracks)
        break
      default:
        filterByGenres(chosenGenres, categoryTracks)
        setCategoryTracks(sortedTracks)
        break
    }
  }

  const detectPageForFilteringAuthors = () => {
    switch (location.pathname) {
      case '/':
        filterByAuthors(chosenAuthors, tracks)
        setTracks(sortedTracks)
        break
      case '/favourites':
        filterByAuthors(chosenAuthors, myTracks)
        setMyTracks(sortedTracks)
        break
      default:
        filterByAuthors(chosenAuthors, categoryTracks)
        setCategoryTracks(sortedTracks)
        break
    }
  }

  const toggleVisibleFilter = (filter) => {
    setVisibleFilter(visibleFilter === filter ? null : filter)
  }

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
              <S.PopupLine
                key={i}
                onClick={() => {
                  addChosenToArray(
                    chosenAuthors,
                    item,
                    detectPageForFilteringAuthors,
                  )
                }}
              >
                {item}
              </S.PopupLine>
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
              <S.PopupLine
                key={i}
                onClick={() => {
                  addChosenToArray(
                    chosenGenres,
                    item,
                    detectPageForFilteringGenres,
                  )
                }}
              >
                {item}
              </S.PopupLine>
            ))}
          </S.PopupBox>
        </S.Popup>
      )}
    </S.CenterblockFilter>
  )
}

export default Filter
