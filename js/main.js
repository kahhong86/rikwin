$(document).ready(function(){
    // Initialize Swiper
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1.2,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            320: { slidesPerView: 1.1 },
            480: { slidesPerView: 1.1 }
        }
    });

    document.querySelector('.mobile-hamburger').addEventListener('click', function() {
        document.querySelector('#main-navigation').classList.toggle('active');
        document.querySelector('.mobile-hamburger').classList.toggle('active');
    });
});
