import { ANIMATE } from '../constants';
/* eslint-disable */
import IScroll from "iscroll";
window.IScroll = IScroll;
var fullpage = require("../lib/jquery.fullpage.min.js");
// import { init, fpAnimation, fpReset } from './_animation-fullpage';

// var fp = document.getElementById('fullpage');

$(document).ready(function() {
  $(window).resize(function() {
    if ($(window).width() < 1023) {
      //if ($.fn.fullPage) {
      $.fn.fullpage.destroy("all");
      //}
    }
    if ($(window).width() > 1023) {
      initFullpage();
    }
  });

  function initFullpage() {
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
      // navigation: true,
      // fitToSection: false,
      // paddingTop: 135,

      onLeave: function(origin, destination, direction) {
        var leavingSection = this;
        console.log(origin, destination, direction);
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

