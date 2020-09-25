
$(document).ready(function(){
 console.log('jQuery loaded')

  $('.burger').click(function(){
    $(this).toggleClass('open');

    $('#mobile-menu').toggleClass('hide');

  console.log('Burger clicked')
  });

  $('.mobile-menu a').click(function(){
    $('#mobile-menu').toggleClass('hide');

    $('.burger').toggleClass('open');

  });

});
