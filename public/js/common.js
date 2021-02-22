$(function() {
    var lastScrollTop = 0;
    var delta = 1;
    var navbarHeight = $('header').outerHeight();
    $("html, body").on('mousewheel', function(e){
        var wheel = e.originalEvent.wheelDelta;
        var He  = $('header').height();
        var st = $(window).scrollTop();
        // e.preventDefault();
        if(st > 0) {
            $(".main-header").css("background-color", "#0c2f48");
        }
        if (st <= 35) {
            $(".main-header").css("background", "rgba(0,0,0,0)");
        }
        //console.log(st);
    })
    $("html, body").on('touchmove', function(e){
        var wheel = e.originalEvent.wheelDelta;
        var He  = $('header').height();
        var st = $(window).scrollTop();
        // e.preventDefault();
        if(st > 0) {
            $(".main-header").css("background-color", "#0c2f48");
        }
        if (st <= 35) {
            $(".main-header").css("background", "rgba(0,0,0,0)");
        }
        //console.log(st);
    })

})