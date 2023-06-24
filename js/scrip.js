
$(function () {

    'use strict';



    $('.venobox').venobox({
        spinner: 'cube-grid',
        spinColor: '#e23e38'
      });
    // Back to top button js
    $('.back_bton').click(function () {
        $('html,body').animate({
            scrollTop: 0,
        },1000);
    });

    $(window).scroll(function () {
        var abc = $(this).scrollTop();


        if (abc > 200) {
            $('.back_bton').fadeIn();
        }
        else {
            $('.back_bton').fadeOut();
        }
    });

    //slider part 
    $(function () {
        $('.slide_baner').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 2000,
            arrows: true,
            prevArrow: '<i class="fas fa-chevron-left prev_arro"></i>',
            nextArrow: '<i class="fas fa-chevron-right nxt_arro"></i>',
            dots: true,
        }
        )
            


        var scil = $('.menu_bar').offset().top;


        $(window).scroll(function () {


            var scltp = $(this).scrollTop();
            if (scltp > scil) {

                $('.menu_bar').addClass('menu_fixd');

            }
            else {
                $('.menu_bar').removeClass('menu_fixd')
            }
        });
        new VenoBox({
            selector: '.me',
            spinner:'grid',
        });
    }
    )
        ;

    // $('.slide_baner').slick({
    //     dots: true,
    //     infinite: true,
    //     autoplay:true,
    //     speed: 500,
    //     fade: true,
    //     cssEase: 'linear',
    //     autoplaySpeed: 5000,
    //     arrows:true,
    //     prevArrow:'<i class="fas fa-chevron-left prev_arro"></i>',
    //     nextArrow:'<i class="fas fa-chevron-right nxt_arro"></i>',
    //     dots:true,
    //   });


});