let quotes = [`"So many books, so little time."
 ― Frank Zappa`,
`“A room without books is like a body without a soul.”
― Marcus Tullius Cicero
`,
`“You only live once, but if you do it right, once is enough.”
― Mae West`,
`“Be the change that you wish to see in the world.”
― Mahatma Gandhi`,
`“If you tell the truth, you don't have to remember anything.”
― Mark Twain`,
`“A friend is someone who knows all about you and still loves you.”
― Elbert Hubbard`,
`“Live as if you were to die tomorrow. Learn as if you were to live forever.”
― Mahatma Gandhi`,
`“Always forgive your enemies; nothing annoys them so much.”
― Oscar Wilde`,
`“To live is the rarest thing in the world. Most people exist, that is all.”
― Oscar Wilde`,
`“Without music, life would be a mistake.”
― Friedrich Nietzsche, Twilight of the Idols`];

function newQuote(){
    let count = quotes.length;
    let Random = Math.floor(Math.random()*count);
    document.getElementById('quote').innerHTML = quotes[Random].fontcolor('pink').fontsize("5px");
}