// import { rebound } from 'rebound';
var rebound = require('rebound');

// Elements
var magneticAreaElements = document.querySelectorAll('.js-download-field');
console.log(magneticAreaElements.length);

[...magneticAreaElements].forEach(el => {
  var magneticAreaEl = el;
  var buttonEl = el.querySelector('.js-download-btn');

  // Cached sizes of things, so we don't force reflow
  var buttonBounds = buttonEl.getBoundingClientRect();
  var buttonWidth = buttonBounds.width;
  var buttonHeight = buttonBounds.height;
  
  var magneticBounds = magneticAreaEl.getBoundingClientRect();
  var magneticWidth = magneticBounds.width;
  var magneticHeight = magneticBounds.height;
  var magneticRadius = magneticWidth / 3;
  
  // ReboundJS stuff for the springy goodness
  var springSystem = new rebound.SpringSystem();
  var spring = springSystem.createSpring(100, 7);
  
  // console.log(magneticBounds, magneticRadius);
  
  var cursorPosition = {
    x: 0,
    y: 0
  };
  
  spring.addListener({
    onSpringUpdate: function onSpringUpdate(spring) {
      var val = spring.getCurrentValue();
      val = rebound.MathUtil.mapValueInRange(val, 0, 1, 0, 1);
      move(buttonEl, val);
    }
  });
  
  magneticAreaEl.addEventListener('mousemove', function(ev) {

    // cursorPosition.x = ev.pageX - ev.currentTarget.offsetLeft - magneticWidth / 2;
    // cursorPosition.y = ev.pageY - ev.currentTarget.offsetTop - magneticHeight / 2;
    cursorPosition.x = ev.pageX - $(ev.currentTarget).position().left - magneticWidth / 2;
    cursorPosition.y = ev.pageY - $(ev.currentTarget).position().top - magneticHeight / 2;
    console.log(cursorPosition);
  
    var distance = Math.sqrt(
      Math.pow(cursorPosition.x, 2) + Math.pow(cursorPosition.y, 2)
    ); // Cursor distance from original centre
    // console.log(distance);
    if (distance > magneticRadius) {
      spring.setEndValue(0);
      return;
    }
  
    var distanceRatio = 1 - distance / magneticRadius;
    var attraction = Math.abs(1 / (1 - Math.pow(distanceRatio * 10, 2)) - 1); // inverse-square style falloff - rapid increase in attraction as the distance decreases
    attraction = Math.max(0, Math.min(1, attraction)); // Bound to reasonable values
    spring.setEndValue(attraction);
  
    if (spring.isAtRest()) {
      // wake up the spring
      // TODO: this may not be be the best way to do this
      spring.setVelocity(1);
    }
  });
  
  function move(el, val) {
    var x = val * cursorPosition.x;
    var y = val * cursorPosition.y;
    // console.log(x, y);
    el.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
    // buttonIconEl.style.transform =
    //   'translate(' + -x / 4 + 'px, ' + -y / 4 + 'px)';
  }
});

