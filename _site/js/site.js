document.addEventListener('DOMContentLoaded', function() {

  // Toggle burger and mobile menu
  document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('open');
    document.getElementById('mobile-menu').classList.toggle('hide');
  });

  // Toggle mobile menu and burger on menu item click
  document.querySelectorAll('.mobile-menu a').forEach(function(item) {
    item.addEventListener('click', function() {
      document.getElementById('mobile-menu').classList.toggle('hide');
      document.querySelector('.burger').classList.toggle('open');
    });
  });

  // Adjust height based on 'object-fit' with Gridlex 'equalHeight' class
  let textHeight = document.querySelector('.text-container').offsetHeight;
  let imageHeight = document.querySelector('.img-container').offsetHeight;

  const adjustHeight = function(text, image) {
    document.querySelectorAll('.row').forEach(function(row) {
      if (text > image) {
        document.querySelector('.img-container').style.height = textHeight + 'px';
      }
    });
  }

  adjustHeight(textHeight, imageHeight);

});

