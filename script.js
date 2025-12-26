const searchBtn = document.querySelector('.search-btn')
const searchInput = document.querySelector('.search-box input')
const cardWrapper = document.querySelector('.content-main__list')

const cardArray = [
  {
    id: 0,
    title: 'Электросамокат',
    price: '10 980',
    date: '10 июля 11:39',
    address: 'Казань, р-н Ново-Савиновский',
    img: 'photo1.png'
  },
  {
    id: 1,
    title: 'Пвх материал 2й сорт',
    price: '170',
    date: '10 июля 11:39',
    address: 'Казань, р-н Вахитовский',
    img: 'photo2.png'
  },
  {
    id: 2,
    title: 'Двухсторонняя ветровка для мальчика',
    price: '2 110',
    date: '10 июля 11:39',
    address: 'Казань, р-н Ново-Савиновский',
    img: 'photo3.png'
  },
  {
    id: 3,
    title: 'Пеленальная доска на комод',
    price: '200',
    date: '10 июля 11:39',
    address: 'Казань, р-н Ново-Савиновский',
    img: 'photo4.png'
  },
  {
    id: 4,
    title: 'Участок 8 сот. (ИЖС)',
    price: '101 980',
    date: '10 июля 11:39',
    address: 'Казань, р-н Ново-Савиновский',
    img: 'photo5.png'
  },
  {
    id: 5,
    title: 'Ford Fusion, 2007',
    price: '304 000',
    date: '10 июля 11:39',
    address: 'Казань, р-н Ново-Савиновский',
    img: 'photo6.png'
  },
]

const render = (cardList) => {
  cardWrapper.innerHTML = ''
  cardList.forEach((item, idx) => {
    cardWrapper.insertAdjacentHTML('beforeend', `
              <a href="product.html" class="content-main__list-item">
                <div class="content-main__list-item--img">
                  <img src="img/${item.img}" alt="photo1">
                </div>
                <h5 class="content-main__list-item--title">${item.title}</h5>
                <strong class="content-main__list-item--price">${item.price} ₽</strong>
                <div class="content-main__list-item--desc-box">
                  <span class="content-main__list-item--desc">${item.address}</span>
                  <span class="content-main__list-item--desc">${item.date}</span>
                </div>
              </a>
      `)
  })
};

const filterefArray = (array, value) => {
  console.log(array);
  console.log(value);

  return array.filter((item) => {
    return (item.price.includes(value) || item.title.includes(value))
  })
};

cardWrapper.justifyContent = 'flex-start'
cardWrapper.rowGap = 'normal'
cardWrapper.gap = '30px'


render(cardArray)

searchBtn.addEventListener('click', () => {
  render(filterefArray(cardArray, searchInput.value))
})