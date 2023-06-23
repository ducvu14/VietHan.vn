// Animation on scroll
AOS.init({
    duration: 800,
    easing: "slide",
});

(function($) {
    "use strict";
    $(window).stellar({
        responsive: true,
        parallaxBackgrounds: true,
        parallaxElements: true,
        horizontalScrolling: false,
        hideDistantElements: false,
        scrollProperty: "scroll",
    });

    //   full height
    var fullHeight = function() {
        $(".js-fullheight").css("height", $(window).height());
        $(window).resize(function() {
            $(".js-fullheight").css("height", $(window).height());
        });
    };
    fullHeight(); //call that function

    // navbar scroll
    var scrollWindow = function() {
        $(window).scroll(function() {
            var $w = $(this),
                st = $w.scrollTop(),
                navbar = $(".ftco_navbar"),
                sd = $(".js-scroll-wrap");
            if (st > 150) {
                if (!navbar.hasClass("scrolled")) {
                    navbar.addClass("scrolled");
                }
            }
            if (st < 150) {
                if (navbar.hasClass("scrolled")) {
                    navbar.removeClass("scrolled sleep");
                }
            }

            if (st > 350) {
                if (!navbar.hasClass("awake")) {
                    navbar.addClass("awake");
                }
                if (sd.length > 0) {
                    sd.addClass("sleep");
                }
            }

            if (st < 350) {
                if (navbar.hasClass("awake")) {
                    navbar.removeClass("awake");
                    navbar.addClass("sleep");
                }
                if (sd.length > 0) {
                    sd.removeClass("sleep");
                }
            }
        });
    };
    scrollWindow();

    $.Scrollax();

    //   carousel
    var carousel = function() {
        $(".home-slider").owlCarousel({
            loop: true,
            autoplay: true,
            margin: 0,
            animateOut: "fadeOut",
            animateIn: "fadeIn",
            nav: true,
            dots: false,
            autoplayHoverPause: false,
            items: 1,
            navText: [
                "<span class = 'ion-ios-arrow-back'></span>",
                "<span class = 'ion-ios-arrow-forward'></span>",
            ],
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                1000: {
                    items: 1,
                },
            },
        });
        $(".carousel-testimony").owlCarousel({
            loop: true,
            autoplay: true,
            center: true,
            margin: 30,
            nav: false,
            stagePadding: 0,
            items: 1,
            navText: [
                "<span class = 'ion-ios-arrow-back'></span>",
                "<span class = 'ion-ios-arrow-forward'></span>",
            ],
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 3,
                },
            },
        });
    };
    carousel();

    var counter = function() {
        $("#section-counter").waypoint(
            function(direction) {
                if (
                    direction === "down" &&
                    !$(this.element).hasClass("ftco-animated")
                ) {
                    var comma_seperator_number_step = $.animateNumber.numberStepFactories.separator(
                        ","
                    );
                    $(".number").each(function() {
                        var $this = $(this),
                            num = $this.data("number");
                        console.log(num);
                        $this.animateNumber({
                                number: num,
                                numberStep: comma_seperator_number_step,
                            },
                            7000
                        );
                    });
                }
            }, { offset: "95%" }
        );
    };
    counter();

    var contentWayPoint = function() {
        var i = 0;
        $(".ftco-animate").waypoint(
            function(direction) {
                if (
                    direction === "down" &&
                    !$(this.element).hasClass("ftco-animated")
                ) {
                    i++;
                    $(this.element).addClass("item-animate");
                    setTimeout(function() {
                        $("body .ftco-animate.item-animate").each(function(k) {
                            var el = $(this);
                            setTimeout(
                                function() {
                                    var effect = el.data("animate-effect");
                                    if (effect === "fadeIn") {
                                        el.addClass("fadeIn ftco-animated");
                                    } else if (effect === "fadeInLeft") {
                                        el.addClass("fadeInLeft ftco-animated");
                                    } else if (effect === "fadeInRight") {
                                        el.addClass("fadeInRight ftco-animated");
                                    } else {
                                        el.addClass("fadeInUp ftco-animated");
                                    }
                                    el.removeClass("item-animate");
                                },
                                k * 50,
                                "easeInOutExpo"
                            );
                        });
                    }, 100);
                }
            }, { offset: "95%" }
        );
    };
    contentWayPoint();

    $("#book_date").datepicker({
        format: "m/d/yyyy",
        autoclose: true,
    });
    $("#book_time").timepicker();



    //product detail


    /*-----------------------
        Categories Slider
    ------------------------*/
    $(".categories__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 4,
        dots: false,
        nav: true,
        navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {

            0: {
                items: 1,
            },

            480: {
                items: 2,
            },

            768: {
                items: 3,
            },

            992: {
                items: 4,
            }
        }
    });


    $('.hero__categories__all').on('click', function() {
        $('.hero__categories ul').slideToggle(400);
    });

    /*--------------------------
        Latest Product Slider
    ----------------------------*/
    $(".latest-product__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        nav: true,
        navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
    });


    /*---------------------------------
        Product Details Pic Slider
    ----------------------------------*/
    $(".product__details__pic__slider").owlCarousel({
        loop: true,
        margin: 20,
        items: 4,
        dots: true,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
    });


    /*--------------------------
        Select
    ----------------------------*/
    $("select").niceSelect();

    /*------------------
  Single Product
--------------------*/
    $('.product__details__pic__slider img').on('click', function() {

        var imgurl = $(this).data('imgbigurl');
        var bigImg = $('.product__details__pic__item--large').attr('src');
        if (imgurl != bigImg) {
            $('.product__details__pic__item--large').attr({
                src: imgurl
            });
        }
    });

    /*-------------------
  Quantity change
--------------------- */
    var proQty = $('.pro-qty');
    proQty.prepend('<span class="dec qtybtn">-</span>');
    proQty.append('<span class="inc qtybtn">+</span>');
    proQty.on('click', '.qtybtn', function() {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });
})(jQuery);