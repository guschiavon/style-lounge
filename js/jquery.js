
$(document).ready(function(){

  $('.burger').click(function(){
    $(this).toggleClass('open');

    $('#mobile-menu').toggleClass('hide');

  });

  $('.mobile-menu a').click(function(){
    $('#mobile-menu').toggleClass('hide');

    $('.burger').toggleClass('open');

  });  

// this block allows to use 'object-fit' with Gridlex 'equalHeight' class
  let textHeight = $('.text-container').height();
  let imageHeight = $('.img-container').height();
  
  const adjustHeight = function(text, image) {
    $('.row').each(function() {
      if (text > image) {
        imageHeight = $('.img-container').height(textHeight);
      } 
    });
  }

  
  adjustHeight(textHeight, imageHeight)
});

// Container size calculation
const imageContainer = document.getElementsByClassName('responsive-img-container')
const calcContainerSize = function(imageContainer) {
  imageContainer.each(height())
}
