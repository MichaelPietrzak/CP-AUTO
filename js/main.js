
/* Hamburger Menu Option */

$('#toggle').click(function () {
  $(this).toggleClass('active');
  $('#overlay').toggleClass('open');
  $('#overlay').show();
});

// Close after clicking on a li

$('#overlay li').on('click', function () {
  $("#overlay").hide();
  $("#toggle").removeClass("active");
});


/* ********************************** */

$(".btn-group > .btn").click(function () {
  $(".btn-group > .btn").removeClass("active");
  $(this).addClass("active");
});

$('a[href^="#"]').on('click', function (event) {
  if(event.originalEvent.path[3].nodeName == 'NAV'){
    $("#toggle").addClass("active");
    $('#overlay').toggleClass('open');
  }
  var target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body').stop().animate({
      scrollTop: target.offset().top
    }, 1000);
  }
});