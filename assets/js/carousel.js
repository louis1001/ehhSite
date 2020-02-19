$(document).ready(function(){
    $('#countries-elements').slick({
        dots: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        slidesToShow: 5,
        prevArrow: '#countries-controls .prev',
        nextArrow: '#countries-controls .next',
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 2048,
                settings: {
                    slidesToShow: 4,
                    infinite: true,
                }
            },
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    })
})