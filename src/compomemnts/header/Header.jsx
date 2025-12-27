import './Header.css'
export const Header = () => {
  return (
    <header className="header container">
      <div className="header-box">
        <div className="header-logo">
          <a href="/index.html" className="logo">
            <img src="img/logo.svg" alt="logo: Aboba" />
          </a>
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