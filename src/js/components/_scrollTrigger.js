import { WIN, ANIMATE } from '../constants';
import { IS_FUNC, mediaWidth } from '../utils';

import { STAGGER } from './_stagger';
import { STAGGERGROUPS } from './_stagerGroups';

export default class SCROLLTRIGGER {
  constructor(prop) {
    this._container = prop.container || $('[data-scroll-trigger]');
    this._onStart = prop.onStart;
    this._offset = prop.offset;
    this._init();
  }

  _init() {
    this._container.each((id, el) => {
      const item = $(el);
      const itemData = item.data('scroll-trigger');
      let itemOffset;
      itemData === 0
        ? (itemOffset = 0)
        : (itemOffset = itemData || this._offset || 50);
      const show = () => {
        if (!mediaWidth(1023)) return;

        const thisOffset = item.offset().top + itemOffset;
        const windowOffset = WIN.scrollTop() + WIN.outerHeight();

        if (thisOffset <= windowOffset) {
          WIN.off('scroll', show);

          if (IS_FUNC(this._onStart)) this._onStart(item);

          if (item.hasClass(ANIMATE)) return;
          item.addClass(ANIMATE);
        }
      };

      show();
      WIN.on('scroll', show);
    });
  }
}

export const staggerAnimation = item => {
  let selector;
  if (item.attr('data-group-inner')) {
    selector = item.find('[data-anim-inner]');
  } else {
    selector = item.find('[data-anim]');
  }
  const animDelay = item.data('delay-anim');
  const animDuration = item.data('duration-anim');
  const animEase = item.data('ease-anim');
  const animClassAdd = item.data('anim-class-add');
  const animContainers = item.find(
    '[data-anim-text-parent], [data-anim="text-from-bottom"]'
  );
  STAGGER({
    elements: selector,
    duration: animDuration,
    delay: animDelay,
    ease: animEase,
    onStart: () => {
   
    },
    onComplete: tl => {
      
    }
  });
};

setTimeout(() => {
  new SCROLLTRIGGER({
    onStart: item => {
      const group = item.find('[data-anim-group]');
      if (!group.length) {
        staggerAnimation(item);
      } else {
        // init animation groups stagger
        STAGGERGROUPS({
          callback: container => {
            staggerAnimation(container);
          },
          parent: item
        });
      }
    }
  });
}, 500);
