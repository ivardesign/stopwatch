/*
Mod 1 - Assignment 1 - Stop Watch
M. Ivar Johnson
10/29/2018

The user should see the following:
  An application title labeled "Stopwatch Demo"
  A section with a timer that displays the current elapsed time to the hundredth second
  A button labeled "Start/Stop"
  A button labeled "Reset"
  A button labeled "Record Time"
  A section labeled "Past Times" that keeps a record of previously recorded times

The user should be able to do the following:
  Start or stop timer by pressing "Start/Stop" button or 's' key.
    -- attach 'start/stop' and 's' key to event handler to toggle timer incrementation.
        -> start begins where timer left off (no time reset).

  Record current timer count into the Past Times section by pressing "Record Time" button or 't' key.
    -- attach 'record time' and 't' key to event handler to record current time and display in 'past times'.
       -> this doesn't stop the timer, it just adds the current time every time you activate it.

  Reset timer count to 0 and wipe recorded times in Past Times by pressing "Reset" button or 'r' key.
    -- attach 'reset' button and 'r' key to event handler that wipes all times and resets timer to '0'.
*/
var timer = 0.00;
var interval;
var started = false;
var userKeyPressed;
var newTimeRecord = 0;

//--timer--
//displays the current elapsed time to the hundredth second inside "timer" container.
//start or stop timer by pressing "Start/Stop" button or stop by pressing "s" key.
function toggleTimer() {
  if (started == false) {
    interval = setInterval(function() {
      timer += 0.01;
      document.getElementById('timer').innerHTML = timer.toFixed(2);
    }, 100);
    started = true;
  } else {
  	clearInterval(interval);
  	started = false;
  }
}

//--record time--
//record current time and add to display in recordedTimes container (inside pastTimes) by pressing "Record Time" button or "t" key.
function recordTime() {
  newTimeRecord = timer.toFixed(2);
  document.getElementById('recordedTimes').innerHTML += newTimeRecord + '\<br\>';
}

//--event listeners--
//start/stop button
document.getElementById('startStop').addEventListener('click', function() {
	toggleTimer();
});
//record time
document.getElementById('record').addEventListener('click', function() {
	recordTime();
});
//reset button
document.getElementById('reset').addEventListener('click', function() {
  location.reload();
});
//charCode/keyCode events on keydown of 'real characters' --listens to all keydown events (seems expensive).
document.addEventListener('keydown', function(event) {
  if (event.charCode) {
    userKeyPressed = event.charCode;
  } else {
    userKeyPressed = event.keyCode;
  }
  if (userKeyPressed == 82) {//pressed r or R
    location.reload();//reset
  } else if (userKeyPressed == 83) {//pressed s or S
    toggleTimer();//start/stop
  } else if (userKeyPressed == 84) {//pressed t or T
  	recordTime();//record time
  }
});
