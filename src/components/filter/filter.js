import React, { useState } from 'react'
import './filter.css'
import styled from 'styled-components'

const StyledCenterblockFilter = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 51px;
`

const StyledFilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`

const StyledFilterButton = styled.button`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  background: #181818;
  color: #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
  &:not(:last-child) {
    margin-right: 10px;
  }
`

const StyledPopupAuthor = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 248px;
  height: 305px;
  border-radius: 12px;
  background: #313131;
  position: absolute;
  z-index: 1;
  margin-top: 360px;
  margin-left: 90px;
  overflow: scroll;
`

const StyledPopupGenre = styled(StyledPopupAuthor)`
  margin-left: 390px;
`

const StyledPopupYear = styled(StyledPopupAuthor)`
  width: 221px;
  height: 196px;
  margin-top: 250px;
  margin-left: 240px;
`

const StyledPopupBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 30px;
  width: 180px;
  height: 237px;
`

const StyledPopupBoxYear = styled(StyledPopupBox)`
  width: 153px;
  height: 128px;
`

const StyledPopupLine = styled.li`
  font-family: StratosSkyeng;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  &:last-child {
    padding-bottom: 30px;
  }
  &:hover {
    color: #b672ff;
    text-decoration: underline;
  }
`
// const Styled = styled.div``

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
    <StyledCenterblockFilter>
      <StyledFilterTitle>Искать по:</StyledFilterTitle>

      <StyledFilterButton
        className="_btn-text"
        onClick={() => toggleVisibleFilter('author')}
      >
        исполнителю
      </StyledFilterButton>
      {visibleFilter === 'author' &&
        PopUpMenu(authors, 'pop-up-author', 'pop-up-box')}
      <StyledFilterButton
        className="_btn-text"
        onClick={() => toggleVisibleFilter('year')}
      >
        году выпуска
      </StyledFilterButton>
      {visibleFilter === 'year' &&
        PopUpMenu(years, 'pop-up-year', 'pop-up-box-year')}
      <StyledFilterButton
        className="_btn-text"
        onClick={() => toggleVisibleFilter('genre')}
      >
        жанру
      </StyledFilterButton>
      {visibleFilter === 'genre' &&
        PopUpMenu(genres, 'pop-up-genre', 'pop-up-box')}
    </StyledCenterblockFilter>
  )

  function PopUpMenu(props, klass, klassBox) {
    return (
      <ul className={klass}>
        <div className={klassBox}>
          {props.map((item, i) => (
            <StyledPopupLine key={i}>{item}</StyledPopupLine>
          ))}
        </div>
      </ul>
    )
  }
}

export default Filter
