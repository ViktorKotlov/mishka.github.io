var modalBtn = document.querySelector('.product-card__button');
var modalProduct = document.querySelector('.product-modal');
var overlay = document.querySelector('.overlay');
var pageBody = document.querySelector('.page__body');

modalBtn.addEventListener('click', function () {
  openModal()
});

function openModal() {
  modalProduct.classList.toggle('product-modal--open');
  overlay.classList.toggle('overlay--shown');
  pageBody.classList.toggle('page__body--modal-open');

  window.addEventListener('keydown', function (evt) {
    console.log(evt);
  });
}
