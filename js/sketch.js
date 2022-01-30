var pause_check1  = false;
var pause_check2 = false;


$('#audio_meyer').click(function() {
  var audio = new Audio("assets/leomeyer.m4a");
  audio.play();
}); 


  $('#audio_hermansen').click(function() {
    var audio = new Audio("assets/sorenhermansen.m4a");
    audio.play();
  }); 


  $( ".hover_text" ).mouseenter(function() {
    $(".hover_pop-up").css({"display": "block"});
  });

  $( ".hover_text" ).mouseleave(function() {
    $(".hover_pop-up").css({"display": "none"});
  });


$( "#videocontainer1" ).click(function() {
  $(".circle1").css({"display": "none"});
});

$( "#videocontainer2" ).click(function() {
  $(".circle2").css({"display": "none"});
});

$( "#iphone_notification" ).click(function() {
  $(".intro_modal").css({"display": "none"});
  $("body").css({"overflow": "auto"});
});

$( "#modal_text_box h3 span" ).mouseenter(function() {
  $("#popup").css({"display": "block"});
});

$( "#modal_text_box h3 span" ).mouseleave(function() {
  $("#popup").css({"display": "none"});
});

$(document).ready(function() {
    
  $(window).scroll( function(){
  
      $('.hideme').each( function(i){
          
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_object ){
              
              $(this).animate({'opacity':'1'},1500);
                  
          }   
      }); 
  });
});

$(".menubuttons").click(function() {

  $(this).addClass("active").siblings().removeClass("active");

});


$(document).ready(function() {
    
  $(window).scroll( function(){
  
      $('#chapter1').each( function(i){
          
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_object ){

              
            $("#menubutton1").addClass("active").siblings().removeClass("active");
                  
          }   



          
      }); 
  });
});

$(document).ready(function() {
    
  $(window).scroll( function(){
  
      $('#chapter2').each( function(i){
          
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_object ){

              
            $("#menubutton2").addClass("active").siblings().removeClass("active");
                  
          }   



          
      }); 
  });
});

$(document).ready(function() {
    
  $(window).scroll( function(){
  
      $('#chapter3').each( function(i){
          
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_object ){
              
            $("#menubutton3").addClass("active").siblings().removeClass("active");
                  
          }      
      }); 
  });
});

$(document).ready(function() {
    
  $(window).scroll( function(){
  
      $('#chapter4').each( function(i){
          
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_object ){
              
            $("#menubutton4").addClass("active").siblings().removeClass("active");
                  
          }      
      }); 
  });
});

$(document).ready(function() {
    
  $(window).scroll( function(){
  
      $('.readytext').each( function(i){
          
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_object ){
              
            $("#menubutton4").removeClass("active");
                  
          }      
      }); 
  });
});











$( ".iphone_notification" ).click(function() {
  $(".intro_screen").css({"display": "none"});
  $(".fullpage").css({"display": "block"});
  $(".fullpage").css({"overflow": "auto"});
  $(window).scrollTop(0);
});












// SCROLL

$("#menubutton1").click(function() {

  console.log("1")

  $('html, body').animate({
    scrollTop: $("#chapter1").offset().top - $(window).height()/4
}, 2000);
});

$("#menubutton2").click(function() {

  console.log("2")

  $('html, body').animate({
    scrollTop: $("#chapter2").offset().top - $(window).height()/4
}, 2000);

});

$("#menubutton3").click(function() {

  console.log("3")

  $('html, body').animate({
    scrollTop: $("#chapter3").offset().top - $(window).height()/4
}, 2000);

});

$("#menubutton4").click(function() {

  console.log("4")

  $('html, body').animate({
    scrollTop: $("#chapter4").offset().top - $(window).height()/4
}, 2000);


});
