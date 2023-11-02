import styled from 'styled-components'

export const CenterblockFilter = styled.div`
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

export const FilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`

export const FilterButton = styled.button`
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

export const Popup = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.$year ? '221px' : '248px')};
  height: ${(props) => (props.$year ? '196px' : '305px')};
  border-radius: 12px;
  background: #313131;
  position: absolute;
  z-index: 1;
  margin-top: ${(props) => (props.$year ? '250px' : '360px')};
  margin-left: ${(props) =>
    props.$author ? '90px' : props.$genre ? '390px' : '240px'};
  overflow: scroll;
`

export const PopupBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 30px;
  width: ${(props) =>
    props.$year ? '153px' : props.$genre ? '200px' : '180px'};
  height: ${(props) => (props.$year ? '128px' : '237px')};
`

export const PopupLine = styled.li`
  // font-family: StratosSkyeng;
  font-size: 19px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  &:last-child {
    padding-bottom: 30px;
  }
  &:hover {
    color: #b672ff;
    text-decoration: underline;
    cursor: pointer;
  }
`
