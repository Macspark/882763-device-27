const serviceBtn1 = document.querySelector('.service__button1');
const serviceBtn2 = document.querySelector('.service__button2');
const serviceBtn3 = document.querySelector('.service__button3');
const serviceContent1 = document.querySelector('.service__content1');
const serviceContent2 = document.querySelector('.service__content2');
const serviceContent3 = document.querySelector('.service__content3');
const serviceBtnActive = 'service__button--active';
const serviceContentActive = 'service__content--active';

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
