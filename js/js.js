jQuery(document).ready(function () {
    //SETTINGS site

    //BURGER MENU

    $('.burger_menu').click(function () {
        $('.inner-menu_mobile').fadeIn();
        $('.inner-menu_mobile').addClass('_add_inner-menu_mobile');
    });

    $('.close_block-inner-menu_mobile').click(function () {
        $('.inner-menu_mobile').fadeOut();
        $('.inner-menu_mobile').removeClass('_add_inner-menu_mobile');
    });

    //BUTTON NEXT

    $('.next').click(function () {
        let next = $('.section_1').offset().top;
        $('html, body').animate({ scrollTop: next }, 600);
    });
    //BUTTON NEXT END

    //BUTTON UP

    $('.button_up').click(function () {
        let button_up = $('.header').offset().top;
        $('html, body').animate({ scrollTop: button_up }, 300);
    });

    $(window).scroll(function () {

        let scrollDock = $(document).scrollTop();
        let scrollSection_1 = $('.section_1').offset().top;

        if (scrollDock + 80 >= scrollSection_1) {
            $('.button_up').fadeIn();
        } else {
            $('.button_up').fadeOut();
        }

    });
    //BUTTON UP END

    //POPAP FORM

    $('.inner_button').click(function () {
        $('.popap_form').fadeIn();
        $('.form_login_center1').addClass('_add_popap_form');
        $('.popap_close').addClass('_add_popap_close');
        $('.img_close img').addClass('_add_close_img');
    });

    $('.nav_a_pay').click(function () {
        $('.popap_form').fadeIn();
        $('.form_login_center1').addClass('_add_popap_form');
        $('.popap_close').addClass('_add_popap_close');
        $('.img_close img').addClass('_add_close_img');
    });

    $('.button_openForm').click(function () {
        $('.popap_form').fadeIn();
        $('.form_login_center1').addClass('_add_popap_form');
        $('.popap_close').addClass('_add_popap_close');
        $('.img_close img').addClass('_add_close_img');
    });

    $('.popap_close').click(function () {
        $('.popap_form').fadeOut();
        $('.form_login_center1').removeClass('_add_popap_form');
        $('.popap_close').removeClass('_add_popap_close');
        $('.img_close img').removeClass('_add_close_img');
    });


    //POPAP FORM END

    //POPAP FORM 2

    $('.button_write_to_us').click(function () {
        $('.popap_form2').fadeIn();
        $('.form_login_center3').addClass('_add_popap_form2');
        $('.popap_close').addClass('_add_popap_close');
        $('.img_close img').addClass('_add_close_img');
    });

    $('.popap_close').click(function () {
        $('.popap_form2').fadeOut();
        $('.form_login_center3').removeClass('_add_popap_form2');
        $('.popap_close').removeClass('_add_popap_close');
        $('.img_close img').removeClass('_add_close_img');
    });


    //POPAP FORM 2 END

    //ANIMATE
    $('.circle_block').click(function () {

        let dataTitle = $(this).attr("data-title");
        $('.popup_year-title').text(dataTitle);
        let workInfo = $(this).next(".circle_block-desc").html();
        $('.popup_year-desc').append(workInfo);
        $('.popup_year').fadeIn();

    });

    $('.popup_year').click(function () {
        $('.popup_year').fadeOut();
        $('.popup_year-title').text('');
        $('.popup_year-desc').empty();
    });

});