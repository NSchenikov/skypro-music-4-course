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

  // useEffect(() => {
  //   setSaveTracks(tracks)
  // }, [])

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

  let [obj, setObj] = useState({
    author: [],
    year: 'default',
    genre: [],
  })

  const changeAuthors = (item) => {
    setObj({ ...obj, author: [...obj.author, item] })
  }

  const changeGenres = (item) => {
    setObj({ ...obj, genre: [...obj.genre, item] })
  }

  useEffect(() => {
    console.log('obj', obj)
  }, [obj])

  // useEffect(() => {
  //   sortAndFilter()
  // }, [obj])

  // useEffect(() => {
  //   sortAndFilter()
  // }, [tracks])

  const filterByAuthor = () => {
    // setTracks(saveTracks)
    let filtered = []
    console.log('массив авторов в объекте перед проверкой', obj.author)
    for (let author of obj.author) {
      for (let item of saveTracks) {
        if (author.includes(item.author)) {
          // filtered.push(item)
          // console.log(filtered)
          filtered = [...filtered, item]
        }
      }
    }
    console.log('конечный', filtered)

    setSortedTracks(filtered)
    sortedTracks = [...filtered]
  }

  const filterByGenre = () => {
    // setTracks(saveTracks)
    let filtered = []
    console.log('массив жанров в объекте перед проверкой', obj.genre)
    for (let genre of obj.genre) {
      for (let item of saveTracks) {
        if (genre.includes(item.genre)) {
          // filtered.push(item)
          filtered = [...filtered, item]
        }
      }
    }
    console.log('конечный', filtered)

    setSortedTracks(filtered)
    sortedTracks = [...filtered]
  }

  const sortAndFilter = () => {
    if (obj.author) {
      filterByAuthor()
    }
    if (obj.genre) {
      filterByGenre()
    }
    setTracks(sortedTracks)
    setIsSorted(true)
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
                  // if (event.target) {
                  console.log('author')
                  changeAuthors(item)
                  sortAndFilter()
                  // }
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
            <S.PopupLine
              onClick={() => {
                console.log('default')
                setObj({ ...obj, year: 'default' })
              }}
            >
              По умолчанию
            </S.PopupLine>
            <S.PopupLine
              onClick={() => {
                console.log('new')
                setObj({ ...obj, year: 'new' })
              }}
            >
              Сначала новые
            </S.PopupLine>
            <S.PopupLine
              onClick={() => {
                console.log('old')
                setObj({ ...obj, year: 'old' })
              }}
            >
              Сначала старые
            </S.PopupLine>
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
                  console.log('genre')
                  changeGenres(item)
                  sortAndFilter()
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
