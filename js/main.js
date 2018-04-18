$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
   });

  
   $(".btn-group > .btn").click(function(){
    $(".btn-group > .btn").removeClass("active");
    $(this).addClass("active");
});

  $('a[href^="#"]').on('click', function (event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top 
      }, 1000);
    }
  });