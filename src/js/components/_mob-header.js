import { OPEN, WIN, DOC } from '../constants';

WIN.on('scroll', function() {
  const header = $('.header');

  let top = DOC.scrollTop();
  let winHeight = WIN.height();
  console.log(top, winHeight);
  top > winHeight
    ? header.removeClass('is-transparent')
    : header.addClass('is-transparent');
});

$('.js-mob-toggler').on('click', () => {
  $('.js-header').toggleClass(OPEN);
});
