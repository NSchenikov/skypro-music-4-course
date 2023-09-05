import styled, { createGlobalStyle } from 'styled-components'
import StratosSkyengWoff from '../../fonts/StratosSkyeng.woff'
import StratosSkyengWoff2 from '../../fonts/StratosSkyeng.woff2'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

*:before,
*:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  font-family: 'StratosSkyeng', sans-serif;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
}

ul li {
  list-style: none;
}

@font-face {
  font-family: 'StratosSkyeng';
  src:
    local('StratosSkyeng'),
    local('StratosSkyeng'),
    url(${StratosSkyengWoff2}) format('woff2'),
    url(${StratosSkyengWoff}) format('woff');
  font-weight: 400;
  font-style: normal;
}

._btn-text:hover {
  border-color: #d9b6ff;
  color: #d9b6ff;
  cursor: pointer;
}

._btn-icon:hover svg {
  fill: transparent;
  stroke: #acacac;
  cursor: pointer;
}

._btn-text:active {
  border-color: #ad61ff;
  color: #ad61ff;
  cursor: pointer;
}

._btn-icon:active svg {
  fill: transparent;
  stroke: #ffffff;
  cursor: pointer;
}

._btn-icon:active .track-play__like-svg,
._btn-icon:active .track-play__dislike-svg {
  fill: #696969;
  stroke: #ffffff;
  cursor: pointer;
}
`

export const App = styled.div`
  width: 100%;
  height: 100%;
  font-family: 'StratosSkyeng', sans-serif;
  color: #ffffff;
  text-align: center;
`

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: scroll;
  background-color: #181818;
`

export const Container = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  position: relative;
  background-color: #181818;
`

export const Main = styled.main`
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`

export const MainCenterblock = styled.div`
  width: auto;
  -webkit-box-flex: 3;
  -ms-flex-positive: 3;
  flex-grow: 3;
  padding: 20px 40px 20px 111px;
`

export const CenterblockH2 = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.8px;
  margin-bottom: 45px;
  display: flex;
  justify-content: flex-start;
`

export const CenterblockContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`

export const ContentTitle = styled.div`
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
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 24px;
`

export const PlaylistTitleCol = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;
`

export const Col01 = styled(PlaylistTitleCol)`
  width: 447px;
  display: flex;
  justify-self: flex-start;
`

export const Col02 = styled(PlaylistTitleCol)`
  width: 321px;
  display: flex;
  justify-self: flex-start;
`

export const Col03 = styled(PlaylistTitleCol)`
  width: 245px;
  display: flex;
  justify-self: flex-start;
`

export const Col04 = styled(PlaylistTitleCol)`
  width: 60px;
  text-align: end;
`

export const PlaylistTitleSvg = styled.svg`
  width: 12px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`

export const Footer = styled.footer``
// export const S = styled.div``
