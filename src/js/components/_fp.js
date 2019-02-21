import { ANIMATE, INIT, WIN } from '../constants';
// import { STAGGER } from './_stagger';
// import { staggerAnimation } from './_scrollTrigger';
/* eslint-disable */
import IScroll from "iscroll";
import { TimelineLite } from "gsap";
window.IScroll = IScroll;
var fullpage = require("../lib/jquery.fullpage.min.js");

$(document).ready(function() {
  const sections = $(".js-section");
  var animationsArray = [];
  for (var i = 0; i < sections.length; i++) {
    animationsArray.push(new TimelineMax({ paused: true }));
  }

  WIN.resize(() => fp());

  function fp() {
    if (WIN.width() < 1023) {
      if ($(".js-fullpage").hasClass(INIT)) {
        $.fn.fullpage.destroy("all");
        $(".js-fullpage").removeClass(INIT);
      }
    }
    if (WIN.width() > 1023) {
      if ($(".js-fullpage").hasClass(INIT)) return;
      initFullpage();
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
        var loadedSection = this;
        $(sections[destination - 1])
          .find(".js-animated-block")
          .addClass(ANIMATE);
        const elements = $(sections[destination - 1]).find("[data-anim]");
        TweenLite.set($(".js-section [data-anim]"), {
          clearProps: "all"
        });
        animationsArray[destination - 1]
          .add(() => {
            let tl = new TimelineMax();
            tl.staggerTo(
              elements,
              0.6,
              {
                y: 0,
                x: 0,
                opacity: 1,
                className: "+=is-animate",
                ease: Power2.easeOut
              },
              0.1
            );
            return tl;
          }, 0)
          .play(0);
        const all = $(".section");
      }
    });

    const wrap = $(".js-sections-wrapper");
    const sectionDev = $(".js-section-development");
    const sectionInv = $(".js-section-investment");
    sectionInv.hover(
      function() {
        wrap.addClass("is-active-investment");
      },
      function() {
        wrap.removeClass("is-active-investment");
      }
    );

    sectionDev.hover(
      function() {
        wrap.addClass("is-active-development");
      },
      function() {
        wrap.removeClass("is-active-development");
      }
    );
  }
});
