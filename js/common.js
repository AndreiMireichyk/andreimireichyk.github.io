$(function () {
    $(document).on("scroll", onScroll);

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('.float-nav li').each(function () {
            $(this).parent().removeClass('active');
        })
        $(this).parent().addClass('active');

        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPosition = $(document).scrollTop();
    $('.float-nav li').each(function () {
        var currentLink = $("a", this);
        var refElement = $(currentLink.attr("href"));
        if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {

            console.log($('nav ul li a').parent().removeClass("active"))
            currentLink.addClass("active");
        }
        else{
            currentLink.parent().removeClass("active");
        }
    });
}