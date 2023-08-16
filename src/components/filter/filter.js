import React, { useState } from 'react'
import './filter.css'

function Filter() {
  const [popUpMenu, setPopUpMenu] = useState(false)

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
        onClick={() => setPopUpMenu(!popUpMenu)}
      >
        исполнителю
      </button>
      {popUpMenu && PopUpMenu(authors)}
      <button
        className="filter__button button-year _btn-text"
        onClick={() => setPopUpMenu(!popUpMenu)}
      >
        году выпуска
      </button>
      {popUpMenu && PopUpMenu(years)}
      <button
        className="filter__button button-genre _btn-text"
        onClick={() => setPopUpMenu(!popUpMenu)}
      >
        жанру
      </button>
      {popUpMenu && PopUpMenu(genres)}
    </div>
  )

  function PopUpMenu(props) {
    return (
      <ul className="pop-up-big">
        <div className="pop-up-box">
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
