$(function () {
    //Animation logo
    $('header').click(function () {
        var header = $(".header");
        var logo = $(".header__logo");
        var form = $(".form");
        var section = $('section.contacts');

        if (header.hasClass("header--full")) {
            section.removeClass('hidden');
            header.removeClass("header--full");
            logo.removeClass('header__logo--full');
            form.css('transition', 'opacity 1s ease 0.3s').css('opacity', 1);
        } else {
            section.addClass('hidden');
            header.addClass('header--full');
            logo.addClass('header__logo--full');
            form.css('transition', 'none').css('opacity', 0);
        }
    });
});