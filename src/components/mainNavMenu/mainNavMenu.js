import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import * as S from './mainNavMenu.style'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../Contexts/AuthContext'

const { useState } = React

function MainNavMenu() {
  const [visible, setVisible] = useState(false)
  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth()
  const handleLogin = () => setUser(localStorage.setItem('user', 'token'))
  const handleLogout = () => {
    setUser(localStorage.clear())
    setIsLoggedIn(false)
    setAuthUser(null)
    navigate('/login', { replace: true })
  }

  const toggleVisibility = () => setVisible(!visible)

  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImage src="/img/logo.png" alt="logo" />
      </S.NavLogo>
      <S.NavBurger onClick={toggleVisibility}>
        <S.BurgerLine />
        <S.BurgerLine />
        <S.BurgerLine />
      </S.NavBurger>
      {visible && (
        <S.NavMenu>
          <S.MenuList>
            <S.MenuItem>
              <Link to="/">
                <S.MenuLink>Главное</S.MenuLink>
              </Link>
            </S.MenuItem>
            <S.MenuItem>
              <Link to="/favourites">
                <S.MenuLink>Мой плейлист</S.MenuLink>
              </Link>
            </S.MenuItem>
            <S.MenuItem user={user}>
              {localStorage.getItem('user') ? (
                <S.MenuLink onClick={handleLogout}>Выйти</S.MenuLink>
              ) : (
                <S.MenuLink onClick={handleLogin}>Войти</S.MenuLink>
              )}
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
      )}
    </S.MainNav>
  )
}

export default MainNavMenu
