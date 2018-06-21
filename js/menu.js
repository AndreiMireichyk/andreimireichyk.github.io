$(function () {
    $(".navbar__toggler").click(function(){
        if($(this).hasClass( "open" )){
            $(this).removeClass("open");
            $(".navbar__collapse").removeClass("open");
        }else{
            $(this).addClass("open");
            $(".navbar__collapse").addClass("open");
        }
    });
});