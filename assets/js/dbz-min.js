!function(t){t.fn.nospam=function(l){return l=t.extend({replaceText:!1,filterLevel:"normal"},l),this.each((function(){e=null,"low"==l.filterLevel?t(this).is("a[rel]")?e=t(this).attr("rel").replace("//","@").replace(/\//g,"."):e=t(this).text().replace("//","@").replace(/\//g,"."):t(this).is("a[rel]")?e=t(this).attr("rel").split("").reverse().join("").replace("//","@").replace(/\//g,"."):e=t(this).text().split("").reverse().join("").replace("//","@").replace(/\//g,"."),e&&(t(this).is("a[rel]")?(t(this).attr("href","mailto:"+e),l.replaceText&&t(this).text(e)):t(this).text(e))}))}}(jQuery),$(document).ready((function(){$(".trigger").click((function(){$(this).siblings(".trigger").next().slideUp(),$(this).next().slideToggle()})),$(".kontaktsymbol").click((function(){$("#kontaktdaten, #logo").toggleClass("offen")})),$(".schliessen").click((function(){$("#kontaktdaten, #logo").toggleClass("offen")})),$(".keinspam").nospam({replaceText:!0}),$(".person").click((function(){$(this).toggleClass("current").next().toggleClass("open"),$(this).siblings(".person").removeClass("current").next().removeClass("open"),$(".info").slideUp()}))}));