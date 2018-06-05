'use strict';

svg4everybody();

var APP = {};
$(function () {
    $(document).on('click', '._js-toggle-menu', function () {
        $('.site-mobile').toggleClass('_active');

        if (!$('.site-mobile').hasClass('_active')) {
            $('body').removeClass('_no-scroll _event-menu-opened').css({
                paddingRight: 0
            });
        } else {
            $('body').addClass('_no-scroll _event-menu-opened').css({
                paddingRight: APP.scrollbarWidth
            });
        }
    });

    $(document).on('mouseup touchend', function (e) {
        var el = $('.site-mobile');
        if (!el.is(e.target) && el.has(e.target).length === 0) {
            if ($('.site-mobile').hasClass('_active')) {
                $('.site-mobile').removeClass('_active');
                $('body').removeClass('_no-scroll _event-menu-opened').css({
                    paddingRight: 0
                });
            }
        }
    });

    $(document).on('click', '._js-smooth', function () {
        var target = $(this.hash);
        console.log(target);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 700);
            return false;
        }
    });

    $(document).on('mouseover', '.mmm-dotted', function () {
        var $this = $(this),
            indexHover = $this.data('hover');

        $('.mmm-item._' + indexHover).addClass('_focused');
    }).on('mouseleave', '.mmm-dotted', function () {
        $('.mmm-item').removeClass('_focused');
    });

    form();
    faq();
    slider();
});
function form() {
    $('.form-control').each(function () {
        if ($(this).val()) {
            $(this).closest('.form-group').addClass('_active');
        }
    }).on('blur', function () {
        if (!$(this).val()) {
            $(this).closest('.form-group').removeClass('_active');
        }
    }).on('focus', function () {
        $(this).closest('.form-group').addClass('_active');
    }).on('change', function () {
        var el = $(this);
        if (el.val()) {
            el.addClass('_active');
            el.closest('.form-group').addClass('_active');
        } else {
            el.removeClass('_active');
            el.closest('.form-group').removeClass('_active');
        }
    });
};
function faq() {
    $('.faq').each(function () {
        var $this = $(this),
            $answer = $this.find('.faq-answer'),
            shown = $this.data('shown');

        if (shown) {
            $answer.show();
        }
    });
    $(document).on('click', '.faq-question', function () {
        var $this = $(this),
            $faq = $this.closest('.faq'),
            $answer = $faq.find('.faq-answer');

        $answer.slideToggle();
    });
}
function slider() {
    $('.slider').each(function () {
        var $this = $(this);

        if (!$this.hasClass('slick-initialized')) {
            if ($this.hasClass('_js-slider-landing')) {
                $this.on('init', function (event, slick) {
                    $this.append('<div class="slick-slides"><span class="slick-slides__current">' + '0' + (slick.currentSlide + 1) + '</span>' + '<span class="slick-slides__summary">0' + slick.slideCount + '</span></div>');
                }).on('afterChange', function (event, slick) {
                    console.log(slick.currentSlide);
                    $('.slick-slides__current').html('0' + (parseInt(slick.currentSlide) + 1));
                }).slick({
                    fade: true,
                    adaptiveHeight: true
                });
            }
        }
    });
}
// Functions
//# sourceMappingURL=main.js.map
