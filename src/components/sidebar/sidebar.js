import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import * as S from './sidebar.style'

export const categories = [1, 2, 3]

function Sidebar() {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.clear()
    navigate('/login', { replace: true })
  }
  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
        <S.SidebarIcon>
          <S.Logout onClick={handleLogout} alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </S.Logout>
        </S.SidebarIcon>
      </S.SidebarPersonal>
      <S.SidebarBlock>
        <S.SidebarList>
          {categories.map((id) => (
            <S.SidebarItem key={id}>
              <Link to={`/category/${id}`}>
                <S.SidebarLink>
                  <S.SidebarImg
                    src={`img/playlist0${id}.png`}
                    alt="day's playlist"
                  />
                </S.SidebarLink>
              </Link>
            </S.SidebarItem>
          ))}
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  )
}

export default Sidebar
