$(function() {
    var lastScrollTop = 0;
    var delta = 1;
    var navbarHeight = $('header').outerHeight();
    $(window).scroll(function () {
        var scrollValue = $(document).scrollTop();
         });
    $("html, body").on('mousewheel', function(e){
        var wheel = e.originalEvent.wheelDelta;
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
        var He  = $('.main-header').scrollTop();
        var st = $(window).scrollTop();
        var scrollValue = $(document).scrollTop();
        // e.preventDefault();
        if(scrollValue > 25) {
            $(".main-header").css("background-color", "#0c2f48");
        }
        if (scrollValue < 20) {
            $(".main-header").css("background", "rgba(0,0,0,0)");
        }
        if (scrollValue = 0){
            setInterval(function() {
                $(".main-header").css("background", "rgba(0,0,0,0)");
            },1);

        }
    })
    $("html, body").on('touchend-', function(e){
        var scrollValue = $(document).scrollTop();
        if(scrollValue <= 10 ){
            $(".main-header").css("background", "rgba(0,0,0,0)");
        }
    });
    $("#viewImg").on("click", function(){
        location.href="index.html";
    })
})