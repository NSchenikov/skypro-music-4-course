import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import * as S from './mainNavMenu.style'

const { useState } = React

function MainNavMenu() {
  const [visible, setVisible] = useState(false)

  const toggleVisibility = () => setVisible(!visible)

  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImage src="img/logo.png" alt="logo" />
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
            <S.MenuItem>
              <S.MenuLink>Войти</S.MenuLink>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
      )}
    </S.MainNav>
  )
}

export default MainNavMenu
