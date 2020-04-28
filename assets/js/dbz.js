// @codekit-prepend "_nospam.js";

$(document).ready(function(){

  $(".trigger").click(function(){
  $(this).toggleClass("offen");
  $(this).next().slideToggle();
  });

  $('.keinspam').nospam({ replaceText: true });

});
