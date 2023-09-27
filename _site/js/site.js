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
  

});

