$(function () {
    $(".nav_bar__toggler").click(function(){
        if($(this).hasClass( "open" )){
            $(this).removeClass("open");
            $(".nav_bar").removeClass("open");
        }else{
            $(this).addClass("open");
            $(".nav_bar").addClass("open");
        }
    });

    $('.nav_bar__link').click(function () {
        if($('.nav_bar').hasClass( "open" )){
            $(".nav_bar__toggler").removeClass("open");
            $(".nav_bar").removeClass("open");
        }
    });

    $(document).scroll(function () {

        if ($(this).scrollTop() < 1) {
            $('.header').removeClass('header--slice');
        } else {
            $('.header').addClass('header--slice');
        }

    });

    $('.nav_bar').onePageNav({
        currentClass: 'active',
        changeHash: true,
        scrollSpeed: 750,
        filter: '',
        easing: 'swing',
        begin: function () {
            $(".float-nav").hide();
        },
        end: function () {
            $(".float-nav").show();
        },
        scrollChange: function ($currentListItem) {

            //I get fired when you enter a section and I pass the list item of the section
        }
    });
});

