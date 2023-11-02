import React, { useState, useEffect } from 'react'
import * as S from './filter.style'

// const S. = styled.div``

function Filter(tracks, setTracks, myTracks, setMyTracks) {
  const [visibleFilter, setVisibleFilter] = useState(null)
  let nonUniqueAuthors = []
  let years = ['По умолчанию', 'Сначала новые', 'Сначала старые']
  let nonUniqueGenres = []

  const getUniqueValues = (array) => {
    function onlyUnique(value, index, array) {
      return array.indexOf(value) === index
    }

    return array.filter(onlyUnique)
  }

  const getAuthors = (initialArr, newArr) => {
    for (initialArr of Object.entries(initialArr)[0][1]) {
      newArr.push(initialArr.author)
    }

    return getUniqueValues(newArr)
  }

  const getGenres = (initialArr, newArr) => {
    for (initialArr of Object.entries(initialArr)[0][1]) {
      newArr.push(initialArr.genre)
    }

    return getUniqueValues(newArr)
  }

  let authors = getAuthors(tracks, nonUniqueAuthors)
  let genres = getGenres(tracks, nonUniqueGenres)

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
            {years.map((item, i) => (
              <S.PopupLine key={i}>{item}</S.PopupLine>
            ))}
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
