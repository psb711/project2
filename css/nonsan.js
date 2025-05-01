

// 헴버거
$(function () {
   $("#close").click(function () {
      $("#allmenu").css("display", "none")
   });
   $("img[alt='hamburger']").click(function () {
      $("#allmenu").css("display", "block")
   });


});
document.addEventListener('DOMContentLoaded', function () {
   const container = document.getElementById('zoomContainer');
   const lens = document.getElementById('zoomLens');
   const zoomedImg = document.getElementById('zoomedImage');
   const baseImg = document.getElementById('baseImage');

   const zoom = 2;

   baseImg.addEventListener('load', () => {

      zoomedImg.style.width = baseImg.width * zoom + 'px';
      zoomedImg.style.height = baseImg.height * zoom + 'px';
   });

   container.addEventListener('mousemove', function (e) {
      lens.style.display = 'block';

      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const lensWidth = lens.offsetWidth;
      const lensHeight = lens.offsetHeight;

      let lensX = x - lensWidth / 2;
      let lensY = y - lensHeight / 2;


      lensX = Math.max(0, Math.min(lensX, container.offsetWidth - lensWidth));
      lensY = Math.max(0, Math.min(lensY, container.offsetHeight - lensHeight));

      lens.style.left = lensX + 'px';
      lens.style.top = lensY + 'px';


      zoomedImg.style.left = -lensX * zoom + 'px';
      zoomedImg.style.top = -lensY * zoom + 'px';
   });

   container.addEventListener('mouseleave', () => {
      lens.style.display = 'none';
   });
});
// 스크롤
$(function () {

   var menuItems = $("nav ul li").not(":first-child");


   var sections = $("#s1,#s2, #s3, #s4, #s5, #s6");

   var gap = -80;
   // menuItems.click(function (e) {
   //    // e.preventDefault();

   //    var index = $(this).index();

   //    // if(index==6){

   //    // }
   //    var sectionTop = sections.eq(index).offset().top - gap;

   //    $("html, body").animate({ scrollTop: sectionTop }, 600);
   // });


   $(window).scroll(function () {
      var scrollY = $(this).scrollTop();

      sections.each(function (i) {
         if (scrollY >= $(this).offset().top - (gap + 10)) {
            menuItems.removeClass("active");
            menuItems.eq(i).addClass("active");
         }
      });
   });

   // 모바일 슬라이드토글
   if (window.matchMedia("(max-width: 800px)").matches) {
      $(".menu>li").click(function () {
         $(".sub").slideUp()
         $(this).find(".sub").stop().slideToggle();
      })
   } 
// 포스트잇 토글
if (window.matchMedia("(max-width: 800px)").matches) {
   $(".post h3").click(function () {
      $(".post p,.post div").slideUp()
      $(this).siblings(" p,div").stop().slideToggle();
   })
} 
// 풍선

window.addEventListener('scroll', function () {
   if (window.innerWidth <= 2500) {
     const imgs = document.getElementsByClassName('balloonbox');
     const scrollY = window.scrollY;
 
     const scrollThreshold = document.documentElement.scrollHeight * 0.7 - window.innerHeight;
 
     for (let i = 0; i < imgs.length; i++) {
       if (scrollY >= scrollThreshold) {
         imgs[i].classList.add('active');
       } else {
         imgs[i].classList.remove('active');
       }
     }
   }
 });


 
});
document.addEventListener('DOMContentLoaded', function() {
   if (window.innerWidth <= 799) {
       document.getElementById('noticesp').src = './img/sign8.png';
   }
});
