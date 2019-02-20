import { OPEN, WIN, DOC } from '../constants';

WIN.on('scroll', function() {
  const header = $('.header');

  let top = DOC.scrollTop();
  let winHeight = WIN.height();

  top - winHeight >= 1
    ? header.addClass('is-transparent')
    : header.removeClass('is-transparent');
});

$('.js-mob-toggler').on('click', () => {
  $('.js-header').toggleClass(OPEN);
});
