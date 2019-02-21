
import { ANIMATE, INIT, WIN, BODY } from '../constants';
/* eslint-disable */
import IScroll from "iscroll";
import { TimelineLite } from "gsap";


window.IScroll = IScroll;
var fullpage = require("../lib/jquery.fullpage.min.js");

const sections = $(".js-section");
const fullpageContainer = $(".js-fullpage");


var animationsArray = [];
for (var i = 0; i < sections.length; i++) {
  animationsArray.push(new TimelineMax({ paused: true }));
}


var timeout;
WIN.resize(() => {
  clearTimeout(timeout);
  timeout = setTimeout(fp, 100)
});

function fp() {
  if (WIN.width() <= 1024) {
    if (!fullpageContainer.hasClass(INIT) || BODY.hasClass('is-mob')) return;
    BODY.addClass('is-mob');
    $.fn.fullpage.destroy("all");
    fullpageContainer.removeClass(INIT);
  }
  else {
    if (fullpageContainer.hasClass(INIT)) return;
    initFullpage();
    if (BODY.hasClass('is-mob')) BODY.removeClass('is-mob');
  }
}
fp();
function initFullpage() {
  $(".js-fullpage").addClass(INIT);

  var slides = $(".js-section");

  new IScroll("section");

  $(".js-fullpage").fullpage({
    responsiveWidth: 10,
    responsiveHeight: 10,
    scrollingSpeed: 800,
    sectionSelector: ".js-section",
    scrollOverflow: true,
    responsive: 768,
    fixedElements: ".js-header",
    menu: "#myMenu",
    css3: true,
    onLeave: function(origin, destination, direction) {
      var leavingSection = this;
      var header = $(".js-header");
      var headerBtn = $(".js-header-btn");
      $(".js-animated-block").removeClass(ANIMATE);
      $("[data-anim]").removeClass(ANIMATE);

      if (origin == 1 && direction == "down") {
        header.removeClass("is-transparent");
        headerBtn.removeClass("btn_solid").addClass("btn_blue");
      } else if (destination === 1 && direction == "up") {
        header.addClass("is-transparent");
        headerBtn.removeClass("btn_blue").addClass("btn_solid");
      }

    },
    afterLoad: function(origin, destination, direction) {
      const loadedSection = $(sections[destination - 1]);

      loadedSection.find(".js-animated-block").addClass(ANIMATE);

      const elements = loadedSection.find("[data-anim]");
      const delay = loadedSection.data("fullpage-anim-delay");
      const duration = loadedSection.data("fullpage-anim-duration");
      TweenLite.set($(".js-section [data-anim]"), {
        clearProps: "all"
      });
      animationsArray[destination - 1]
        .add(() => {
          let tl = new TimelineMax();
          tl.staggerTo(
            elements,
            duration || 0.8,
            {
              y: 0,
              x: 0,
              opacity: 1,
              className: "+=is-animate",
              ease: Power2.easeOut
            },
            delay || 0.25
          );
          return tl;
        }, 0)
        .play(0);
    }
  });

}
