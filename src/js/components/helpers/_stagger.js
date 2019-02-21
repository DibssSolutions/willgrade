import { IS_FUNC } from "../../utils";
import { ANIMATE } from "../../constants";
import { TimelineMax } from "gsap";
export const STAGGER = props => {
  let tl = new TimelineMax();
  tl.staggerTo(
    props.elements,
    props.duration || 0.6,
    {
      y: props.y || 0,
      x: props.x || 0,
      opacity: props.opacity || 1,
      ease: IS_FUNC(props.ease)
        ? props.ease
        : eval(props.ease) || Power2.easeOut
    },
    props.delay || 0.25
  )
    .eventCallback(
      "onStart",
      () => {
        if (!IS_FUNC(props.onStart)) return;
        props.onStart(tl);
      },
      null
    )
    .eventCallback(
      "onComplete",
      () => {
        if (!IS_FUNC(props.onComplete)) return;
        props.onComplete(tl);
      },
      null
    );
};
