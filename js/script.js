$(document).ready(function() {
    "use strict";
    document.getElementById("copyrightYear").innerHTML = (new Date).getFullYear(),
    $(".main-nav").headroom(),
    $("a[href='#top']").click(function() {
        return $("html, body").animate({
            scrollTop: 0
        }, "slow"),
        !1
    }),
    $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !1
    }),
    $("a.scroll-to").on("click", function(e) {
        var i = $(this);
        $("html, body").stop().animate({
            scrollTop: $(i.attr("href")).offset().top - 100
        }, 1e3),
        e.preventDefault()
    }),
    767 < window.innerWidth && ($(".service-item").matchHeight({
        byRow: 0
    }),
    $(".blog-post-item").matchHeight({
        byRow: 0
    })),
    $(".testimonial-slider-item").matchHeight({
        byRow: 0
    }),
    $(".screenshots-slider").slick({
        infinite: !0,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: !0,
        arrows: !1,
        centerMode: !0,
        centerPadding: "0px",
        autoplay: !1,
        speed: 500,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 475,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }),
    $(".testimonial-slider").slick({
        infinite: !0,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: !1,
        arrows: !1,
        centerMode: !0,
        centerPadding: "0px",
        autoplay: !1,
        speed: 500,
        vertical: !0,
        verticalSwiping: !0
    }),
    $(".slick-slider").on("click", ".slick-slide", function(e) {
        e.stopPropagation();
        e = $(this).data("slick-index");
        $(".testimonial-slider").slick("slickCurrentSlide") !== e && $(".testimonial-slider").slick("slickGoTo", e)
    }),
    AOS.init({
        disable: "mobile"
    }),
    $(".footer-tooltip").tooltip()
});
