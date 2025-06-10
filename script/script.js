      new WOW({
                      boxClass: 'wow',
                      animateClass: 'animated',
                      offset: 100,
                      delay: 500,
                      mobile: true,
                      live: true,
                    }).init();

    var swiper = new Swiper(".promotion", {
      spaceBetween: 50,
      loop: true,
      slidesPerView: "auto",
      centeredSlides: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    (function ($) {
      $(function () { //on DOM ready 
        $("#recipe_scroller").simplyScroll();
      });
    })(jQuery);

    AOS.init({
      duration: 1300,
      offset: 500,
      easing: 'ease-out',
    });

    function moveBrand() {
      var offset = $(".brand_st").offset();  //"footer" 라는 클래스 속성을 지닌 객체의 위치값을 변수에 지정
      $('html, body').animate({ scrollTop: offset.top }, 500);   //offset이라는 변수에 담긴 위치로 이동
    };

function moveProduct() {
      var offset = $(".new_product").offset();  //"footer" 라는 클래스 속성을 지닌 객체의 위치값을 변수에 지정
      $('html, body').animate({ scrollTop: offset.top }, 500);   //offset이라는 변수에 담긴 위치로 이동
    };

    function moveReview() {
      var offset = $("#review").offset();  //"footer" 라는 클래스 속성을 지닌 객체의 위치값을 변수에 지정
      $('html, body').animate({ scrollTop: offset.top }, 500);   //offset이라는 변수에 담긴 위치로 이동
    };

    function moveRecipe() {
      var offset = $("#recipe").offset();  //"footer" 라는 클래스 속성을 지닌 객체의 위치값을 변수에 지정
      $('html, body').animate({ scrollTop: offset.top }, 500);   //offset이라는 변수에 담긴 위치로 이동
    };

    function moveCommunity() {
      var offset = $("#event").offset();  //"footer" 라는 클래스 속성을 지닌 객체의 위치값을 변수에 지정
      $('html, body').animate({ scrollTop: offset.top }, 500);   //offset이라는 변수에 담긴 위치로 이동
    };

    $(function(){
      $("#menu_hover").click(function(){
        $("#left_popup").fadeIn();
      });
      $("#left_popup").click(function(){
        $("#left_popup").fadeOut();
      });
    });

    $(function(){
      $("#com_box>ul>li").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
      });
    });