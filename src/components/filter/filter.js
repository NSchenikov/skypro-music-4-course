import React, { useState } from 'react'
import './filter.css'

function Filter() {
  const [visibleFilter, setVisibleFilter] = useState(null)

  const toggleVisibleFilter = (filter) => {
    setVisibleFilter(visibleFilter === filter ? null : filter)
  }

  let authors = [
    'Nero',
    'Dynoro',
    'Outwork',
    'Mr. Gee',
    'Ali Bakgor',
    'Стоункат',
    'Psychopath',
    'Jaded',
    'Will Clarke',
    'AR/CO',
    'Blue Foundation',
    'Zeds Dead',
    'HYBIT',
    'Mr. Black',
    'Offer Nissim',
    'Hi Profile',
    'minthaze',
    'Calvin Harris',
    'Disciples',
    'Tom Boxer',
  ]

  let years = ['1994', '1995', '2000']

  let genres = ['rock', 'rap', 'hip-hop', 'electronic', 'house', 'techno']

  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>

      <button
        className="filter__button button-author _btn-text"
        onClick={() => toggleVisibleFilter('author')}
      >
        исполнителю
      </button>
      {visibleFilter === 'author' &&
        PopUpMenu(authors, 'pop-up-author', 'pop-up-box')}
      <button
        className="filter__button button-year _btn-text"
        onClick={() => toggleVisibleFilter('year')}
      >
        году выпуска
      </button>
      {visibleFilter === 'year' &&
        PopUpMenu(years, 'pop-up-year', 'pop-up-box-year')}
      <button
        className="filter__button button-genre _btn-text"
        onClick={() => toggleVisibleFilter('genre')}
      >
        жанру
      </button>
      {visibleFilter === 'genre' &&
        PopUpMenu(genres, 'pop-up-genre', 'pop-up-box')}
    </div>
  )

  function PopUpMenu(props, klass, klassBox) {
    return (
      <ul className={klass}>
        <div className={klassBox}>
          {props.map((item, i) => (
            <li className="pop-up-line" key={i}>
              {item}
            </li>
          ))}
        </div>
      </ul>
    )
  }
}

export default Filter
