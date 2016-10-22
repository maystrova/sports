$(document).ready(function() {
    $('.sports-gallary').owlCarousel({
        loop: true,
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            768: {
                items: 4,
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