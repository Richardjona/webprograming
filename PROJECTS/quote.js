let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: '"Don\'t judge each day by the harvest you reap but by the seeds that you plant. "',
    person: 'Robert Louis Stevenson'

},{
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    person: "Roosevelt"
},{
    quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    person: "Robert Louis"
},{
    quote: "You will face many defeats in life, but never let yourself be defeated.",
    person: "ANgeluo"
},{
    quote: "In the end, it's not the years in your life that count. It's the life in your years.",
    person: "Abraham Lincoln"
},{
    quote: "Never let the fear of striking out keep you from playing the game.",
    person:"Babe Ruth"
},{
    quote:"Life is either a daring adventure or nothing at all",
    person: "Helen Keller"
},{
    quote:"Always remember that you are absolutely unique. Just like everyone else. ",
    person: "Magret Mead"
},{
    quote:"Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    person: "Mother Teresa"
}];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});  