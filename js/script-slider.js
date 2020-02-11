const slideBtn1 = document.querySelector('.slider__switcher1');
const slideBtn2 = document.querySelector('.slider__switcher2');
const slideBtn3 = document.querySelector('.slider__switcher3');
const slide1 = document.querySelector('.slider__slide1');
const slide2 = document.querySelector('.slider__slide2');
const slide3 = document.querySelector('.slider__slide3');
const slideBtnActive = 'slider__switcher--active';
const slideActive = 'slider__slide--active';

slideBtn1.addEventListener('click', function() {
  slide1.classList.add(slideActive);
  slide2.classList.remove(slideActive);
  slide3.classList.remove(slideActive);
  slideBtn1.classList.add(slideBtnActive);
  slideBtn2.classList.remove(slideBtnActive);
  slideBtn3.classList.remove(slideBtnActive);
});

slideBtn2.addEventListener('click', function() {
  slide1.classList.remove(slideActive);
  slide2.classList.add(slideActive);
  slide3.classList.remove(slideActive);
  slideBtn1.classList.remove(slideBtnActive);
  slideBtn2.classList.add(slideBtnActive);
  slideBtn3.classList.remove(slideBtnActive);
});

slideBtn3.addEventListener('click', function() {
  slide1.classList.remove(slideActive);
  slide2.classList.remove(slideActive);
  slide3.classList.add(slideActive);
  slideBtn1.classList.remove(slideBtnActive);
  slideBtn2.classList.remove(slideBtnActive);
  slideBtn3.classList.add(slideBtnActive);
});
