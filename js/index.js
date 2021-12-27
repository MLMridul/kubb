$(document).ready(function () {

    // Preloader

    $(window).on("load", function () {
        $('.preloader img').delay(2000).fadeOut();
        $('.preloader span:first-of-type').css({
            'top': '-100%'
        })
        $('.preloader span:last-of-type').css({
            'bottom': '-100%'

        })

    })

    // Scroll To Top

    $(window).scroll(function () {
        var scrooling = $(this).scrollTop();
        if (scrooling > 400) {
            $('.scrollTop').css({
                'bottom': '30px',
                'visibility': 'visible'

            });
        } else {
            $('.scrollTop').css({
                'bottom': '-100%'
            });
        }
        if (scrooling > 300) {
            $('.navbar-bg').addClass('bg');
        } else {
            $('.navbar-bg').removeClass('bg');
        }
    });

    // ScrollTop Button

    $('.scrollTop').click(function () {
        $('html,body').animate({
            scrollTop: '0',
        }, 1500)
    })

    // Gallery Slider

    $('.gallery-image').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        draggable: false,
    })

    // Responsive Menu

    $(".small-menu").click(function () {
        $('.menu-list').css({
            'visibility': 'visible',
            'top': '60px',
        });
    })



})