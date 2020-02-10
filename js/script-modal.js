const modalCatalogWindow = document.querySelector('.catalog');
const modalCatalogBtn = document.querySelector('.header__catalog-btn');
const modalActive = 'catalog--active';

modalCatalogBtn.addEventListener('mouseover', function(event) {
  event.preventDefault()
  modalCatalogWindow.classList.toggle(modalActive);
});
