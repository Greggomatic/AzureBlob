// const Name = 'gregger';

// console.log('from utils.js');


// const add = function (a,b) {
//     return (a + b);
// }

// module.exports = add;

const fs = require('fs');

function GetNotes() 
{
    console.warn('Opening file...');
    var filename = 'notes.txt';
    const data = fs.readFileSync(filename);

    return data;
}

module.exports = GetNotes;