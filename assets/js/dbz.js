// @codekit-prepend "_nospam.js";
// @codekit-prepend "_scrollme.js";

$(document).ready(function(){

  $(".trigger").click(function(){
  // $(this).toggleClass("offen");
  $(this).siblings(".trigger").next().slideUp();
  $(this).next().slideToggle();
  });

  $(".kontaktsymbol").click(function(){
  $("#kontaktdaten, #logo").toggleClass("offen");
  });
  $(".schliessen").click(function(){
  $("#kontaktdaten, #logo").toggleClass("offen");
  });

  $('.keinspam').nospam({ replaceText: true });

});
