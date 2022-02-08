var navSite = document.querySelector('.site-nav');
var navToggle = document.querySelector('.site-nav__toggle');

navSite.classList.remove('site-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navSite.classList.contains('site-nav--closed')) {
    navSite.classList.remove('site-nav--closed');
    navSite.classList.add('site-nav--opened');
  }
  else {
    navSite.classList.add('site-nav--closed');
    navSite.classList.remove('site-nav--opened');
  }
});
