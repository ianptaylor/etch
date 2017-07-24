$(document).ready(function() {
  createGrid(16, 16);

  activateHover();

  $('button').on('click', function() {
    $('.cell').css('background-color','#E8E8E8');
  });
});

function createGrid(x, y) {
  $('#frame').css('width', x * 15 + ' px');
  $('#frame').css('height', y * 15 + ' px');
  for(var i = 1; i <= x; i++){
    for(var j = 1; j <= y; j++){
      var $celldiv = $("<div class='cell'></div>");
      $celldiv.css("grid-column", "col " + j);
      $celldiv.css("grid-row", "row " + i);
      $('#frame').append($celldiv);
    }
  }
}

function activateHover() {
  $('.cell').on('mouseover', function() {
    $(this).css("background-color","#474747");
  });
}
