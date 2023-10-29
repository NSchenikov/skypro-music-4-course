import * as S from '../sidebar/sidebar.style'
import * as Styled from './sidebarSkeleton.style'

function SidebarSkeleton() {
  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
        <S.SidebarIcon>
          <S.Logout alt="logout">
            <use xlinkHref="/img/icon/sprite.svg#logout"></use>
          </S.Logout>
        </S.SidebarIcon>
      </S.SidebarPersonal>
      <S.SidebarBlock>
        <S.SidebarList>
          <S.SidebarItem>
            <Styled.SidebarImgSkeleton />
          </S.SidebarItem>
          <S.SidebarItem>
            <Styled.SidebarImgSkeleton />
          </S.SidebarItem>
          <S.SidebarItem>
            <Styled.SidebarImgSkeleton />
          </S.SidebarItem>
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  )
}

export default SidebarSkeleton
