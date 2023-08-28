import styled from 'styled-components'

export const TrackPlayImageSkeleton = styled.div`
  width: 51px;
  height: 51px;
  background-color: #313131;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 12px;
  grid-row: 1;
  -ms-grid-row-span: 2;
  grid-column: 1;
  grid-area: image;
`

export const TrackPlayAuthorSkeleton = styled.div`
  grid-row: 1;
  grid-column: 2;
  grid-area: author;
  min-width: 59px;
  height: 15px;
  background: #313131;
`

export const TrackPlayAlbumSkeleton = styled.div`
  grid-row: 2;
  grid-column: 2;
  grid-area: album;
  min-width: 59px;
  height: 15px;
  background: #313131;
`
