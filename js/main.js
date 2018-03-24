$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
   });

   $('.btn-group').on('click', '.btn', function() {
    $(this).addClass('active').siblings().removeClass('active');
  });