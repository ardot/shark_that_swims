 var shark = document.getElementById('shark');
var position = window.innerWidth;
var incrementor = 1;
var width = 200;
var height = 200;

var wait = 0;
setInterval(function(){swim()}, 30);


function swim() {
  if (wait > 0) {
    wait = wait - 1;
  } else {
    if (position < -1500) {
      incrementor = 1;
      position = window.innerWidth;
      width = 200;
      height = 200;
      wait = Math.floor(Math.random() * 200) + 1;
    }
    console.log(window.innerWidth);
    incrementor = incrementor + 1;
    position = position - (incrementor / 4);
    height = height + (incrementor / 12);
    var position_string = position.toString() + "px";
    var height_string = height.toString() + "px";
    shark.style.left = position_string;
    shark.style.height = height_string;
    shark.style.width = height_string;
  }
}

