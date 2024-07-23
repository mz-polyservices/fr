//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}







document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.word-carousel');
  const words = carousel.querySelectorAll('span');
  let currentIndex = 0;

  function slideUp() {
    currentIndex++;
    carousel.style.transform = `translateY(-${currentIndex * 50}px)`;
    
    if (currentIndex >= words.length - 1) {
      setTimeout(() => {
        carousel.style.transition = 'none';
        carousel.style.transform = 'translateY(0)';
        currentIndex = 0;
        setTimeout(() => {
          carousel.style.transition = 'transform 0.5s ease';
        }, 50);
      }, 500);
    }
  }

  setInterval(slideUp, 3000);
});


//stop the loader
$(document).ready(function () {
  setTimeout(function() { 
      $('#loader').fadeOut(); 
  }, 2500);
});