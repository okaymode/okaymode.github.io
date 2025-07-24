(function ($) {
    "use strict";
    // Scroll to demos
    if ($('.scroll-down-demo').length > 0) {
        $('.scroll-down-demo').on('click', function (e) {
            e.preventDefault();
            var href = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(href).offset().top - 120
            }, 1000);
        });
    }
    // Scroll to catagories
    if ($('.scroll-down-catagories').length > 0) {
        $('.scroll-down-catagories').on('click', function (e) {
            e.preventDefault();
            var href = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(href).offset().top - 100
            }, 2000);
        });
    }
    // menu-fixed-top///
    if ($('.main-header').length > 0) {
        var fixed_top = $(".main-header");
        $(window).on("scroll", function () {
            if ($(this).scrollTop() > 20) {
                fixed_top.addClass("menu-fixed animated thz-SlideInDown");
                fixed_top.removeClass("slideInUp");
                $("body").addClass("body-padding");
            } else {
                fixed_top.removeClass("menu-fixed thz-SlideInDown");
                fixed_top.addClass("slideInUp");
                $("body").removeClass("body-padding");
            }
        });
    }
    // Swiper-slider//
    var mySwiper = new Swiper('.swiper', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 500,
            modifier: 1,
            slideShadows: true,
        },
        loop: true,
        speed: 1000,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        keyboard: {
            enabled: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2.5,
            },
        }
    })
    // counterUp///
    if ($('.counter').length > 0) {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    }
    // wow-js-active//
    new WOW().init();
    // mobile menu//
    var tpMenuWrap = $('.mobile-menu-active > ul').clone();
    var tpSideMenu = $('.offcanvas-menu nav');
    tpSideMenu.append(tpMenuWrap);
    if ($(tpSideMenu).find('.submenu, .mega-menu').length != 0) {
        $(tpSideMenu).find('.submenu, .mega-menu').parent().append
            ('<button class="menu-close"><i class="fi-chevron-right"></i></button>');
    }
    var sideMenuList =
        $('.offcanvas-menu nav > ul > li button.menu-close, .offcanvas-menu nav > ul li.has-dropdown > a');
    $(sideMenuList).on('click', function (e) {
        e.preventDefault();
        if (!($(this).parent().hasClass('active'))) {
            $(this).parent().addClass('active');
            $(this).siblings('.submenu, .mega-menu').slideDown();
        } else {
            $(this).siblings('.submenu, .mega-menu').slideUp();
            $(this).parent().removeClass('active');
        }
    });
    // offcanvas
    $(".offcanvas-open-btn").on("click", function () {
        $(".offcanvas-area").addClass("opened");
        $(".body-overlay").addClass("opened");
    });
    $(".offcanvas-close-btn").on("click", function () {
        $(".offcanvas-area").removeClass("opened");
        $(".body-overlay").removeClass("opened");
    });
    // // 09. Body overlay Js
    $(".body-overlay").on("click", function () {
        $(".offcanvas-area").removeClass("opened");
        $(".body-overlay").removeClass("opened");
    });
})(jQuery);