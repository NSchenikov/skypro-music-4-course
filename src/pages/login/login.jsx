import { useNavigate, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { loginUser, getToken } from '../../api'
import { useAuth } from '../../Contexts/AuthContext'
import './login.css'

export const Login = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth()
  // useEffect(() => {
  //   const subscribe = AuthService.subscribe((user) => {
  //     if (user) {
  //       setIsLoggedIn(true)
  //       setAuthUser(user)
  //     } else {
  //       setIsLoggedIn(false)
  //       setAuthUser(null)
  //     }
  //   })
  //   return subscribe
  // })
  const setUser = (user, token) => {
    localStorage.setItem(user, token)
    navigate('/', { replace: true })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setLoading(true)
    setError(null)
    console.log('submited form')
    loginUser(email, password).catch((error) => {
      setError(error.message)
      console.log(error.message)
    })
    getToken(email, password)
      .then((res) => {
        setUser('user', res.access)
        localStorage.setItem('refreshed', res.refresh)
        setIsLoggedIn(true)
        // setAuthUser({ username: email })
        setAuthUser(email)
        setLoading(false)
      })
      .catch((error) => {
        setError(error.message)
        setLoading(false)
        console.log(error.message)
      })
  }

  const errorDiv = error ? <div className="error">{error}</div> : ''
  return (
    <div className="wrapper">
      <div className="container-enter">
        <div className="modal__block">
          <form className="modal__form-login" onSubmit={handleSubmit}>
            <div className="modal__logo">
              <img src="../img/logo_modal.png" alt="logo" />
            </div>
            <input
              className="modal__input login"
              type="text"
              name="login"
              placeholder="Почта"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="modal__input password"
              type="password"
              name="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="possibleError">{errorDiv}</div>
            <button disabled={loading} className="modal__btn-enter">
              Войти
            </button>
            <Link to="/register">
              <button className="modal__btn-signup">Зарегистрироваться</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}
