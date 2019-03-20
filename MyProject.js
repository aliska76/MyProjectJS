'use strict';

//var myInterval = setInterval(function() {
 //   console.log(new Date());
  //  }, 1000);
//$(selector).animate(obj,time,callback)
/*$(function() {
    setInterval(function() {
        console.log($('#slider .slides') + 3000);
        $('#slider .slides').animate({'margin-left': '+=720 px'}, 1000);
    }, 3000);
});*/
var slideIndex = 1;
var x = document.getElementsByClassName("slide");
$('.slide').addClass('fade');
$('.fade').fadeOut(function() {
    $(this).attr("-webkit-animation-name:fade;");
    $(this).attr("-webkit-animation-duration: 1.5s;");
    $(this).attr("animation-name: fade;");
    $(this).attr("animation-duration: 1.5s;");
  });
console.log("Number of pictures:" + x.length);
for(var i1=0; i1 < x.length ; i1++){
    var span = $('<span />').addClass('dot').html("currentSlide(" + (i1 + 1) + ")");
    //console.log($(span).html());
}
$('.dot').attr("display: inline-block;");
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showDivs(n) {
    var dots = document.getElementsByClassName("dot");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    for (var i = 0; i < dots.length; i++) {
        console.log(dots[i].className);
        dots[i].className = dots[i].className.replace(" active", "");
  }
    x[slideIndex-1].style.display = "block"; 
    dots[slideIndex-1].className += " active";
}
