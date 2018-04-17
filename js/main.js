$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
   });

   $('.btn-group').on('click', '.btn', function() {
    $(this).addClass('active').siblings().removeClass('active');
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