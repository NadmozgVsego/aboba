import { useOutletContext, useParams } from "react-router-dom";
import { Side } from "../compomemnts/side/Side"

export const Product = () => {
  const { products } = useOutletContext()

  const { id } = useParams();
  const findProduct = products.find((p) => p.id == id)
  return (
    <section className="content">
      <div className="container">
        {findProduct ?
          <div className="content-box">
            <div className="content-product">

              <div className="content-product__left">
                <div className="content-product__title">{findProduct.title}</div>
                <img src={`/img/${findProduct.img}`} alt="photo11" className="content-product__img" />
                <p className="content-product__text">{findProduct.desc}
                </p>
              </div>
              <div className="content-product__right">
                <div className="content-product__price">{findProduct.price} ₽</div>
                <a href="#!" className="btn btn-primary btn-large">Показать телефон</a>
              </div>
            </div>
            <Side />
          </div>
          :
          <h2>Эт чё такое?</h2>
        }
      </div>
    </section>
  )
};