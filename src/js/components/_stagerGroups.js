import { TimelineMax } from 'gsap';
import { IS_FUNC } from '../utils';

export const STAGGERGROUPS = props => {
  const groups = $(props.parent).find('[data-anim-group]');
  var groupsTL = new TimelineMax();
  groups.each((i, item) => {
    let container = $(item);
    let delay = container.data('anim-group') || 0;
    if (!IS_FUNC(props.callback)) return;
    groupsTL.add(() => props.callback(container), delay);
  });
};
