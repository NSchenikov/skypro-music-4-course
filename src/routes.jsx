import { Routes, Route } from 'react-router-dom'
import { Category } from './pages/category/category'
import { Favourites } from './pages/favourites/favourites'
import { Login } from './pages/login/login'
import { Main } from './pages/Main/MainPage'
import { Register } from './pages/register/register'
import { NotFound } from './pages/not-found/NotFound'
import { ProtectedRoute } from './components/protected-route/protectedRoute'
import { Layout } from './pages/layout'
// import user from './pages/login/login'

export const AppRoutes = ({ user }) => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/"
        element={
          <ProtectedRoute user={user} isAllowed={Boolean(user)}>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route
          index
          element={
            <ProtectedRoute user={user} isAllowed={Boolean(user)}>
              <Main />
            </ProtectedRoute>
          }
        />
        <Route
          path="favourites"
          element={
            <ProtectedRoute user={user} isAllowed={Boolean(user)}>
              <Favourites />
            </ProtectedRoute>
          }
        />
      </Route>

      <Route
        path="/category/:id"
        element={
          <ProtectedRoute user={user} isAllowed={Boolean(user)}>
            <Category />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
