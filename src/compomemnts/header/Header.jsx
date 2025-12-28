import { Link } from 'react-router-dom'
import './Header.css'
export const Header = () => {
  return (
    <header className="header container">
      <div className="header-box">
        <div className="header-logo">
          <Link to="/" className="logo">
            <img src="/img/logo.svg" alt="logo: Aboba" />
          </Link>
        </div>
        <div className="header-control">
          <a href="#!" className="btn btn-outline">Вход и рега</a>
          <a href="#!" className="btn btn-primary">Подать объяву</a>
        </div>
        <div className="header-burger">
          <img src="img/menu.svg" alt="menu" />
        </div>
      </div>
    </header>

  )
}