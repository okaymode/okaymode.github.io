(function ($) {
  "use strict";
  // Loder  //
  $(window).on('load', function () {
    setTimeout(function () { // allowing 3 secs to fade out loader
      $('.loader-wrapper').fadeOut('slow');
    }, 3000);
  });
  // mobile menu//
  var tpMenuWrap = $('.thz-mobile-menu-active > ul').clone();
  var tpSideMenu = $('.thz-offcanvas-menu nav');
  tpSideMenu.append(tpMenuWrap);
  if ($(tpSideMenu).find('.thz-submenu, .thz-mega-menu').length != 0) {
    $(tpSideMenu).find('.thz-submenu, .thz-mega-menu').parent().append
      ('<button class="thz-menu-close"><i class="fi-chevron-right"></i></button>');
  }
  var sideMenuList =
    $('.thz-offcanvas-menu nav > ul > li button.thz-menu-close, .thz-offcanvas-menu nav > ul li.has-dropdown > a');
  $(sideMenuList).on('click', function (e) {
    e.preventDefault();
    if (!($(this).parent().hasClass('active'))) {
      $(this).parent().addClass('active');
      $(this).siblings('.thz-submenu, .thz-mega-menu').slideDown();
    } else {
      $(this).siblings('.thz-submenu, .thz-mega-menu').slideUp();
      $(this).parent().removeClass('active');
    }
  });
  // offcanvas
  $(".thz-offcanvas-open-btn").on("click", function () {
    $(".thz-offcanvas-area").addClass("opened");
    $(".body-overlay").addClass("opened");
  });
  $(".thz-offcanvas-close-btn").on("click", function () {
    $(".thz-offcanvas-area").removeClass("opened");
    $(".body-overlay").removeClass("opened");
  });
  // // 09. Body overlay Js
  $(".body-overlay").on("click", function () {
    $(".thz-offcanvas-area").removeClass("opened");
    $(".body-overlay").removeClass("opened");
  });
  // modal-start///
  $("[data-toggle='modal']").on("click", function () {
    $("#popup").fadeIn();
  });
  $("[data-close]").on("click", function () {
    $(this).parents(".modal").fadeOut();
  });
  // menu-fixed-top///
  if ($('.main-header, .main-header-tow, .main-header-five').length > 0) {
    var fixed_top = $(".main-header, .main-header-tow, .main-header-five");
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
  // select2//
  if ($('.select').length > 0) {
    $(".select").select2({});
  }
  // wow-js//
  if ($('.wow').length > 0) {
    new WOW().init();
  }
  // testimonial-active//
  if ($('.slider-for').length > 0) {
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      infinite: true,
      fade: false,
      asNavFor: '.slider-nav'
    });
  }
  if ($('.slider-nav').length > 0) {
    $('.slider-nav').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: false,
      centerMode: true,
      infinite: true,
      fade: true,
      initialSlide: 0,
      focusOnSelect: true,
      centerPadding: '0px',
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"><i class="fi-arrow-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fi-arrow-right"></i></button>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }
      ]
    });
  }
  // testimonial-2-active//
  if ($('.testimonial-2-active').length > 0) {
    $('.testimonial-2-active').owlCarousel({
      loop: true,
      nav: true,
      navText: ['<i class="fi-arrow-left"></i>', '<i class="fi-arrow-right"></i>'],
      dots: false,
      items: 3,
      margin: 30,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        576: {
          items: 1,
          nav: false
        },
        768: {
          items: 2
        },
        992: {
          items: 2,
          nav: true
        },
        1200: {
          items: 3
        }
      }
    })
  }
  // testimonial-3-active//
  if ($('.testimonial-3-active').length > 0) {
    $('.testimonial-3-active').owlCarousel({
      autoplay: false,
      loop: true,
      nav: false,
      navText: ['<i class="fi-chevron-left"></i>', '<i class="fi-chevron-right"></i>'],
      dots: false,
      items: 1,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        576: {
          items: 1
        },
        768: {
          items: 1
        },
        992: {
          items: 1
        },
        1200: {
          items: 1
        },
        1400: {
          items: 1
        }
      }
    })
  }
  // testimonial-2-active//
  if ($('.testimonial-4-active').length > 0) {
    $('.testimonial-4-active').owlCarousel({
      loop: true,
      nav: true,
      navText: ['<i class="fi-arrow-left"></i>', '<i class="fi-arrow-right"></i>'],
      dots: false,
      items: 3,
      margin: 48,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        576: {
          items: 1,
          nav: false
        },
        768: {
          items: 2
        },
        992: {
          items: 2,
          nav: true
        },
        1200: {
          items: 3
        }
      }
    })
  }
  // client-wraper-active//
  if ($('.client-wraper-active').length > 0) {
    $('.client-wraper-active').owlCarousel({
      loop: true,
      nav: false,
      dots: false,
      items: 6,
      responsive: {
        0: {
          items: 2,
          margin: 0
        },
        450: {
          items: 3,
          margin: 80
        },
        576: {
          items: 4,
          margin: 90
        },
        768: {
          items: 6,
          margin: 45
        },
        992: {
          margin: 80
        },
        1200: {
          margin: 130
        },
        1400: {
          margin: 170
        }
      }
    })
  }
  // categories-active//
  if ($('.categories-active').length > 0) {
    $('.categories-active').owlCarousel({
      loop: true,
      nav: true,
      navText: ['<i class="fi-arrow-left"></i>', '<i class="fi-arrow-right"></i>'],
      dots: false,
      items: 8,
      margin: 20,
      responsive: {
        0: {
          items: 2,
          nav: false
        },
        450: {
          items: 2,
          nav: false
        },
        576: {
          items: 3,
          nav: false
        },
        768: {
          items: 4
        },
        992: {
          items: 5
        },
        1200: {
          items: 7
        },
        1400: {
          items: 8
        }
      }
    })
  }
  // counterUp//
  if ($('.counter').length > 0) {
    $('.counter').counterUp({
      delay: 10,
      time: 1000
    });
  }
  // blog-active//
  if ($('.blog-active').length > 0) {
    $('.blog-active').owlCarousel({
      autoplay: false,
      center: false,
      items: 4,
      margin: 30,
      loop: true,
      nav: true,
      navText: ['<i class="fi-arrow-left"></i>', '<i class="fi-arrow-right"></i>'],
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        576: {
          items: 2,
          nav: false
        },
        768: {
          items: 2,
          nav: false
        },
        992: {
          items: 4
        },
        1200: {
          items: 4
        }
      }
    });
  }
  // team-active//
  if ($('.team-active').length > 0) {
    $('.team-active').owlCarousel({
      autoplay: false,
      center: false,
      items: 3,
      margin: 30,
      dots: false,
      loop: true,
      nav: true,
      navText: ['<i class="fi-arrow-left"></i>', '<i class="fi-arrow-right"></i>'],
      responsive: {
        0: {
          items: 1,
          nav: false,
          dots: false
        },
        576: {
          items: 2,
          nav: false,
          dots: false
        },
        768: {
          items: 2,
          nav: true
        },
        992: {
          items: 2
        },
        1200: {
          items: 3
        }
      }
    });
  }
  // team-2-active//
  if ($('.team-2-active').length > 0) {
    $('.team-2-active').owlCarousel({
      autoplay: false,
      center: false,
      items: 4,
      margin: 38,
      loop: true,
      dots: true,
      nav: false,
      navText: ['<i class="fi-arrow-left"></i>', '<i class="fi-arrow-right"></i>'],
      responsive: {
        0: {
          items: 1,
          nav: false,
          dots: false
        },
        576: {
          items: 2,
          nav: false,
          dots: false,
          margin: 20
        },
        768: {
          items: 2,
          nav: false,
          dots: true
        },
        992: {
          items: 4,
          margin: 20
        },
        1200: {
          items: 4,
          margin: 38
        }
      }
    });
  }
  // properties-active//
  if ($('.properties-active').length > 0) {
    $('.properties-active').owlCarousel({
      autoplay: false,
      center: false,
      items: 4,
      margin: 32,
      loop: true,
      dots: true,
      nav: false,
      navText: ['<i class="fi-arrow-left"></i>', '<i class="fi-arrow-right"></i>'],
      responsive: {
        0: {
          items: 1,
          nav: false,
          dots: false
        },
        576: {
          items: 2,
          nav: false,
          dots: false
        },
        768: {
          items: 2,
          nav: false,
          dots: false
        },
        992: {
          items: 4,
          margin: 20
        },
        1200: {
          items: 4,
          margin: 20
        },
        1400: {
          items: 4,
          margin: 32
        }
      }
    });
  }
  // propety-type-active//
  if ($('.propety-type-active').length > 0) {
    $('.propety-type-active').owlCarousel({
      loop: true,
      autoplay: true,
      nav: false,
      dots: true,
      items: 5,
      margin: 30,
      responsive: {
        0: {
          items: 1,
          nav: false,
          dots: false
        },
        450: {
          items: 1,
          nav: false,
          dots: false
        },
        576: {
          items: 2,
          dots: false
        },
        768: {
          items: 3,
          dots: true
        },
        992: {
          items: 4
        },
        1200: {
          items: 5
        }
      }
    })
  }
  // product-active//
  if ($('.product-active').length > 0) {
    $('.product-active').owlCarousel({
      autoplay: false,
      center: false,
      items: 4,
      margin: 24,
      loop: true,
      dots: true,
      nav: false,
      navText: ['<i class="fi-arrow-left"></i>', '<i class="fi-arrow-right"></i>'],
      responsive: {
        0: {
          items: 1,
          nav: false,
          dots: false
        },
        576: {
          items: 2,
          nav: false,
          dots: false
        },
        768: {
          items: 2,
          nav: false,
          dots: false
        },
        992: {
          items: 4
        },
        1200: {
          items: 4,
          margin: 20
        },
        1400: {
          items: 4,
          margin: 32
        }
      }
    });
  }
  // featured-list-active//
  if ($('.featured-list-active').length > 0) {
    $('.featured-list-active').owlCarousel({
      autoplay: false,
      center: false,
      items: 4,
      margin: 38,
      loop: true,
      dots: false,
      nav: true,
      navText: ['<i class="fi-arrow-left"></i>', '<i class="fi-arrow-right"></i>'],
      responsive: {
        0: {
          items: 1,
          nav: false,
          dots: false
        },
        576: {
          items: 2,
          nav: false,
          dots: false,
          margin: 20
        },
        768: {
          items: 2,
          nav: false,
          dots: false
        },
        992: {
          items: 4,
          margin: 20
        },
        1200: {
          items: 4,
          margin: 38
        }
      }
    });
  }
  // features-active//
  if ($('.features-active').length > 0) {
    $('.features-active').owlCarousel({
      autoplay: false,
      center: false,
      items: 3,
      margin: 32,
      loop: true,
      dots: true,
      nav: false,
      navText: ['<i class="fi-arrow-left"></i>', '<i class="fi-arrow-right"></i>'],
      responsive: {
        0: {
          items: 1,
          nav: false,
          dots: false
        },
        576: {
          items: 1,
          nav: false,
          dots: false
        },
        768: {
          items: 2,
          nav: false,
          dots: false
        },
        992: {
          items: 2,
          dots: false
        },
        1200: {
          items: 3,
          margin: 32
        }
      }
    });
  }
  // agent-active//
  if ($('.agent-active').length > 0) {
    $('.agent-active').owlCarousel({
      autoplay: false,
      center: false,
      items: 4,
      margin: 30,
      loop: true,
      nav: true,
      navText: ['<i class="fi-arrow-left"></i>', '<i class="fi-arrow-right"></i>'],
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        450: {
          items: 2,
          nav: false
        },
        576: {
          items: 3,
          nav: false
        },
        768: {
          items: 2
        },
        992: {
          items: 4
        }
      }
    });
  }
  // .agent-2-active//
  if ($('.agent-2-active').length > 0) {
    $('.agent-2-active').owlCarousel({
      autoplay: false,
      center: false,
      items: 4,
      margin: 32,
      loop: true,
      dots: true,
      nav: false,
      navText: ['<i class="fi-arrow-left"></i>', '<i class="fi-arrow-right"></i>'],
      responsive: {
        0: {
          items: 1,
          nav: false,
          dots: false
        },
        576: {
          items: 2,
          nav: false,
          dots: false
        },
        768: {
          items: 2,
          nav: false,
          dots: false
        },
        992: {
          items: 4,
          margin: 20
        },
        1200: {
          items: 4,
          margin: 32
        },
        1400: {
          items: 4,
          margin: 52
        }
      }
    });
  }
  // catagories-2-active//
  if ($('.catagories-2-active').length > 0) {
    $('.catagories-2-active').owlCarousel({
      autoplay: false,
      center: false,
      items: 5,
      margin: 20,
      loop: true,
      nav: true,
      navText: ['<i class="fi-arrow-left"></i>', '<i class="fi-arrow-right"></i>'],
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        450: {
          items: 1,
          nav: false
        },
        576: {
          items: 2,
          nav: false
        },
        768: {
          items: 3,
          nav: false
        },
        992: {
          items: 4
        },
        1200: {
          items: 4,
          margin: 50
        },
        1400: {
          items: 5
        }
      }
    });
  }
  // categories-3-active//
  if ($('.categories-3-active').length > 0) {
    $('.categories-3-active').owlCarousel({
      loop: true,
      nav: true,
      navText: ['<i class="fi-arrow-left"></i>', '<i class="fi-arrow-right"></i>'],
      dots: false,
      items: 6,
      margin: 20,
      responsive: {
        0: {
          items: 2,
          nav: false
        },
        450: {
          items: 2,
          nav: false
        },
        576: {
          items: 3,
          nav: true
        },
        768: {
          items: 4,
          nav: true
        },
        992: {
          items: 5
        },
        1200: {
          items: 6
        }
      }
    })
  }
  // slide-active//
  if ($('.slide-active').length > 0) {
    $('.slide-active').owlCarousel({
      autoplay: false,
      loop: true,
      nav: true,
      navText: ['<i class="fi-chevron-left"></i>', '<i class="fi-chevron-right"></i>'],
      dots: false,
      items: 1
    })
  }
  // only-desktop-device-slide start///
  if ($('.properties-location-active').length > 0) {
    var $propertiesSlider = $(".properties-location-active");
    $(window).resize(function () {
      showPropertiesSlider();
    });
    function showPropertiesSlider() {
      if ($propertiesSlider.data("owlCarousel") !== "undefined") {
        if (window.matchMedia('(min-width: 992px)').matches) {
          initialPropertiesSlider();
        } else {
          destroyPropertiesSlider();
        }
      }
    }
    showPropertiesSlider();
    function initialPropertiesSlider() {
      $propertiesSlider.addClass("owl-carousel").owlCarousel({
        items: 1,
        margin: 40,
        dots: true,
        loop: true,
        autoplay: false,
        autoplayTimeout: 2000,
        smartSpeed: 1000
      });
    }
    function destroyPropertiesSlider() {
      $propertiesSlider.trigger("destroy.owl.carousel").removeClass("owl-carousel");
    }
  }
  // glightbox-popup///
  if ($('.glightbox').length > 0) {
    const lightbox = GLightbox({
      openEffect: 'fade',
      closeEffect: 'fade',
      slideEffect: 'fade',
      closeOnOutsideClick: false,
      touchNavigation: true,
      loop: true
    });
    $(document).on('click', function (event) {
      var $container = $('.gslide'); // The .gslide element
      const $glightboxElement = $('.glightbox-container .gslider');
      // Check if the click was on the .gclose button or outside of .gslide
      if ($(event.target).is('.gclose') || (!$container.is(event.target) && !$container.has(event.target).length)) {
        if ($glightboxElement.length) {
          $glightboxElement.css({
            'background-color': 'transparent'
          });
        }
      }
    });
  }
  // lightbox-video-popup//
  if ($('.video-view').length > 0) {
    const customLightboxHTML = `<div id="glightbox-body" class="glightbox-container lightbox-video">
      <div class="gloader visible"></div>
      <div class="goverlay"></div>
      <div class="gcontainer lightbox-video-wrap">
          <div id="glightbox-slider" class="gslider"></div>
          <button class="gnext gbtn" tabindex="0" aria-label="Next" data-customattribute="example">{nextSVG}</button>
          <button class="gprev gbtn" tabindex="1" aria-label="Previous">{prevSVG}</button>
          <button class="gclose gbtn" tabindex="2" aria-label="Close">{closeSVG}</button>
      </div>
    </div>`;
    var lightboxVideo = GLightbox({
      selector: '.video-view',
      touchNavigation: false,
      lightboxHTML: customLightboxHTML
    });
  }
  // slider-range//
  if ($('.slider-range').length > 0) {
    $(".slider-range").slider({
      range: true,
      min: 0,
      max: 3700,
      values: [230, 3500],
      slide: function (event, ui) {
        $(".amount").val("$" + ui.values[0] + " to $" + ui.values[1]);
      }
    });
    $(".amount").val("$" + $(".slider-range").slider("values", 0) +
      " to $" + $(".slider-range").slider("values", 1));
  }
  //tabs//
  if ($('.thz-filter-tab li a').length > 0) {
    $('.thz-filter-tab li a').on("click", function (e) {
      e.preventDefault();
      var t = $(this).attr('id');
      if (!$(this).hasClass('active')) {
        $('.thz-filter-tab li a').removeClass('active');
        $(this).addClass('active');
        $('.thz-ftab-body').addClass('hidden');
        $('#' + t + '-body').removeClass('hidden');
      }
    });
  }
  //tabs-2//
  if ($('#filter-tab li a').length > 0) {
    $('#filter-tab li a').on("click", function (e) {
      e.preventDefault();
      var t = $(this).attr('id');
      if (!$(this).hasClass('active')) {
        $('#filter-tab li a').removeClass('active');
        $(this).addClass('active');
        $('.tab-body').addClass('hidden');
        $('#' + t + '-body').removeClass('hidden');
      }
    });
  }
  // slideDown/slideUp//
  $("#bar").on("click", function () {
    $(this).addClass('hidden');
    $("#cross").removeClass('hidden');
    $("#price-range").slideDown("slow");
    $("#cross").on("click", function () {
      $(this).addClass('hidden');
      $("#price-range").slideUp("slow");
      $("#bar").removeClass("hidden");
    });
  });
  // slideDown/slideUp--2//
  $("#bar-2").on("click", function () {
    $(this).addClass('hidden');
    $("#cross-2").removeClass('hidden');
    $("#price-range-2").slideDown("slow");
    $("#cross-2").on("click", function () {
      $(this).addClass('hidden');
      $("#price-range-2").slideUp("slow");
      $("#bar-2").removeClass("hidden");
    });
  });
  // slideDown/slideUp--3//
  $("#bar-3").on("click", function () {
    $(this).addClass('hidden');
    $("#cross-3").removeClass('hidden');
    $("#price-range-3").slideDown("slow");
    $("#cross-3").on("click", function () {
      $(this).addClass('hidden');
      $("#price-range-3").slideUp("slow");
      $("#bar-3").removeClass("hidden");
    });
  });
  //fadetoggle checkbox//
  $("#certain").on("click", function () {
    $("#checkbox").fadeToggle('slow');
  });
  //fadetoggle checkbox--2//
  $("#certain-2").on("click", function () {
    $("#checkbox-2").fadeToggle('slow');
  });
  //fadetoggle checkbox--2//
  $("#certain-3").on("click", function () {
    $("#checkbox-3").fadeToggle('slow');
  });
  //Back-to-top-area-start-here
  if ($('.scroll-up path').length > 0) {
    var scrollPath = document.querySelector(".scroll-up path");
    var pathLength = scrollPath.getTotalLength();
    scrollPath.style.transition = scrollPath.style.WebkitTransition = "none";
    scrollPath.style.strokeDasharray = pathLength + " " + pathLength;
    scrollPath.style.strokeDashoffset = pathLength;
    scrollPath.getBoundingClientRect();
    scrollPath.style.transition = scrollPath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";
    var updatescroll = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var scroll = pathLength - (scroll * pathLength) / height;
      scrollPath.style.strokeDashoffset = scroll;
    };
    updatescroll();
    $(window).scroll(updatescroll);
    var offset = 50;
    var duration = 950;
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > offset) {
        $(".scroll-up").addClass("active-scroll");
      } else {
        $(".scroll-up").removeClass("active-scroll");
      }
    });
    $(".scroll-up").on("click", function (event) {
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: 0
        },
        duration
      );
      return false;
    });
  }
})(jQuery);