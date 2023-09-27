import { useState } from 'react'
import { registerUser } from '../../api'
import { useNavigate, Link } from 'react-router-dom'
import './register.css'

export const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('submit')
    registerUser(email, password)
  }
  // registerUser()
  return (
    // <div>
    //   <h1>RegisterPage</h1>
    // </div>

    <div className="wrapper">
      <div className="container-signup">
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
              className="modal__input password-first"
              type="password"
              name="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className="modal__input password-double"
              type="password"
              name="password"
              placeholder="Повторите пароль"
            />
            {/* <Link to="/login"> */}
            <button className="modal__btn-signup-ent">
              Зарегистрироваться
            </button>
            {/* </Link> */}
          </form>
        </div>
      </div>
    </div>
  )
}
