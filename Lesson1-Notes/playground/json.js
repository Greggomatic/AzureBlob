const fs = require('fs');

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJson = JSON.stringify(book);

// //console.log(bookJson);

// const parsedData = JSON.parse(bookJson);

// console.log(parsedData.author);

// fs.writeFileSync('myjsondata.json',bookJson);

// const dataBuffer = fs.readFileSync('myjsondata.json');

// console.log(dataBuffer.toString());

// const data = JSON.parse(dataBuffer.toString());
// console.log(data.author);

const file = 'webjsondata.json';

const filedatab = fs.readFileSync(file);

const parsedJson = JSON.parse(filedatab.toString());

console.log(parsedJson.age);

parsedJson.age = 43;
parsedJson.name = 'Greg';

console.log(parsedJson);

fs.writeFileSync(file,JSON.stringify(parsedJson));

