const modalWindow = document.querySelector('.modal');
const modalOpenBtn = document.querySelector('.company__button-msg');
const modalCloseBtn = document.querySelector('.modal__close');
const modalActive = 'modal--active';

const modalMapWindow = document.querySelector('.modal-map');
const modalMapOpenBtn = document.querySelector('.company__map');
const modalMapCloseBtn = document.querySelector('.modal-map__close');
const modalMapActive = 'modal-map--active';

const serviceBtn1 = document.querySelector('.service__button1');
const serviceBtn2 = document.querySelector('.service__button2');
const serviceBtn3 = document.querySelector('.service__button3');
const serviceContent1 = document.querySelector('.service__content1');
const serviceContent2 = document.querySelector('.service__content2');
const serviceContent3 = document.querySelector('.service__content3');
const serviceBtnActive = 'service__button--active';
const serviceContentActive = 'service__content--active';

const slideBtn1 = document.querySelector('.slider__switcher1');
const slideBtn2 = document.querySelector('.slider__switcher2');
const slideBtn3 = document.querySelector('.slider__switcher3');
const slide1 = document.querySelector('.slider__slide1');
const slide2 = document.querySelector('.slider__slide2');
const slide3 = document.querySelector('.slider__slide3');
const slideBtnActive = 'slider__switcher--active';
const slideActive = 'slider__slide--active';

modalOpenBtn.addEventListener('click', function(event) {
  event.preventDefault()
  modalWindow.classList.add(modalActive);
});

modalCloseBtn.addEventListener('click', function() {
  modalWindow.classList.remove(modalActive);
});

document.addEventListener('keydown', function(event) {
  if (event.key == 'Escape' && modalWindow.classList.contains(modalActive)) {
  modalWindow.classList.remove(modalActive);
  }
});

modalMapOpenBtn.addEventListener('click', function(event) {
  event.preventDefault()
  modalMapWindow.classList.add(modalMapActive);
});

modalMapCloseBtn.addEventListener('click', function() {
  modalMapWindow.classList.remove(modalMapActive);
});

document.addEventListener('keydown', function(event) {
  if (event.key == 'Escape' && modalMapWindow.classList.contains(modalMapActive)) {
  modalMapWindow.classList.remove(modalMapActive);
  }
});

serviceBtn1.addEventListener('click', function(event) {
  event.preventDefault()
  serviceContent1.classList.add(serviceContentActive);
  serviceContent2.classList.remove(serviceContentActive);
  serviceContent3.classList.remove(serviceContentActive);
  serviceBtn1.classList.add(serviceBtnActive);
  serviceBtn2.classList.remove(serviceBtnActive);
  serviceBtn3.classList.remove(serviceBtnActive);
});

serviceBtn2.addEventListener('click', function(event) {
  event.preventDefault()
  serviceContent1.classList.remove(serviceContentActive);
  serviceContent2.classList.add(serviceContentActive);
  serviceContent3.classList.remove(serviceContentActive);
  serviceBtn1.classList.remove(serviceBtnActive);
  serviceBtn2.classList.add(serviceBtnActive);
  serviceBtn3.classList.remove(serviceBtnActive);
});

serviceBtn3.addEventListener('click', function(event) {
  event.preventDefault()
  serviceContent1.classList.remove(serviceContentActive);
  serviceContent2.classList.remove(serviceContentActive);
  serviceContent3.classList.add(serviceContentActive);
  serviceBtn1.classList.remove(serviceBtnActive);
  serviceBtn2.classList.remove(serviceBtnActive);
  serviceBtn3.classList.add(serviceBtnActive);
});

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

ymaps.ready(function () {
  var map = new ymaps.Map("map", {
      center: [55.686980, 37.529654],
      zoom: 17,
      controls: ['zoomControl']
  });

  var mapMark = new ymaps.GeoObject({
      geometry: {
          type: "Point",
          coordinates: [55.686980, 37.529654]
      }
  });

  map.geoObjects.add(mapMark);
});
