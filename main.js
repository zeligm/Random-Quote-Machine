var quoteRandomizer = {
  quotes:[
            {
              quote: "<strong><em>Every day it gets a little easier. But you have to do it every day, that’s the hard part. But it does gets easier.</strong></em>",
            },
            {
              quote: "<strong><em>If you’re going through hell, keep going.</strong></em>",
            },
            {
              quote: "<strong><em>It doesn't take talent to practice.</strong></em>",
            },
            {
              quote: "<strong><em>Don’t watch the clock, do what it does. Keep going.</strong></em>",
            },
            {
              quote: "<strong><em>The first and greatest victory is to conquer yourself. To be conquered by yourself is of all things most shameful and vile.</strong></em>",
            },
            {
              quote: "<strong><em>Motivation is fleeting, discipline is not.</strong></em>",
            },
            {
              quote: "<strong><em>Pain is inevitable, suffering is optional.</strong></em>",
            },
            {
              quote: "<strong><em>The master has failed more times than the beginner has even tried.</strong></em>",
            },
            {
              quote: "<strong><em>If you want to be good at something you first must be willing to be bad at it.</strong></em>",
            },
        ],
  randomize: function () {
    var randomQuote = quoteRandomizer.quotes[Math.floor(Math.random() * quoteRandomizer.quotes.length)];
    return randomQuote;
  }
};

var display = {
  displayQuote: function() {
    var quoteSpan = document.querySelector('span');
    quoteSpan.innerHTML = quoteRandomizer.randomize().quote;
  }
};

$("#tweet").on("click", function() {
  window.open('http://www.twitter.com/intent/tweet?text=' + $('.tweet').html())
});
