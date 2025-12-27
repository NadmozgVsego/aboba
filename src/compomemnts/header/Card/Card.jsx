import './Card.css'
export const Card = ({ title, price, date, address, img }) => {
  return (
    <a href="product.html" className="card">
      <div className="card--img">
        <img src={`img/${img}`} alt={`${img}`} />
      </div>
      <h5 className="card--title">{title}</h5>
      <strong className="card--price">{price} ₽</strong>
      <div className="card--desc-box">
        <span className="card--desc">{address}</span>
        <span className="card--desc">{date}</span>
      </div>
    </a>

  )
}
// content-main__list-item