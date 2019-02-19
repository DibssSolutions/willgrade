import { TweenLite } from 'gsap';

{
  let mouse = { x: 0, y: 0 };
  let pos = { x: 0, y: 0 };
  let ratio = 0.05;
  let active = false;

  document.addEventListener('mousemove', mouseMove);
  const btnWrap = $('.js-download-field');
  const btn = '.js-download-btn';

  function mouseMove(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }

  btnWrap.mouseleave(function(e) {
    TweenLite.to(this.querySelector(btn), 0.3, { x: 0, y: 0 });
    active = false;
  });

  btnWrap.mousemove(function(e) {
    run(e, this);
  });

  function run(e, parent) {
    runIt(e, parent, parent.querySelector(btn), 65);
  }

  function runIt(e, parent, target, movement) {
    let boundingRect = parent.getBoundingClientRect();
    let relX = e.clientX - boundingRect.left;
    let relY = e.clientY - boundingRect.top;

    TweenLite.to(target, 0.3, {
      x: (relX - boundingRect.width / 2) / boundingRect.width * movement,
      y: (relY - boundingRect.height / 2) / boundingRect.height * movement,
      ease: Power2.easeOut
    });
  }


}

