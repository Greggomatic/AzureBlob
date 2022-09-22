const validator = require ('validator');
const chalk = require('chalk');
const yargs = require('yargs');

const j = require('./utils.js');

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
        handler: function(argv) {
            console.log (chalk.white.bgBlue.bold('Title: ' + argv.title));
            console.log (chalk.blue.bold('Body: ' + argv.body));
        }
});

yargs.command({
    command: 'remove',
    describe: 'remove a new note to our document',
    handler: function() {
        console.log (chalk.white.bgRed.bold('remove a new note'));
    }
});

yargs.command({
    command: 'list',
    describe: 'list all the notes',
    handler: function() {
        console.warn (chalk.cyan('list the notes'));
    }
});

yargs.command({
    command: 'read',
    describe: 'read all the notes from the document',
    handler: function() {
        console.warn (chalk.green('reading notes'));
    }
});

yargs.parse();