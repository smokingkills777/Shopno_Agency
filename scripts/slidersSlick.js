$(document).ready(function(){
    $('.about__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        dots: true
    });

    $('.reviews__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        dots: true,
        responsive: [ 
            {
                breakpoint: 460,
                settings: {
                    arrows: false
                }
            }
        ]
    });
});