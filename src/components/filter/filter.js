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
  saveTracks,
  setSaveTracks,
}) {
  const [visibleFilter, setVisibleFilter] = useState(null)
  let nonUniqueAuthors = []
  let nonUniqueGenres = []

  if (!isSorted) {
    setSaveTracks(tracks)
  }

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

  let authors = getAuthors(saveTracks, nonUniqueAuthors)
  let genres = getGenres(saveTracks, nonUniqueGenres)
  let [chosenAuthors, setChosenAuthors] = useState([])
  let [chosenGenres, setChosenGenres] = useState([])

  const sortDown = () => {
    let sorted = [...tracks]
    // console.log(sorted)
    sorted.sort((a, b) => {
      const aa = new Date(a.release_date)
      const bb = new Date(b.release_date)
      return bb - aa
    })

    setTracks(sorted)
    dispatch(setPlaylist(sorted))

    setSortedTracks(sorted)
    setIsSorted(true)
  }

  const sortUp = () => {
    let sorted = [...tracks]
    // console.log(sorted)
    sorted.sort((a, b) => {
      const aa = new Date(a.release_date)
      const bb = new Date(b.release_date)
      return aa - bb
    })
    setTracks(sorted)
    dispatch(setPlaylist(sorted))

    setSortedTracks(sorted)
    setIsSorted(true)
  }

  const sortDefault = () => {
    let sorted = [...tracks]
    // console.log(sorted)
    sorted.sort((a, b) => {
      const aa = new Date(a.id)
      const bb = new Date(b.id)
      return aa - bb
    })
    setTracks(sorted)
    dispatch(setPlaylist(sorted))

    setSortedTracks(sorted)
    setIsSorted(true)
  }

  const addChosenAuthorToArray = (item, callback) => {
    // array.push(item)
    // console.log('done')
    chosenAuthors.push(item)
    setChosenAuthors((chosenAuthors) => [...chosenAuthors, item])
    setChosenAuthors(getUniqueValues(chosenAuthors))
    console.log(chosenAuthors)

    callback()
  }

  const addChosenGenreToArray = (item, callback) => {
    // array.push(item)
    // console.log('done')
    chosenGenres.push(item)
    setChosenGenres((chosenGenres) => [...chosenGenres, item])
    setChosenGenres(getUniqueValues(chosenGenres))
    console.log(chosenGenres)

    callback()
  }

  const filterByGenres = (chosenGenres, array) => {
    setTracks(saveTracks)
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
    setTracks(saveTracks)
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
    filterByGenres(chosenGenres, saveTracks)
    setTracks(sortedTracks)
  }

  const detectPageForFilteringAuthors = () => {
    filterByAuthors(chosenAuthors, saveTracks)
    setTracks(sortedTracks)
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
                  addChosenAuthorToArray(item, detectPageForFilteringAuthors)
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
                  addChosenGenreToArray(item, detectPageForFilteringGenres)
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
