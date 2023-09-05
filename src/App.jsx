import { AppRoutes } from './routes'
import { useState } from 'react'
import MainNavMenu from './components/mainNavMenu/mainNavMenu'

function App() {
  const [user, setUser] = useState(null)

  const handleLogin = () => setUser(localStorage.setItem('user', 'token'))
  const handleLogout = () => {
    setUser(localStorage.clear())
    navigate('/login', { replace: true })
  }
  return (
    <div className="App">
      <div className="App-layout">
        <AppRoutes
          user={user}
          onAuthButtonClick={user ? handleLogout : handleLogin}
        />
      </div>
    </div>
  )
}

export default App
