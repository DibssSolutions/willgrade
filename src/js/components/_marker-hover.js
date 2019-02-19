import { ACTIVE } from '../constants';

const trigger = $('[data-adress-trigger]');
const markers = $('[data-adress-marker]');

trigger.hover(function() {
  const id = $(this).data('adress-trigger');
  const activeMarker = $(`[data-adress-marker="${id}"]`);
  markers.removeClass(ACTIVE);
  activeMarker.addClass(ACTIVE);
}, function() {
  markers.removeClass(ACTIVE);
});
