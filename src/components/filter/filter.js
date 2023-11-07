import React, { useState, useEffect, useRef } from 'react'
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

  useEffect(() => {
    if (!isSorted) {
      setSaveTracks(tracks)
    }
  })

  if (!isSorted) {
    setSaveTracks(tracks)
  }

  let authors = Array.from(new Set(saveTracks.map((track) => track.author)))
  let genres = Array.from(new Set(saveTracks.map((track) => track.genre)))

  // const [authorFilter, setAuthorFilter] = useState([])
  // const [genreFilter, setGenreFilter] = useState([])
  // const [selectedSort, setSelectedSort] = useState('По умолчанию')

  let yearRef = useRef('default')
  let authorRef = useRef('')
  let genreRef = useRef('')
  let authorResultRef = useRef('')

  let [obj, setObj] = useState({
    author: [],
    year: '',
    genre: [],
  })

  useEffect(() => {
    console.log('obj', obj)
  }, [obj])

  // useEffect(() => {
  //   sortAndFilter()
  // }, [JSON.stringify(obj)])

  const changeAuthors = (item) => {
    authorResultRef.current = item
    console.log('ref', authorResultRef.current)
    Promise.resolve()
      .then(() => {
        // authorResultRef.current = item
        console.log('resolve')
        setObj({ ...obj, author: [...obj.author, item] })
        // obj = { ...obj, author: [...obj.author, item] }
      })
      .then(() => {
        sortAndFilter()
      })
  }

  const changeGenres = (item) => {
    Promise.resolve()
      .then(() => {
        obj = { ...obj, genre: [...obj.genre, item] }
      })
      .then(() => {
        console.log('obj', obj)
      })
      .then(() => {
        sortAndFilter()
      })
  }

  const changeYearSorting = (item) => {
    Promise.resolve()
      .then(() => {
        obj = { ...obj, year: item }
      })
      .then(() => {
        console.log('obj', obj)
      })
      .then(() => {
        sortAndFilter()
      })
  }

  const filterByAuthor = () => {
    let filtered = []
    // for (let author of obj.author) {
    //   for (let item of saveTracks) {
    //     if (author.includes(item.author)) {
    //       // filtered.push(item)
    //       filtered = [...filtered, item]
    //     }
    //   }
    // }

    // if (obj.author.length) {

    console.log('lenght', obj.author.length)
    for (let i = 0; i <= obj.author.length; i++) {
      const result = saveTracks.filter((el) => el.author === obj.author[i])
      filtered = [...filtered, ...result]
    }

    // }
    console.log(filtered)
    // setTracks(filtered)

    return filtered
  }

  const filterByGenre = () => {
    let filtered = []

    for (let genre of obj.genre) {
      for (let item of saveTracks) {
        if (genre.includes(item.genre)) {
          filtered = [...filtered, item]
        }
      }
    }

    return filtered
  }

  const sortDown = () => {
    let sorted

    sorted = [...saveTracks]
    // console.log(sorted)
    sorted.sort((a, b) => {
      const aa = new Date(a.release_date)
      const bb = new Date(b.release_date)
      return bb - aa
    })

    setIsSorted(true)
    return sorted
  }

  const sortUp = () => {
    let sorted

    sorted = [...saveTracks]

    // console.log(sorted)
    sorted.sort((a, b) => {
      const aa = new Date(a.release_date)
      const bb = new Date(b.release_date)
      return aa - bb
    })

    setIsSorted(true)
    return sorted
  }

  const sortDefault = () => {
    let sorted
    sorted = [...saveTracks]

    // console.log(sorted)
    sorted.sort((a, b) => {
      const aa = new Date(a.id)
      const bb = new Date(b.id)
      return aa - bb
    })

    setIsSorted(true)
    return sorted
  }

  const sortAndFilter = () => {
    // console.log('execute!')
    if (obj.author) {
      setTracks(filterByAuthor())
    }
    if (obj.genre) {
      setTracks(filterByGenre())
    }

    if (obj.year === 'default') {
      // setSortedTracks(sortDefault())
      setTracks(sortDefault())
    } else if (obj.year === 'new') {
      // setSortedTracks(sortDown())
      setTracks(sortDown())
    } else if (obj.year === 'old') {
      // setSortedTracks(sortUp())
      setTracks(sortUp())
    }
    // setTracks(sortedTracks)
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
                  authorRef.current = item
                  changeAuthors(authorRef.current)
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
                yearRef.current = 'default'
                changeYearSorting(yearRef.current)
              }}
            >
              По умолчанию
            </S.PopupLine>
            <S.PopupLine
              onClick={() => {
                yearRef.current = 'new'
                changeYearSorting(yearRef.current)
              }}
            >
              Сначала новые
            </S.PopupLine>
            <S.PopupLine
              onClick={() => {
                yearRef.current = 'old'
                changeYearSorting(yearRef.current)
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
                  genreRef.current = item
                  changeGenres(genreRef.current)
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
