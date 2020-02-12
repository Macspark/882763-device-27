const modalMapWindow = document.querySelector('.modal-map');
const modalMapOpenBtn = document.querySelector('.company__map');
const modalMapCloseBtn = document.querySelector('.modal-map__close');
const modalMapActive = 'modal-map--active';

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
