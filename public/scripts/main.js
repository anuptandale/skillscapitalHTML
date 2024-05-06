document.addEventListener("DOMContentLoaded", function() {
  // Code that depends on jQuery can go here
  provideSlider();
  provideSlider2();
});
function provideSLider() {
      $('.homeSearchSlider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        mobileFirst: true,
        infinite: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    });
}

function provideSLider2() {
      $('.sapSearchSlider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        infinite: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    });
}