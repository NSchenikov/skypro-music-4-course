import { Link } from 'react-router-dom'
import * as S from './sidebar.style'

function Sidebar() {
  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
        <S.SidebarIcon>
          <S.Logout alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </S.Logout>
        </S.SidebarIcon>
      </S.SidebarPersonal>
      <S.SidebarBlock>
        <S.SidebarList>
          <S.SidebarItem>
            <S.SidebarLink>
              <S.SidebarImg src="img/playlist01.png" alt="day's playlist" />
            </S.SidebarLink>
          </S.SidebarItem>
          <S.SidebarItem>
            <S.SidebarLink>
              <S.SidebarImg src="img/playlist02.png" alt="day's playlist" />
            </S.SidebarLink>
          </S.SidebarItem>
          <S.SidebarItem>
            <S.SidebarLink>
              <S.SidebarImg src="img/playlist03.png" alt="day's playlist" />
            </S.SidebarLink>
          </S.SidebarItem>
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  )
}

export default Sidebar
