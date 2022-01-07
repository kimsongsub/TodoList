const quotes = [
  {
    content:
      "You have heard that it was said, 'Eye for eye, and tooth for tooth.'",
    author: "Jesus",
  },
  {
    content:
      "But I tell you, do not resist an evil person. If anyone slaps you on the right cheek, turn to them the other cheek also.",
    author: "Jesus",
  },
  {
    content:
      "And if anyone wants to sue you and take your shirt, hand over your coat as well.",
    author: "Jesus",
  },
  {
    content: "If anyone forces you to go one mile, go with them two miles.",
    author: "Jesus",
  },
  {
    content:
      "Give to the one who asks you, and do not turn away from the one who wants to borrow from you.",
    author: "Jesus",
  },
];

const todayQuote = document.querySelector(".main-page #today-quote");
const todayQuoteContent = todayQuote.querySelector("span:first-child");
const todayQuoteAuthor = todayQuote.querySelector("span:nth-child(2)");

const randomNumber = Math.floor(Math.random() * quotes.length);

todayQuoteContent.innerText = quotes[randomNumber].content;
todayQuoteAuthor.innerText = quotes[randomNumber].author;
