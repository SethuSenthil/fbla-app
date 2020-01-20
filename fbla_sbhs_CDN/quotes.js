//make sure the quote is like 5 - 6 words caus long ones kina mess up the UI.
//if we have like 10 - 13 that should be good enough
//take ut time u don't need to cram this or aything
const quote = [
    ['Every problem is a gift—without problems we would not grow.','Anthony Robbins'],
    ['Success usually comes to those who are too busy to be looking for it.','Henry David Thoreau'],
    ['There’s no shortage of remarkable ideas, what’s missing is the will to execute them.','Seth Godin'],
    ['I don’t know the word ‘quit.’ Either I never did, or I have abolished it.','Susan Butcher'],
    ['Imagination is everything. It is the preview of life’s coming attractions.','Albert Einstein'],
    ['The way to get started is to quit talking and begin doing.','Walt Disney'],
    ['Whether you think you can or whether you think you can’t, you’re right!','Henry Ford'],
    ['Success is often achieved by those who don’t know that failure is inevitable.','Coco Chanel'],
    ['I never dreamed about success. I worked for it.','Estée Lauder']
]

//choose random quote
let ranQuote = quote[Math.floor(Math.random()*quote.length)];

//render the random quote in the DOM
document.getElementById('quote-text').innerText = ranQuote[0]
document.getElementById('quote-author').innerText = ranQuote[1]