$(document) .ready(function(){
    // $(".tes-active").owlCarousel({
    //     loop: true,
    //     // nav:true,
    //     navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
    //     responsive: {
    //       0: {
    //         items: 1,
    //       },
    //       600: {
    //         items: 1,
    //       },
    //       1000: {
    //         items: 1,
    //       },
    //     },
    //   });


    // $('.testi-active').slick({
    //     dots: true,
    //     infinite: true,
    //     speed: 300,
    //     slidesToShow: 1,
    //     adaptiveHeight: true
    //   });


      $('.testi-active').slick({
        infinite: true,
        slidesToShow: 1,
        arrows: false,
        // dots: true,
        autoplay: true,
        slidesToScroll: 1
      });

        // counter up
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });


        // portfolio section start

        $(".grid").imagesLoaded(function () {
          var $grid = $(".grid").isotope({
            // options
            layoutMode: "fitRows",
          });
          // filter items on button click
          $(".portfolio_button").on("click", "button", function () {
            var filterValue = $(this).attr("data-filter");
            $grid.isotope({ filter: filterValue });
          });
      
          //for menu active class
          $(".portfolio_button button").on("click", function (event) {
            $(this).siblings(".active").removeClass("active");
            $(this).addClass("active");
            event.preventDefault();
          });
        });
 
})