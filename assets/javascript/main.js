// gnb 시작---------------------------------------------------
$(function(){

 $('.header .nav li').hover(function(){
     $('.header .nav li').children('.twoD').css('background-color','#fff').stop().slideDown()
     $('.gnb').css({'background-color':'#FFF'}).stop().animate({
         height:'534px'
     }).addClass('on')
 },function(){
     $('.header .nav li').children('.twoD').css('background-color','#fff').stop().slideUp()
     $('.gnb').stop().animate({
         height:'194px'
     },function(){
         $(this).css({'background-color':'rgba( 0, 0, 0, 0.3 )'})
     }).removeClass('on')
 })
  $('.header .nav li').hover(function()
  {
      $('.header .nav li').children('a').css('color','#333');
  },function(){
      $('.header .nav li').children('a').css('color','#fff');
  }
)

  // $('.header').hover(function(){
  //     $('.header .logo a').children('a') .css('background-image','../images/main/logo_on.png')
  // },function(){
  //     $('.header .nav li').children('a').css('background-image','../images/main/logo_1.png')
  // })

})
//gnb 끝---------------------------------------------------




// var idx = 0;
//   var speed = 1000;
//   var call = function(){
//         $('.main_btn_prev').trigger('click')
//       }
//   var tt = setInterval(call,speed);
//
//   function slideBanner(start,end,i){
//
//        $('.slide li').eq(i).addClass('on').children('div').css({
//           'left':start,
//           'display':'block'
//       }).stop().animate({
//           "left":end
//       },'1000').parent('li').siblings().removeClass('on')
//   }
//
//   $('.slide .next').click(function(){
//       slideBanner("0","-100%",idx);
//       idx++
//       slideBanner("100%","0",idx);
//         $(this).animate(1000);
//
//       if(idx ==$('.slide li').length){
//           idx = 0;
//            slideBanner("100%","0",idx);
//       }
//       // console.log(idx);
//
//   })
//
//   $('.slide .prev').click(function(){
//       slideBanner("0","100%",idx);
//       idx--
//       slideBanner("-100%","0",idx);
// $('.slidebanner li').eq(idx).addClass('on').siblings().removeClass('on')
//
//       if(idx < 0){
//          idx = 4;
//         slideBanner("-100%","0",idx);
// $('.slidebanner li').eq(idx).addClass('on').siblings().removeClass('on')
//
//        }
//     // console.log(idx);
//   })
//   $('.slide li').mouseenter(function(){
//              clearInterval(tt);
//             //  console.log('나와라얍');
//            })
//
//    $('.slide li').mouseleave(function(){
//       tt = setInterval(call,speed)
//               })
//    $('.slide li>a').click(function(a){
//      a.preventDefault();
//      var btn =$(this).parent().index();
//      console.log(btn)
//      var onli=$('.slide li.on').index();
//     //  console.log(onli)
//      if(btn > onli){
//            slideBanner("0","-100%",onli);
//            slideBanner("100%","0",btn);
//      }else if(btn < onli){
//            slideBanner("0","100%",onli);
//            slideBanner("-100%","0",btn);
//            }
//    })
