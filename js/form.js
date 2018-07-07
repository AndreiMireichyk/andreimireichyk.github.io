function showModalChildren(element) {

    var children = element.children();

    // Animate each child individually
    for (var i = 0; i < children.length; i++) {
        var item = children[i];

        // Define initial properties
        dynamics.css(item, {
            opacity: 0,
            translateY: 30
        });

        // Animate to final properties
        dynamics.animate(item, {
            opacity: 1,
            translateY: 0
        }, {
            type: dynamics.spring,
            frequency: 300,
            friction: 400,
            duration: 2000,
            delay: 100 + i * 40
        });
    }
}

$(function () {
    $("input").keypress(function (event) {
        var inputName = $(this).prop('name')
        if (event.keyCode == 13 && !$(this).is(":button")) {

            $('input, textarea').each(function (k, v) {
                if ($(v).prop('name') === inputName) {
                    $('input, textarea')[k + 1].focus();
                }

            });
            return false;
        }
    });

    //send forms
    $('[data-send]').click(function () {

        /*$.post( "/server/send_email", function( data ) {

        });*/

        if (true){
            var header = $(".header");
            var logo = $(".header__logo");
            var form = $(".form");
            var section = $('section.contacts');
            var accept = $('section.accept');

            header.css('display', 'none');
            accept.removeClass('hidden');
            section.addClass('hidden');
            header.addClass('header--full');
            logo.addClass('header__logo--full');
            form.css('transition', 'none').css('opacity', 0);

            showModalChildren(accept);

            setTimeout(function () {
                header.css('display', 'block');
                accept.addClass('hidden');
            }, 2500);
        }

    });
});