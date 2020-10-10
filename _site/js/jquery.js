
$(document).ready(function(){

  $('.burger').click(function(){
    $(this).toggleClass('open');

    $('#mobile-menu').toggleClass('hide');

  console.log('Burger clicked')
  });

  $('.mobile-menu a').click(function(){
    $('#mobile-menu').toggleClass('hide');

    $('.burger').toggleClass('open');

  });  

  // let textHeight = $('.text-container').height();
  // let imageHeight = $('.img-container').height();
  
  // const adjustHeight = function(text, image) {
  //   $('.row').each(function() {
  //     if (text > image) {
  //       imageHeight = $('.img-container').height(textHeight);
  //       console.log('adjusted')
  //     } 
  //   });
  // }
  
  // adjustHeight(textHeight, imageHeight)
});

