// @codekit-prepend "_nospam.js";
// @codekit-prepend "_scrollme.js";

$(document).ready(function(){

  $(".trigger").click(function(){
  // $(this).toggleClass("offen");
  $(this).siblings(".trigger").next().slideUp();
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
