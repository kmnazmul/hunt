
$(window).scroll(function(){
    $scrollamout = $(window).scrollTop();
    
    if($scrollamout > 500) {
        $(".manu").addClass("sticky")
    }else{
        $(".manu").removeClass("sticky")
    }
    
     if($scrollamout > 1000){
         $(".btop").fadeIn()
     }else{
         $(".btop").fadeOut()
     }
} )



$(".btop").click(function(){
    $("html,body").animate({
        scrollTop:0
    },10000)
    
})






//bannar slider////

$('.slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay:true,
    fade:true,
    prevArrow: '<i class="fa fa-arrow-circle-left prev" aria-hidden="true"></i>',
    
    nextArrow: '<i class="fa fa-arrow-circle-right next" aria-hidden="true"></i>',
    
});





//venobox//


$('.venobox').venobox();


  









///services silder//




$('.service-slider').slick({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
    vertical:true,
    centerMode:true,
    centerPadding:0,
    prevArrow: '<i class="fa fa-chevron-up prevs" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-chevron-down nexts" aria-hidden="true"></i>',
    
});


//testi slider///

$('.testi-slider .left').slick({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
    vertical:true,
    centerMode:true,
    centerPadding:0,
    prevArrow: '<i class="fa fa-chevron-up tprevs" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-chevron-down tnexts" aria-hidden="true"></i>',
    
    asNavFor:'.testi-slider .right .texts'
    
});





$('.testi-slider .right .texts').slick({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
   fade:true,

    arrows:false,
    asNavFor:'.testi-slider .left'
    
});




//counter up

 $('.counter').counterUp({
                delay: 10,
                time: 1000
            });



///inter-part



$('.boxs-slider').slick({
  dots: false,
  infinite: true,
  speed: 100,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay:true,
    centerMode:true,
    centerPadding:0,
    fade:false,
    arrows:false,
    
});




