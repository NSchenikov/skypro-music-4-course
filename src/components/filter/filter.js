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
  handleFilterByAuthor,
  handleFilterByGenre,
  handleSortDown,
  handleSortUp,
  handleSortDefault,
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

  const [selectedAuthor, setSelectedAuthor] = useState([])
  const [selectedGenre, setSelectedGenre] = useState([])

  const handleAuthorChange = (author) => {
    setSelectedAuthor(author)
    handleFilterByAuthor(author)
  }

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre)
    handleFilterByGenre(genre)
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
                  // authorRef.current = item
                  // changeAuthors(authorRef.current)
                  handleAuthorChange(item)
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
                handleSortDefault()
              }}
            >
              По умолчанию
            </S.PopupLine>
            <S.PopupLine
              onClick={() => {
                handleSortDown()
              }}
            >
              Сначала новые
            </S.PopupLine>
            <S.PopupLine
              onClick={() => {
                handleSortUp()
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
                  handleGenreChange(item)
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
