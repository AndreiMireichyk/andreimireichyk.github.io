
function checkOffset(el) {
    //centred menu
    $(el).addClass("absolute");

    var top = ($(document).scrollTop() - $(".sticky").offset().top ) + (window.innerHeight-$(el).outerHeight())/2;
    var start = 10;
    var end = $(".sticky").outerHeight() - $(el).outerHeight()-10;
    //start point
    top = top <= start ? start : top;
    //end point
    top = top >= end ? end : top;
    $(el).css("top", top+'px');
}



$(document).scroll(function() {

    checkOffset(".float-nav");

});

$(function(){
    checkOffset(".float-nav");
    $('.float-nav').onePageNav({
        currentClass: 'active',
        changeHash: false,
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