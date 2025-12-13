var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 6,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  thumbs: {
    swiper: swiper,
  },
});

/* старый скрипт */
// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'horizontal',
//   loop: true,

//   // If we need pagination
//   // pagination: {
//   //   el: '.swiper-pagination',
//   // },

//   // Navigation arrows
//   // navigation: {
//   //   nextEl: '.swiper-button-next',
//   //   prevEl: '.swiper-button-prev',
//   // },

//   // And if we need scrollbar
//   //   scrollbar: {
//   //     el: '.swiper-scrollbar',
//   //   },
// });

const menuBtn = document.querySelector('.menu-button');
const menu = document.querySelector('.navbar-panel');
const menuClose = document.querySelector('.close-menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('is-open');
});

menuClose.addEventListener('click', () => {
  menu.classList.toggle('is-open');
});
