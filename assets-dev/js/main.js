// main.js

var redCircle = $('#red');
var yellowCircle = $('#yellow');
var blueCircle = $('#blue');

var allCircles = document.querySelectorAll('.circle');

function moveAround(circle) {
  circle.draggable();
}

circleSize = function() {

  $('#smaller').on('click', function() {
    var width = parseInt($('.circle').css('width'));
    var height = parseInt($('.circle').css('height'));

    $(allCircles).css('width', width - 15);
    $(allCircles).css('height', height - 15);
  });

  $('#bigger').on('click', function() {
    var width = parseInt($('.circle').css('width'));
    var height = parseInt($('.circle').css('height'));

    $(allCircles).css('width', width + 15);
    $(allCircles).css('height', height + 15);
  });

};

$(document).ready( function() {

  // Move Circles
  new moveAround(redCircle);
  new moveAround(yellowCircle);
  new moveAround(blueCircle);

  // Resize
  new circleSize();
});

