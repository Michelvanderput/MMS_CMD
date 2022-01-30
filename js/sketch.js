var pause_check1  = false;
var pause_check2 = false;
var audio = new Audio("assets/leomeyer.m4a");
var audio2 = new Audio("assets/sorenhermansen.m4a");

function isPlaying(audio) { return !audio.paused; }


var isPlaying = false;

function playAudio() { 
    audio.play(); 
    isPlaying = true;
} 

function pauseAudio() { 
    audio.pause();
    isPlaying = false;
} 

function HandleAudio(){
  if(isPlaying == true){
    //Playing already Pause it
    pauseAudio();
  }else{
    //Play the music
    playAudio();
  }
}

var isPlaying2 = false;

function playAudio2() { 
    audio2.play(); 
    isPlaying2 = true;
} 

function pauseAudio2() { 
    audio2.pause();
    isPlaying2 = false;
} 

function HandleAudio2(){
  if(isPlaying2 == true){
    //Playing already Pause it
    pauseAudio2();
  }else{
    //Play the music
    playAudio2();
  }
}


$('#audio_meyer').click(function() {
  
  if(isPlaying == true){
    //Playing already Pause it
    pauseAudio();
  }else{
    //Play the music
    playAudio();
  }

}); 




$('#audio_hermansen').click(function() {
  
  if(isPlaying2 == true){
    //Playing already Pause it
    pauseAudio2();
  }else{
    //Play the music
    playAudio2();
  }
  
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




// Set the date we're counting down to
var countDownDate = new Date("Dec 31, 2029 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var years = Math.floor(distance / (1000 * 60 * 60 * 24) / 365);
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("years").innerHTML = years;

  document.getElementById("days").innerHTML = days;

  document.getElementById("hours").innerHTML = hours;

  document.getElementById("minutes").innerHTML = minutes;

  document.getElementById("seconds").innerHTML = seconds;



  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
