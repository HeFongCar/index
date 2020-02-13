$(function () {



    // 輪播
    var owl = $('.index-carousel .owl-carousel');
    owl.owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        dots: true,
        nav: false,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
    });

    // back to top

    if ($('#back-to-top').length) {
        var scrollTrigger = 200, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
       
    }


    AOS.init(
        {
            once: true,
        }
    );
    
    // 錨點

    $("a[href*='#']:not([href='#'])").click(function () {
        var target = $(this.hash);
        $("html, body").animate({
            scrollTop: target.offset().top - 90
        }, 1000);
        return false;
    });

   
    

})