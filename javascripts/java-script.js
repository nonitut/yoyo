$(document).ready(function() {
	//console.log( 'готов!' ); // на jQuery
    $(".demo").html("hi designer hohohoho!");

    $(".box").click(function(){
        $(this).toggleClass("black");
    });

    $(".pink").click(function(){
        $(".demo").addClass("pink");
    });

    $(".blue").click(function(){
        $(".demo").removeClass("pink");
    });

    $(".add").click(function(){
        $(".highlight").addClass("hidden");
    });

    $(".remove").click(function(){
        $(".highlight").removeClass("hidden");
    });

    $(".toggle").click(function(){
        $(".highlight").toggleClass("blue");
    });



});











document.addEventListener("DOMContentLoaded", function() {
   // console.log( 'hey, i am ready' ); 
   // alert('hey, i am ready');
   let element = document.querySelectorAll(".dydydy");
   element.forEach(function(p){
    p.innerHTML = "princess world";
    p.style.backgroundColor = "pink";
   });
   document.getElementById("candy").innerHTML = "hi princess";
});
