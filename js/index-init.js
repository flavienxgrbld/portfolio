// Index page — Swiper initializations, WOW.js init, parallax scroll, slide height normalization
(function() {
    'use strict';

    new WOW().init();

    var swiperBanner = new Swiper(".indexbanner .swiper-container", {
        speed: 800,
        navigation: {
            nextEl: ".indexbanner .swiper-button-next",
            prevEl: ".indexbanner .swiper-button-prev",
        },
        pagination: {
            el: ".indexbanner .swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        on: {
            init: function() {
                $(".indexbanner .swiper-pagination .swiper-pagination-bullet-active").addClass("cur").siblings().removeClass("cur");
            },
            slideChangeTransitionEnd: function() {
                $(".indexbanner .swiper-pagination .swiper-pagination-bullet-active").addClass("cur").siblings().removeClass("cur");
            },
        },
    });

    $(window).scroll(function() {
        var npos    = $(window).scrollTop();
        var mHei    = $(".subject").offset().top;
        var TextHei = $(".subject").height();
        var SH      = $(window).height();
        var SW      = $(window).width();
        if (npos > (mHei - SH * 0.5)) {
            var num = ((npos - mHei + SH * 0.5) / TextHei) * 80;
            if (num <= 0) { num = 0; }
            else if (num > 100) { num = 100; }
            $(".subject .t1").css("background-size", num + "% 100%");
        } else {
            $(".subject .t1").css("background-size", "0% 100%");
        }

        var mHei2 = $(".addCaseC-c").offset().top;
        if (npos > (mHei2 - SH * 0.5)) {
            var wyHei  = (npos - mHei2 + SH * 0.5) * 0.6;
            var wyHeia = wyHei;
            var wyHeib = wyHei - 260;
            if (SW < 1100) {
                wyHeia = wyHeia * 0.5;
                wyHeib = wyHeib * 0.5;
            }
            $(".subject").css("bottom", wyHeib + "px");
        }
    });

    var swiperB = new Swiper(".indexB .indexb-top .swiper-container", {
        speed: 800,
        spaceBetween: 150,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        on: {
            init: function(swiper) {
                var activeIndex = swiper.activeIndex;
                $(".indexb-bottom li").eq(activeIndex).addClass("cur").siblings().removeClass("cur");
            },
            slideChangeTransitionEnd: function() {
                var activeIndex = this.activeIndex;
                $(".indexb-bottom li").eq(activeIndex).addClass("cur").siblings().removeClass("cur");
            },
        },
    });

    $('body').addClass("hide");

    var swiperE = new Swiper(".indexE .swiper-container", {
        speed: 800,
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: ".indexE .swiper-button-next",
            prevEl: ".indexE .swiper-button-prev",
        },
        breakpoints: {
            1101: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
        },
    });

    var swiperA1 = new Swiper(".two-a1", {
        loop: true,
        speed: 80000,
        simulateTouch: false,
        slidesPerView: 1,
        freeMode: true,
        spaceBetween: 0,
        slidesPerGroup: 1,
        grabCursor: true,
        autoplay: {
            delay: 1,
            disableOnInteraction: false,
        },
    });

    var swiperA2 = new Swiper(".two-a2", {
        loop: true,
        speed: 80000,
        simulateTouch: false,
        slidesPerView: 1,
        freeMode: true,
        spaceBetween: 0,
        slidesPerGroup: 1,
        grabCursor: true,
        autoplay: {
            delay: 1,
            disableOnInteraction: false,
            reverseDirection: true,
        },
    });

    // Normalize banner slide heights
    document.addEventListener('DOMContentLoaded', function() {
        var slides = document.querySelectorAll('.indexbanner .swiper-slide');
        var maxHeight = 0;
        slides.forEach(function(slide) {
            var height = slide.offsetHeight;
            if (height > maxHeight) { maxHeight = height; }
        });
        slides.forEach(function(slide) {
            slide.style.height = maxHeight + 'px';
        });
    });

    // Normalize indexE slide link heights
    function setMaxHeight() {
        var slides = document.querySelectorAll('.indexE .indexe-bottom .swiper-container .swiper-slide a');
        var maxHeight = 0;
        slides.forEach(function(slide) {
            var height = slide.offsetHeight;
            if (height > maxHeight) { maxHeight = height; }
        });
        slides.forEach(function(slide) {
            slide.style.height = maxHeight + 'px';
        });
    }

    document.addEventListener('DOMContentLoaded', setMaxHeight);
    window.addEventListener('resize', setMaxHeight);
})();
