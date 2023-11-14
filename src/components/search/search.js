import * as S from './search.style'

function Search({ searchValue, setSearchValue }) {
  return (
    <S.CenterblockSearch>
      <S.SearchSvg>
        <use xlinkHref="/img/icon/sprite.svg#icon-search"></use>
      </S.SearchSvg>
      <S.SearchText
        className="search__text"
        type="search"
        placeholder="Поиск"
        name="search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </S.CenterblockSearch>
  )
}

export default Search
