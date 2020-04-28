$(document).ready(function(){

  $(".trigger").click(function(){
  $(this).toggleClass("offen");
  $(this).next().slideToggle();
  });

});
