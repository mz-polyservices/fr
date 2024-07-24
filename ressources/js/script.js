
document.addEventListener('DOMContentLoaded', function() {

    const button = document.querySelector('#new-btn');
  
    button.addEventListener('click', () => {
      scrollToTop(1300); // 1300ms = 1.3s
    });
  
    button.addEventListener('click', () => {
      scrollToTop(1300); // 1300ms = 1.3s
    });
  
    function scrollToTop(duration) {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  
      window.scrollTo({ top: 0 });
  
      document.documentElement.animate([
        { scrollTop: scrollTop },
        { scrollTop: 0 }
      ], {
        duration: duration,
        easing: 'ease-in-out',
        fill: 'forwards'
      });
    }

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



document.addEventListener('DOMContentLoaded', () => {

  gsap.registerPlugin(ScrollTrigger);

  const leftSlides = document.querySelectorAll('.left-slide');
  const rightSlide = document.querySelector('.right-slide');

  // Animate left slides
  leftSlides.forEach((div) => {
    gsap.fromTo(div, 
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: div,
          start: "top bottom", // Starts when the top of the div enters the bottom of the viewport
          end: "top center",   // Ends when the top of the div reaches the center of the viewport
          scrub: true,         // Ties animation progress to scroll position
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  // Animate right slide
  gsap.fromTo(rightSlide,
    { x: 100, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: rightSlide,
        start: "top bottom",
        end: "top center",
        scrub: true,
        toggleActions: "play none none reverse"
      }
    }
  );

            // map
            var map = L.map('map').setView([34.230991, -3.978346], 15);
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href=\"https://mz-polyservices.github.io/fr/\" >MzPolyservices</a>'
            }).addTo(map);
            var googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
                maxZoom: 20,
                subdomains:['mt0','mt1','mt2','mt3'],
                scrollWheelZoom: false
            });
            googleStreets.addTo(map);
            L.marker([34.230991, -3.978346]).addTo(map).bindPopup('Bienvenue chez Mziouka!').openPopup();

            $('.leaflet-control-attribution a:first, .leaflet-control-attribution span:first').hide();
            $('.leaflet-top').addClass('leaflet-bottom');
            $('.leaflet-top').removeClass('leaflet-top');
            
  $('#trans').height($('#fourth-section').height());


  $(document).ready(function() {
      // Function to check if the device is a desktop
      function isDesktop() {
          return !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
      }

      // If it's a desktop, show the message
      if (isDesktop()) {
          $('#desktop-message').show();
      }
  });
  //stop the loader
  $(document).ready(function () {
    setTimeout(function() { 
        $('#loader').fadeOut(); 
    }, 2500);
  });
});
