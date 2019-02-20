import { OPEN } from '../constants';

$('.js-mob-toggler').on('click', () => {
  console.log('TOGGLER');
  $('.js-header').toggleClass(OPEN);

});
