import { useNavigate, Link } from 'react-router-dom'

export const Login = () => {
  const navigate = useNavigate()
  const setUser = () => {
    localStorage.setItem('user', 'token')
    // user = true
    navigate('/', { replace: true })
  }
  return (
    <div>
      <h1>Страница логина</h1>
      <button onClick={setUser}>Войти</button>
      <Link to="/register">
        <div>Перейти к регистрации</div>
      </Link>
    </div>
  )
}
