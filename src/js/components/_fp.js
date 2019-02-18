/* eslint-disable */
import IScroll from "iscroll";
window.IScroll = IScroll;
var fullpage = require("../lib/jquery.fullpage.min.js");
// import { init, fpAnimation, fpReset } from './_animation-fullpage';

// var fp = document.getElementById('fullpage');

$(document).ready(function() {
  var slides = $(".js-section");

  new IScroll("section");

  $(".out").fullpage({
    responsiveWidth: 10,
    responsiveHeight: 10,
    scrollingSpeed: 700,
    sectionSelector: ".js-section",
    scrollOverflow: true,
    responsive: 768,
    resize: false,
    fixedElements: ".js-header",
    menu: "#myMenu",
    navigation: true,
    fitToSection: false,
    paddingTop: 135,

    // onLeave: function(origin, destination, direction) {
    //   var leavingSection = this;
    //   console.log(origin, destination, direction);
    //   var header = $(".js-header");
    //   if (origin == 1 && direction == "down") {
    //     header.removeClass("is-transparent");
    //   } else if (destination === 1 && direction == "up") {
    //     header.addClass("is-transparent");
    //   }
    // }
  });
  // afterRender: () => {
  //   $.fn.fullpage.setAllowScrolling(false);
  //   $.fn.fullpage.setKeyboardScrolling(false);

  //   if ($(window).width() < 767) {
  //     fpAnimation($('.section:nth-child(2)'));
  //   }
  // },

  // onLeave: function(origin, destination, direction) {
  //   var loadedSection = this;

  //   if ($(window).width() > 767) {
  //     setTimeout(() => {
  //       if (direction === 'down') {
  //         var prevSlide = slides[destination - 2];
  //         fpReset(prevSlide);
  //       }
  //       if (direction === 'up') {
  //         var nextSlide = slides[destination];
  //         fpReset(nextSlide);
  //       }
  //     }, 500);
  //   }

  //   /*
  //   * Changing pagination text and email/Russia in footer
  //   */
  //   if (destination === 1) {
  //     pg.text('Scroll');
  //     $('.js-footer-hidden').addClass('is-hidden');
  //     $('.js-footer-visible').removeClass('is-hidden');
  //   } else if (destination === $('.section').length) {
  //     $('.js-footer-hidden').removeClass('is-hidden');
  //     $('.js-footer-visible').addClass('is-hidden');
  //     pg.html('<button class="up" id="up">Up↑</button>');
  //   } else {
  //     $('.js-footer-hidden').addClass('is-hidden');
  //     $('.js-footer-visible').removeClass('is-hidden');
  //     if (destination < 9) {
  //       pg.text('0' + (destination - 1) + '/');
  //     } else {
  //       pg.text((destination - 1) + '/');
  //     }
  //   }
  // },

  // afterLoad: function(index, destination, direction) {
  //   $.fn.fullpage.setAllowScrolling(false);
  //   $.fn.fullpage.setKeyboardScrolling(false);

  //   var up = document.getElementById('up');
  //   if (up) {
  //     up.addEventListener('click', (e) => {
  //       $.fn.fullpage.moveTo(1);
  //     })
  //   }

  //   var loadedSection = this;
  //   fpAnimation(loadedSection);
});
//   }
// });
