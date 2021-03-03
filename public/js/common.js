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
    // $("html, body").on('touchmove', function(e){
    //     var wheel = e.originalEvent.wheelDelta;
    //     var He  = $('.main-header').scrollTop();
    //     var st = $(window).scrollTop();
    //     var scrollValue = $(document).scrollTop();
    //     // e.preventDefault();
    //     if(scrollValue > 25) {
    //         $(".main-header").css("background-color", "#0c2f48");
    //     }
    //     if (scrollValue < 20) {
    //         $(".main-header").css("background", "rgba(0,0,0,0)");
    //     }
    //     if (scrollValue = 0){
    //         setInterval(function() {
    //             $(".main-header").css("background", "rgba(0,0,0,0)");
    //         },1);

    //     }
    // })
    // $("html, body").on('touchend-', function(e){
    //     var scrollValue = $(document).scrollTop();
    //     if(scrollValue <= 10 ){
    //         $(".main-header").css("background", "rgba(0,0,0,0)");
    //     }
    // });
    // $(function(){
    //     var lastScrollTop = 0;
    //         delta =15;
    //         $(window).touchmove(function(e){
    //             var st = $(this).scrollTop();
    //             if(Math.abs(lastScrollTop -st) <= delta)return;
    //             if((st>lastScrollTop)&&(lastScrollTop>0)) {
    //                 $(".main-header").css("background-color", "#0c2f48");
    //             } else {
    //                 $(".main-header").css("background", "rgba(0,0,0,0)");
    //             }
    //             lastScrollTop=st;
    //         });
    // });
    $(function(){
        var lastScrollTop = 0;
            delta =15;
            $(window).on("touchmove", function(e){
                var st = $(this).scrollTop();
                if(Math.abs(lastScrollTop -st) <= delta)return;
                if((st>lastScrollTop)&&(lastScrollTop>0)) {
                    $(".main-header").css("background-color", "#0c2f48");
                } else if($(window).scrollTop() <= 10) {
                    $(".main-header").css("background", "rgba(0,0,0,0)");
                }
                lastScrollTop=st;
            });
    });
    $(function(){
        $(".banner-section").on("mouseover", function(){
            $(".owl-prev").css('display', 'inline-block');
            $(".owl-next").css('display', 'inline-block');
        });
        $(".banner-section").on("mouseout", function(){
            $(".owl-prev").css('display', 'none');
            $(".owl-next").css('display', 'none');
        })
    })
})