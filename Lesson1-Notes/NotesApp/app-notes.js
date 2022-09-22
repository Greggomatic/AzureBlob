const fs = require('fs');
const chalk = require('chalk');

const getNotes = function() {
    return 'your notes';
}

const removeNote = function(title) {

    console.log (chalk.white.bgRed.bold('Receiving request to remove note ' + title));

    const notes = loadnotes();

    const duplicateNotes = notes.filter(function (note) {

        return note.title === title;

    });

    if (duplicateNotes.length === 1) {

        const indexToRemove = notes.indexOf(title);

        console.log(indexToRemove);

        if (indexToRemove >= -1) 
        {
            console.log('removing note....');
            notes.splice(indexToRemove,1);
            saveNotes (notes);
        }
    }
    else {
        console.log(chalk.greenBright('could not find note to remove.'));
    }
}

const addNote = (title, body) => {

    const notes = loadnotes();

    //const duplicateNotes = notes.filter((note) => note.title === title);

    const duplicateNoteSingular = notes.find((note) => note.title === title);

    debugger;


    if (!duplicateNoteSingular) {

        notes.push( {
            title:title,
            body:body
        });

        console.log('New Note added.');
    }
    else {
        console.log('duplicate note detected.');
    }

    saveNotes (notes);
}

const saveNotes = function(notes) {

    const dataJSON = JSON.stringify(notes);    
    fs.writeFileSync('notes2.json',dataJSON);

        return [];
    
}

const loadnotes = function() {

    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();

        return JSON.parse(dataJSON);
    }
    catch (ex) {
        console.log(chalk.redBright('no file found, Error: ' + ex));
        return [];
    }


}

const listnotes = () => {

    try {
        
        console.log(chalk.inverse('Your Notes'));

        const notes = loadnotes();

        notes.forEach(note => {
            console.log(note.title);
        });

        return notes;
        
    }
    catch (ex) {
        console.log(chalk.redBright('no file found, Error: ' + ex));
        return [];
    }


}

const readNote = (title) => {

    const notes = loadnotes();

    const foundNote = notes.find(note => note.title == title);

    if (foundNote) {
        console.log('Note has been found:' + foundNote.title);
    }
    else {
        console.log(chalk.red('Could not find note'));
    }

}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listnotes: listnotes,
    readNote: readNote
}