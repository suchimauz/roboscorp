$('.nav-toggle').on('click', function(){
  $('#menu').toggleClass('active');
});

$('.section').on('click', function() {
    if ($(this).children('.body').hasClass('active')) {
        $(this).children('.body').toggleClass('active');
        $(this).children('.head2').removeClass('head2').addClass('head');
    } else {
        $(this).children('.body').toggleClass('active');
        $(this).children('.head').removeClass('head').addClass('head2');
    }
});
