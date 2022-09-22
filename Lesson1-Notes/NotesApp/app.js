const validator = require ('validator');
const chalk = require('chalk');
const yargs = require('yargs');

//const j = require('./utils.js');
const appNotes = require('./app-notes.js');

yargs.version('1.1.0');

yargs.command({
        command: 'add',
        describe: 'add a new note to our document',
        builder: {
            title: {
                describe: 'Note Title',
                demandOption: true,
                type: 'string'
            },
            body: {
                describe: 'Note Body',
                demandOption: true,
                type: 'string'
            }            
        },
        handler(argv) {
            appNotes.addNote(argv.title,argv.body);
            console.log (chalk.white.bgBlue.bold('Title: ' + argv.title));
            console.log (chalk.blue.bold('Body: ' + argv.body));
        }
});

yargs.command({
    command: 'remove',
    describe: 'remove a new note to our document',
    handler() {
        console.log (chalk.white.bgRed.bold('remove a new note'));
    }
});

yargs.command({
    command: 'list',
    describe: 'list all the notes',
    handler() {
        appNotes.listnotes();
        console.warn (chalk.cyan('list the notes'));
    }
});

yargs.command({
    command: 'read',
    describe: 'read all the notes from the document',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }         
    },    
    handler(argv) {
        appNotes.readNote(argv.title);
        console.warn (chalk.green('reading notes'));
    }
});

yargs.parse();

// const command = process.argv[2];

// if (command === 'add') 
// {
//     console.log('Adding Note!');
// }
// else if (command === 'remove') 
// {
//     console.log('Removing Note!');
// }
