const app = {
    handleEvents: function() {

        // xu ly fix header menu khi cuon trang
        const headerMenuMobile = $('#header-menu-mobile');
        const opacityAll = $('#opacity-all');
        // xu ly icon bars o man hinh mobile
        $('#bars').click(function() {
            headerMenuMobile.addClass('menuMobile');
            headerMenuMobile.removeClass('displayNone');
            opacityAll.removeClass('displayNone');
        });
        // xu ly icon close o man hinh mobile
        $('#close').click(function() {
            headerMenuMobile.removeClass('menuMobile');
            headerMenuMobile.addClass('displayNone');
            opacityAll.addClass('displayNone');
        });
        // xu ly click khoang den o man hinh mobile
        $('#opacity-all').click(function() {
            headerMenuMobile.removeClass('menuMobile');
            headerMenuMobile.addClass('displayNone');
            opacityAll.addClass('displayNone');
        });
        // slick
        $('.banner').slick({
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            autoplay: true,
            cssEase: 'linear',
            pauseOnHover: false,
            prevArrow: false,
            nextArrow: false
        });
        $('.branch-img').slick({
            autoplay: true,
            autoplaySpeed: 2000,
            prevArrow: false,
            nextArrow: false,
            responsive: [{
                    breakpoint: 3000,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1920,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1440,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 1,
                    }
                }, {
                    breakpoint: 200,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    },
    start: function() {
        this.handleEvents();
        console.log(document.querySelector(".banner").clientHeight)
    },
};
app.start();