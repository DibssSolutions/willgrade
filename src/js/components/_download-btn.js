var downloadFields = $('.js-download-field');

downloadFields.each((index, el) => {
  var field = $(el);
  var btn = field.find('.js-download-btn');
  // field.on('mouseenter', e => startMovingBtn(btn, e));
  field.on('mousemove', e => {
    // document.body.appendChild(btn[0]);
    btn.css({
      position: 'absolute',
      // left: e.clientX - btn.width() / 2,
      // top: e.clientY - btn.height() / 2,
      left: e.clientX,
      top: e.clientY,
      zIndex: 100
    });
    // field.on('mouseleave', e => unfollowBtn(btn, e));
  });
});

// function startMovingBtn(btn, e) {
//   // var position = getCoords(btn);
//   // console.log(position);
//   // const moveAt = e => {
//   //   let _btn = btn[0];
//   //   _btn.style.left = e.pageX - _btn.offsetWidth / 2 + 'px';
//   //   _btn.style.top = e.pageY - _btn.offsetHeight / 2 + 'px';
//   // };
//   let _top = e.clientY;
//   let _left = e.clientX;
//   btn.css({ position: 'absolute', top: _top, left: _left });
//   // moveAt(e);

//   // переместим в body, чтобы мяч был точно не внутри position:relative
//   document.body.appendChild(btn[0]);
// }

// function getCoords(elem) {
//   var box = elem[0].getBoundingClientRect();
//   return {
//     top: box.top + pageYOffset,
//     left: box.left + pageXOffset
//   };
// }

// ball.onmousedown = function(e) {

//   var coords = getCoords(ball);
//   var shiftX = e.pageX - coords.left;
//   var shiftY = e.pageY - coords.top;

//   ball.style.position = 'absolute';
//   document.body.appendChild(ball);
//   moveAt(e);

//   ball.style.zIndex = 1000; // над другими элементами

//   function moveAt(e) {
//     ball.style.left = e.pageX - shiftX + 'px';
//     ball.style.top = e.pageY - shiftY + 'px';
//   }

//   document.onmousemove = function(e) {
//     moveAt(e);
//   };

//   ball.onmouseup = function() {
//     document.onmousemove = null;
//     ball.onmouseup = null;
//   };

// }

// ball.ondragstart = function() {
//   return false;
// };

// function getCoords(elem) {   // кроме IE8-
//   var box = elem.getBoundingClientRect();
//   return {
//     top: box.top + pageYOffset,
//     left: box.left + pageXOffset
//   };
// }
