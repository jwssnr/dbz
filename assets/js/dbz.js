// @codekit-prepend "_nospam.js";

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

  $(".person").click(function(){
    // bild und text müssen in html aufeinander folgen, damit das mit next funktioniert. ist aber auch von der element-abfolge semantisch richtig.
    $(this).toggleClass("current").next().toggleClass("open");
    $(this).siblings(".person").removeClass("current").next().removeClass("open");

    $(".info").slideUp();

  });

});
