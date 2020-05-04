// @codekit-prepend "_nospam.js";

$(document).ready(function(){

  $(".trigger").click(function(){
  $(this).toggleClass("offen");
  $(this).next().slideToggle();
  });

  $(".kontaktsymbol").click(function(){
  $("#kontaktdaten").toggleClass("offen");
  });
  $(".schliessen").click(function(){
  $("#kontaktdaten").toggleClass("offen");
  });

  $('.keinspam').nospam({ replaceText: true });

});
