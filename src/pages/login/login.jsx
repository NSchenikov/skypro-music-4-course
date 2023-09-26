import { useNavigate, Link } from 'react-router-dom'
import './login.css'

export const Login = () => {
  const navigate = useNavigate()
  const setUser = () => {
    localStorage.setItem('user', 'token')
    // user = true
    navigate('/', { replace: true })
  }
  return (
    // <div>
    //   <h1>Страница логина</h1>
    //   <button onClick={setUser}>Войти</button>
    //   <Link to="/register">
    //     <div>Перейти к регистрации</div>
    //   </Link>
    // </div>

    <div className="wrapper">
      <div className="container-enter">
        <div className="modal__block">
          <form className="modal__form-login" action="#">
            <a href="../">
              <div className="modal__logo">
                <img src="../img/logo_modal.png" alt="logo" />
              </div>
            </a>
            <input
              className="modal__input login"
              type="text"
              name="login"
              placeholder="Почта"
            />
            <input
              className="modal__input password"
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <button onClick={setUser} className="modal__btn-enter">
              {/* <a href="../index.html">Войти</a> */}
              <a>Войти</a>
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
