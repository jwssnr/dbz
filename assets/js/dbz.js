// @codekit-prepend "_nospam.js";

$(document).ready(function(){

  var rhabarber = '<div class="browserblast">';
    rhabarber += '<h2>:-(</h2>';
    rhabarber += '<p>Ihr Browser stammt aus geraumer Vorzeit und ist zu alt, um unsere Website sauber darzustellen und sicher zu nutzen.</p>';
    rhabarber += '<p>Wir empfehlen, ein <a href="https://www.microsoft.com/en-us/edge" target="_blank">Upgrade</a> oder einen Wechsel auf <a href="https://www.firefox.com" target="_blank">Firefox</a> oder <a href="https://www.google.com/chrome" target="_blank">Google Chrome</a> vorzunehmen.</p>';
    rhabarber += '<p class="absender">Freundliche Grüsse<br>A.Degginger, S.Bischof und S.Zlabinger</p>';
    rhabarber += '<p class="browserblast__closer">×</p>';
    rhabarber += '</div>';
    document.body.innerHTML += rhabarber;
    $(".browserblast__closer").click(function(){
      $(".browserblast").fadeOut();
    });

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
