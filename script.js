  // Configuración inicial del carrusel
  $(document).ready(function () {
      $('.center').slick({
          autoplay: true,
          autoplaySpeed: 2000,
          centerMode: true,
          arrows: false,
          slidesToShow: 1,
          responsive: [
              {
                  breakpoint: 768,
                  settings: {
                      arrows: false,
                      centerMode: true,
                      centerPadding: '0px',
                      slidesToShow: 1
                  }
              },
              {
                  breakpoint: 480,
                  settings: {
                      arrows: false,
                      centerMode: true,
                      centerPadding: '0px',
                      slidesToShow: 3
                  }
              }
          ]
      });
  });
  AOS.init();