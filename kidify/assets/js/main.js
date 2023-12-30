(function ($) {
    "use strict";

    $.fn.ux_multiply = function (numCopies) {
        var newElements = this.clone();
        for (var i = 1; i < numCopies; i++) {
            newElements = newElements.add(this.clone());
        }
        return newElements;
    };

    $(document).on("ready", function () {
        // Begin Tabs
        $(".tabs-wrap").each(function () {
            var nav = $(this).find(".tab-nav");
            var tab_content = $(this).find(".tab-content");
            $(this).on("click touchstart", ".tab-nav", function (e) {
                e.preventDefault();
                var activeTab = $(this).attr("href");
                nav.not(this).removeClass("is-active");
                $(this).addClass("is-active");
                tab_content.removeClass("is-active");
                $(activeTab).addClass("is-active");
            });
        });
        // End Tabs

        // Begin Canvas Menu
        $(document).on("click touchstart", ".canvas-menu", function () {
            $("body").addClass("is-active");
        });

        $(".site-menu").on("click touchstart", ".overlay", function () {
            $("body").removeClass("is-active");
        });
        // End Canvas Menu

        // Begin Table
        $("table").on("click touchstart", ".load-more a", function (e) {
            e.preventDefault();
            var $rows = $(this).closest("table").find("tbody tr");
            var lastActiveIndex = $rows.filter(".is-active:last").index();
            $rows
                .filter(":lt(" + (lastActiveIndex + 5) + ")")
                .addClass("is-active");

            // hide the button when all elements visible
            $(this)
                .closest("tr")
                .toggle($rows.filter(":hidden").length !== 0);
        });
        // End Table

        // Begin Scroll Top
        $(".backtotop").each(function () {
            var $scrollUp = $(this);
            var lastScrollTop = 0;
            $(window).on("scroll", function () {
                var st = $(this).scrollTop();
                if (st > lastScrollTop) {
                    $scrollUp.removeClass("show");
                } else {
                    if ($(window).scrollTop() > 200) {
                        $scrollUp.addClass("show");
                    } else {
                        $scrollUp.removeClass("show");
                    }
                }
                lastScrollTop = st;
            });

            $scrollUp.on("click touchstart", function (evt) {
                $("html, body").animate({ scrollTop: 0 }, 600);
                evt.preventDefault();
            });
        });
        // End Scroll Top

        // Begin go to div
        $(document).on("click touchstart", "gotodiv", function (e) {
            e.preventDefault();
            var href = $(this).attr("href");
            $("html,body").animate(
                {
                    scrollTop: $(href).offset().top,
                },
                "slow"
            );
        });
        // End go to div

        // Begin Try For Free
        $(".tryForm").on("submit", function (e) {
            e.preventDefault();
            var shop = $(this).find('input[name="shop"]').val();
            if (shop.search(".myshopify.com") < 0) {
                shop = shop + ".myshopify.com";
                $(this).find('input[name="shop"]').val(shop);
                e.currentTarget.submit();
            }
        });
        // End Try For Free

        var offset = 0,
            height = 0;

        if ( $( 'header.site-header' ).length > 0 ) {
            offset = $( 'header.site-header' ).offset().top;
            height = $( 'header.site-header' ).outerHeight();
        }

        var lastScroll = 0;

        $( window ).on('scroll', function() {
            var currentScroll = $( window ).scrollTop();
            if ( currentScroll > lastScroll ) {
                $( 'header.site-header' ).removeClass( 'on-scroll' );
            } else {
                if ( currentScroll < offset + height + 100 ) {
                    $( 'header.site-header' ).removeClass( 'on-scroll' );
                }else{
                    $( 'header.site-header' ).addClass( 'on-scroll' );
                }
            }
            lastScroll = currentScroll;
        });

        const player = new Plyr('#player');
    });

    $(window).on("load", function () {
        // Begin Infinite Features
        $(".infinite-features").each(function () {
            var listWidth = 0;

            var item = $(this).find(".item");

            if (item.length > 0) {
                item.each(function () {
                    listWidth += $(this).innerWidth();
                });

                var mult = $(this).innerWidth() / listWidth;

                $(this).append('<div class="item-dup"></div>');

                if (mult > 0.5) {
                    $(this)
                        .find(".item-dup")
                        .append(item.ux_multiply(Math.ceil(mult)));
                } else {
                    $(this).find(".item-dup").append(item.ux_multiply(1));
                }

                $(this).css("width", listWidth);

                var itemcount = $(this).find(".item").length;
                var itemsize = listWidth / itemcount;

                var speed = $(this).data("speed");
                var duration = itemsize * 10;

                if (speed === 200) {
                    duration = 10;
                } else if (speed == 0) {
                    duration = 0;
                } else if (speed > 100) {
                    speed = speed - 100;
                    speed = (speed / 10) * itemsize;
                    duration = duration - speed;
                } else if (speed < 100) {
                    speed = 100 - speed;
                    speed = (speed / 10) * (itemsize * 8);
                    duration = duration + speed;
                }

                var speed = (itemcount * duration) / 1000;
                $(this).css("animation-duration", speed + "s");
            }
        });
        // End Infinite Features

        // Begin Isotope
        $(".isotope").each(function () {
            var _this = $(this);
            var grid = _this.find(".grid");
            var button = _this.find("button");
            var $grid = grid.isotope({
                itemSelector: ".element-item",
                masonry: {
                    columnWidth: ".grid-sizer",
                },
            });
            button.on("click touchstart", function () {
                button.not(this).removeClass("is-active");
                $(this).addClass("is-active");
                var filterValue = $(this).attr("data-filter");
                $grid.isotope({ filter: filterValue });
            });
        });
        // End Isotope

        // Begin Popup Video
        $(".popup-wrapper").each(function () {
            if ($(window).width() > 992) {
                var ww = $(window).width();
                var cw = $(this).closest(".container-lg").outerWidth();
                var w = (ww - cw) / 2;
                $(this).css("width", "calc(100% + " + w + "px)");
            }

            $(this).on("click touchstart", ".icon-popup svg", function (e) {
                e.preventDefault();
                var popup = $(this).closest(".icon-popup").data("popup");
                var iframe = $("#popup-wrap." + popup).find("iframe");
                var autoplayoff = iframe
                    .attr("src")
                    .replace("&autoplay=0", "&autoplay=1");
                $("#popup-wrap." + popup).addClass("is-active");
                iframe.attr("src", autoplayoff);
            });

            $(".popup-wrap").on(
                "click touchstart",
                ".overlay, .close",
                function (e) {
                    e.preventDefault();
                    var iframe = $(this).closest(".popup-wrap").find("iframe");
                    var autoplayoff = iframe
                        .attr("src")
                        .replace("&autoplay=1", "&autoplay=0");
                    $(this).closest(".popup-wrap").removeClass("is-active");
                    iframe.attr("src", iframe.attr("src"));
                    iframe.attr("src", autoplayoff);
                }
            );
        });
        // End Popup Video

        // Begin Builder
        $(".builder").each(function () {
            var h = $(this).outerHeight();
            $("#footer").css("margin-bottom", h + "px");
        });
        // End Builder
        
        // Begin Swiper Slider
        $(".uxp-swiper-slider").each(function () {
            const data = $(this);
            const direction = data.data("direction");
            const slide_center = data.data("slider-center")
                ? data.data("slider-center")
                : false;
            const slide_loop = data.data("slider-loop")
                ? data.data("slider-loop")
                : false;
            const gap_xl = data.data("gap-xl");
            const gap_md = data.data("gap-md");
            let xl = data.data("xl");
            let lg = data.data("lg");
            let md = data.data("md");
            let sm = data.data("sm");
            let xs = data.data("xs");
            let es = data.data("es");
            let pre_view = 1;
            if (es) {
                pre_view = es;
            }

            var swiper = new Swiper(this, {
                slidesPerView: pre_view,
                direction: direction,
                allowTouchMove: true,
                loop: slide_loop,
                centeredSlides: slide_center,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '"></span>';
                    },
                },
                breakpoints: {
                    0: {
                        slidesPerView: pre_view,
                        spaceBetween: gap_md,
                    },
                    575: {
                        slidesPerView: sm,
                        spaceBetween: gap_md,
                    },
                    768: {
                        slidesPerView: md,
                        spaceBetween: gap_xl,
                    },
                    992: {
                        slidesPerView: lg,
                        spaceBetween: gap_xl,
                    },
                    1200: {
                        slidesPerView: xl,
                        spaceBetween: gap_xl,
                    },
                },
            });
        });
        // End Swiper Slider
    });


    $(window).on("scroll", function () {
        $(".module-img").each(function () {
            if ($(this).hasClass("animate")) {
                var wh = $(window).outerHeight();
                var h = $(this).outerHeight();
                var stop = $(window).scrollTop();
                var otop = $(this).offset().top + h;
                if (otop >= stop) {
                    var percent =
                        1 + (10 - ((otop - stop) / otop) * 100) / 2 / 10;
                    var rotate =
                        (10 - ((otop - stop) / otop) * 100 - 1.5) * 2 - 0.5;
                    $(this).css(
                        "transform",
                        "translate3d(0px, 0px, 0px) scale3d(" +
                            percent +
                            ", " +
                            percent +
                            ", 1) rotateX(" +
                            rotate +
                            "deg) rotateY(0deg) rotateZ(" +
                            rotate +
                            "deg) skew(0deg)"
                    );
                }
            }
        });
    });
})(jQuery);
