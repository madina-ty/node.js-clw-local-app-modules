const area = require('./modules/area');
const search = require('./modules/search');
const html = require('./modules/html');
const ascii = require('./modules/ascii');
const number = require('./modules/number');

const circleArea = area.areaCircle(5);
console.log(circleArea);

const foundWords = search.searchWords('Hello, world!', ['Hello', 'world', 'JavaScript']);
console.log(foundWords);

const htmlContent = html.createHTML('<h1>Hello, world!</h1>');
console.log(htmlContent);

const asciiBox = ascii.createASCIIBox('Hello, ASCII');
console.log(asciiBox);

const isPrimeNumber = number.isPrime(17);
console.log(isPrimeNumber);