$(window).on("load", function () {

    "use strict";

    /* ===================================
            Loading Timeout
     ====================================== */

    setTimeout(function () {
        $('.preloader').fadeOut();

        $('.cd-transition-layer').addClass('closing').delay(1000).queue(function () {
            $(this).removeClass("visible closing opening").dequeue();
        });

    }, 1000);

});


jQuery(function ($) {


    "use strict";

    /* ===================================
        Side Menu
    ====================================== */

    $("#sidemenu_toggle").on("click", function () {
        $(".site-nav").toggleClass("active");
    }), $(".site-nav li a").on("click", function () {
        $(".site-nav").removeClass("active");
    });







});

var s = 0;
var tabItem = $('.tab .tabItem');
var mySwiper = new Swiper('.kuaiDi .swiper-container', {
    autoplay: false,
    // on: {
    //     //swiper从当前slide开始过渡到另一个slide时执行
    //     slideChangeTransitionStart: function () {
    //         var n = this.activeIndex;//过渡后的slide索引
    //         // alert(n);
    //         changeTab(n);
    //         if (n == 0 && s == 0) {
    //             s = 1;
    //             // digit.render();
    //         }

    //     }
    // }
})
//tab点击切换silde
tabItem.click(function () {
    var ind = $(this).index();
    changeTab(ind);
    mySwiper.slideTo(ind);

})
//tab切换样式
function changeTab(index) {
    tabItem.removeClass('active').eq(index).addClass('active');
}


$(".gongList li").click(function () {

    $('.tanMeng').addClass('on');
    $('.tanMeng').show('');

});

$(".close a").click(function () {


    $('.tanMeng').hide();

});
