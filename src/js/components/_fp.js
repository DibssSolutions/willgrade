import { ANIMATE, INIT } from '../constants';
/* eslint-disable */
import IScroll from "iscroll";
window.IScroll = IScroll;
var fullpage = require("../lib/jquery.fullpage.min.js");

$(document).ready(function() {
  if ($(window).width() > 1023) {
    fp();
  }

  $(window).resize(() => fp());

  function fp() {
    if ($(window).width() < 1023) {
      if ($(".js-fullpage").hasClass(INIT)) {
        $.fn.fullpage.destroy("all");
        $(".js-fullpage").removeClass(INIT);
      }
    }
    if ($(window).width() > 1023) {
      if ($(".js-fullpage").hasClass(INIT)) return;
      initFullpage();
    }
  }

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
        var buttons = $(loadedSection).find(
          ".js-animated-btn, .js-animated-block"
        );
        buttons.each((index, el) => $(el).addClass(ANIMATE));
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
