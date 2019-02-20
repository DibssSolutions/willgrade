import { OPEN } from '../constants';

$('.js-mob-toggler').on('click', () => {
  console.log('TOGGLER');
  $('.js-mob-toggler').toggleClass(OPEN);
});
