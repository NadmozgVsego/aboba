import { Card } from "../compomemnts/header/Card/Card";
import { Header } from "../compomemnts/header/Header";
import { cardArray } from "../constants";
export const Home = () => {
  return (
    <>
      <Header />
      <main className="main">
        <section className="search">
          <div className="container">
            <div className="search-box">
              <input type="search" className="search-input" placeholder="Поиск по объявлениям" />
              <button className="btn btn-primary search-btn">
                <svg className="search-btn__icon" width="15" height="15" viewBox="0 0 15 15" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14.6506 14.0012L10.0862 9.43675C10.9465 8.43352 11.4706 7.13293 11.4706 5.71058C11.4706 2.54822 8.89765 -0.0247192 5.7353 -0.0247192C4.20353 -0.0247192 2.76265 0.571751 1.67824 1.6544C0.595589 2.73793 -0.000881376 4.17881 9.77541e-07 5.71058C9.77541e-07 8.87293 2.57294 11.4459 5.7353 11.4459C7.15765 11.4459 8.45912 10.9218 9.46235 10.0615L14.0268 14.6259L14.6506 14.0012ZM5.7353 10.5635C3.06 10.5635 0.882354 8.38675 0.882354 5.71058C0.881472 4.41352 1.38618 3.19499 2.30294 2.2791C3.21882 1.36234 4.43824 0.857634 5.7353 0.857634C8.41059 0.857634 10.5882 3.0344 10.5882 5.71058C10.5882 8.38587 8.41059 10.5635 5.7353 10.5635Z"
                    fill="white" />
                </svg>

                <span className="search-btn__text">Ищи</span>
              </button>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="container">
            <div className="content-box">
              <div className="content-main">
                <h2 className="content-main__title">Рекомендации для вас</h2>
                <div className="content-main__list">
                  {
                    cardArray.map(card => (
                      <Card
                        key={card.id}
                        title={card.title}
                        price={card.price}
                        date={card.date}
                        address={card.address}
                        img={card.img}
                      />
                    ))
                  }
                </div>
              </div>
              <div className="content-side">
                <h3 className="content-side__title">Сервисы и услуги</h3>
                <div className="content-side__box">
                  <div className="content-side__list">
                    <div className="content-side__list-item">
                      <img src="img/shipping.svg" alt="shipping" className="content-side__list-item--img" />
                      <h5 className="content-side__list-item--title">Доставка</h5>
                      <p className="content-side__list-item--text">Проверка при получении и возможность бесплатно вернуть товар
                      </p>
                    </div>
                    <div className="content-side__list-item">
                      <img src="img/auto.svg" alt="shipping" className="content-side__list-item--img" />
                      <h5 className="content-side__list-item--title">Автотека</h5>
                      <p className="content-side__list-item--text">Отчёт с историей авто: пробег, владельцы, сведения о залоге,
                        ДТП и ремонтах</p>
                    </div>
                    <div className="content-side__list-item">
                      <img src="img/comb.svg" alt="shipping" className="content-side__list-item--img" />
                      <h5 className="content-side__list-item--title">Онлайн-бронирование жилья</h5>
                      <p className="content-side__list-item--text">Посуточная аренда квартир и домов: большой выбор вариантов
                        для поездок по России</p>
                    </div>
                  </div>
                  <div className="content-side__footer">
                    <p className="content-side__footer--item">© ООО «Абоба», 2021–2031</p>
                    <a href="#!" className="content-side__footer--item">Политика конфиденциальности</a>
                    <a href="#!" className="content-side__footer--item">Обработка данных</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>

  )
}

