if (!window.setInterval) {
  window.setInterval = function (fn, time) {
    function interval() {
      fn();
      setTimeout(interval, time);
    }
    setTimeout(interval, time);
  };
}
// ---------------------------------------------

// Check if setInterval is not defined
if (typeof setInterval === 'undefined') {
  // Define setInterval using a self-invoking function
  var setInterval = function (fn, time) {
    var intervalFn = function () {
      fn();
      scheduleNext();
    };

    var scheduleNext = function () {
      var currentTime = new Date().getTime();
      var timeToCall = Math.max(0, time - (currentTime - lastTime));
      lastTime = currentTime + timeToCall;
      setTimeout(intervalFn, timeToCall);
    };

    var lastTime = new Date().getTime();
    scheduleNext();
  };
}

// Example usage
setInterval(function () {
  console.log('Polyfill setInterval executed.');
}, 1000);
