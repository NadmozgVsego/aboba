import { useOutletContext } from "react-router-dom";
import { Card } from "../compomemnts/card/Card";
import { Side } from "../compomemnts/side/Side";

export const Home = () => {
  const { products } = useOutletContext()

  return (
    <section className="content">
      <div className="container">
        <div className="content-box">
          <div className="content-main">
            <h2 className="content-main__title">Рекомендации для вас</h2>
            <div className="content-main__list">
              {
                products.map(card => (
                  <Card
                    key={card.id}
                    id={card.id}
                    title={card.title}
                    price={card.price}
                    date={card.date}
                    address={card.address}
                    img={card.img}
                    desc={card.desc}
                  />
                ))
              }
            </div>
          </div>
          <Side />
        </div>
      </div>
    </section>
  )
}

