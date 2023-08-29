import { Routes, Route } from 'react-router-dom'
import { Category } from './pages/category/category'
import { Favourites } from './pages/favourites/favourites'
import { Login } from './pages/login/login'
import { Main } from './pages/Main/MainPage'
import { Register } from './pages/register/register'
import { NotFound } from './pages/not-found/NotFound'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/category" element={<Category />} />
      <Route path="/favourites" element={<Favourites />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
