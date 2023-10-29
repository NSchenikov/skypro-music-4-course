import * as S from './search.style'

function Search() {
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
      />
    </S.CenterblockSearch>
  )
}

export default Search
