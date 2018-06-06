var quoteRandomizer = {
  quotes:[
            {
              quote: "Every day it gets a little easier. But you have to do it every day, that’s the hard part. But it does gets easier.",
            },
            {
              quote: "If you’re going through hell, keep going.",
            },
            {
              quote: "It doesn't take talent to practice.",
            },//comment here
            {
              quote: "Don’t watch the clock, do what it does. Keep going.",
            },
            {
              quote: "The first and greatest victory is to conquer yourself. To be conquered by yourself is of all things most shameful and vile.",
            },
            {
              quote: "Motivation is fleeting, discipline is not.",
            },
            {
              quote: "Pain is inevitable, suffering is optional.",
            },
            {
              quote: "The master has failed more times than the beginner has even tried.",
            },
            {
              quote: "If you want to be good at something you first must be willing to be bad at it.",
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
