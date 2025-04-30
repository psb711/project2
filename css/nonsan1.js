

$(function () {

   $('.menu>li').mouseover(function () {
      $(".subbg").stop().slideDown("fast");
      $('.sub').stop().slideDown();

   }).mouseout(function () {
      $(".subbg").stop().slideUp();
      $('.sub').stop().slideUp("fast");

   });

});
//  슬라이드
 function prev(){

   $('#slide li:last').prependTo('#slide');

   $('#slide').css('margin-left',-720);     

   $('#slide').stop().animate({marginLeft:0},800);

}


function next(){

   $('#slide').stop().animate({marginLeft:-720},1000, function(){

      $('#slide li:first').appendTo('#slide');

      $('#slide').css({marginLeft:0});

   });

}



setInterval(next, 3000);//자동슬라이드


//버튼 슬라이드

$('.prev').click(function(){

   prev();

});


$('.next').click(function(){

   next();

});

// 모달창
$(document).ready(function() {

   $("#modal").hide();

   // #btn3 클릭 시 #modal 나타내기
   $("#btn3").click(function(){
       $("#modal").fadeIn();
   });

   // body 클릭 시 #modal 숨기기
   $("body").click(function(event){
       if (!$(event.target).closest("#modal").length && !$(event.target).is("#btn3")) {
           $("#modal").fadeOut();
       }
   });

   // #bt2 클릭 시 입력 값과 체크박스 확인 후 처리
   $("#bt2").click(function() {
       let allFilled = true;
       let allChecked = true;

       // 모든 input 요소들이 채워졌는지 확인
       $("#modal input[type='text']").each(function() {
           if ($(this).val() === "") {
               allFilled = false;
           }
       });

       // 모든 checkbox가 체크되었는지 확인
       $("#modal input[type='checkbox']").each(function() {
           if (!$(this).prop("checked")) {
               allChecked = false;
           }
       });

       // 모든 항목이 채워지고 체크되었을 경우
       if (!allFilled || !allChecked) {
           alert("모든 항목을 작성하고 체크해주세요.");
       } else {
           $("#modal").fadeOut();
       }
   });

});