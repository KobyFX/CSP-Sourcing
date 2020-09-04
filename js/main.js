/** First Slider **/
$('.slider-one')
    .not(".slick-intialized")
    .slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        prevArrow: ".site-slider .slider-btn .prev",
        nextArrow: ".site-slider .slider-btn .next",
    });



var Swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    visibilityFullFit: true,
    loop: true,
    autoplay: 4000,
    slidesPerView: 5,
    grabCursor: true,
    autoplayDisableOnInteraction: false,
    speed: 2000,
    breakpoints: {
        480: {
            slidesPerView: 1
        },
        740: {
            slidesPerView: 2
        },
        960: {
            slidesPerView: 3
        },
        1280: {
            slidesPerView: 4
        }
    }
})