$(document).ready(function() {
    $('.sports-gallery').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            768: {
                items: 3,
                nav: false
            },
            992: {
                items: 5,
                nav: true,
                loop: false
            },
            1200: {
                items: 6,
                nav: true,
                loop: false
            }
        }
    });
    });

// каталог

$(document).ready(function() {
    $('.catalog-gallery').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            768: {
                items: 2,
                nav: false
            },
            992: {
                items: 3,
                nav: true,
                loop: false
            },
            1200: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    });
    });


// Поиск в десктопной версии
$( "#searchIcon" ).click(function() {
  $( "#searchArea" ).toggleClass( "md-none" );
});