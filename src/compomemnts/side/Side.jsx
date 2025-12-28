import './Side.css'
export const Side = () => {
  return (
    <div className="side">
      <h3 className="side__title">Сервисы и услуги</h3>
      <div className="side__box">
        <div className="side__list">
          <div className="side__list-item">
            <img src="/img/shipping.svg" alt="shipping" className="side__list-item--img" />
            <h5 className="side__list-item--title">Доставка</h5>
            <p className="side__list-item--text">Проверка при получении и возможность бесплатно вернуть товар
            </p>
          </div>
          <div className="side__list-item">
            <img src="/img/auto.svg" alt="shipping" className="side__list-item--img" />
            <h5 className="side__list-item--title">Автотека</h5>
            <p className="side__list-item--text">Отчёт с историей авто: пробег, владельцы, сведения о залоге,
              ДТП и ремонтах</p>
          </div>
          <div className="side__list-item">
            <img src="/img/comb.svg" alt="shipping" className="side__list-item--img" />
            <h5 className="side__list-item--title">Онлайн-бронирование жилья</h5>
            <p className="side__list-item--text">Посуточная аренда квартир и домов: большой выбор вариантов
              для поездок по России</p>
          </div>
        </div>
        <div className="side__footer">
          <p className="side__footer--item">© ООО «Абоба», 2021–2031</p>
          <a href="#!" className="side__footer--item">Политика конфиденциальности</a>
          <a href="#!" className="side__footer--item">Обработка данных</a>
        </div>
      </div>
    </div>

  )
}