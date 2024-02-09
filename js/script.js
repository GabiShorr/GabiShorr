// Add click event listener to all image links
document.addEventListener('DOMContentLoaded', function () {
    var imageLinks = document.querySelectorAll('.image-grid a');
    imageLinks.forEach(function (link) {
      link.addEventListener('click', function (event) {
        // Prevent default behavior (following the link)
        event.preventDefault();
        // Redirect to the link specified in the href attribute
        window.location.href = link.getAttribute('href');
      });
    });
  });
  

