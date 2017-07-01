$( document ).ready(function() {

function randomQuote() {
  $.ajax({
    url: "https://api.forismatic.com/api/1.0/",
    jsonp: "jsonp",
    dataType: "jsonp",
    data: {
      method: "getQuote",
      lang: "en",
      format: "jsonp"
    },
    success: function(quote) {
      $("#quote").html("&ldquo;" + quote.quoteText + "&rdquo;");
      $("#author").html("- " + quote.quoteAuthor);
    }
  });//ajax
} //randomQuote

randomQuote();

$(".twitter.button-black").click(function() {
  randomQuote();
});//twitter
}); // ready
