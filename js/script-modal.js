const modalWindow = document.querySelector('.modal');
const modalOpenBtn = document.querySelector('.company__button-msg');
const modalCloseBtn = document.querySelector('.modal__close');
const modalActive = 'modal--active';

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
