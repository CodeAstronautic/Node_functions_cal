const validator = require('validator')
const yargs = require('yargs')
const notes = require('./notes.js')

//const msg = notes()
const command = process.argv[2]

const chalk = require('chalk');
const { demandOption, string } = require('yargs');

console.log(chalk.blue.bgRed.bold('Hello world!'))
console.log(chalk.blue.bgBlue.bold('Hello world!'))
console.log(chalk.blue.bgYellow.bold('Hello world!'))
console.log(chalk.blue.bgGreen.bold('Hello world!'))
console.log(chalk.green(
    'I am a green line ' +
    chalk.blue.underline.bold('with a blue substring') +
    ' that becomes green again!'
));

if (command === 'add') {
    console.log('adding user')
} else if (command === 'remove') {
    console.log('removing user')
}

yargs.version('1.1.0')

//create add command

yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            description: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//create remove command 
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: string
        }
    },
    handler: function(argv) {
        notes.removeNote(argv.title)
    }
})

//create list command 

yargs.command({
    command: 'list',
    describe: 'add one list',
    handler: function() {
        notes.listNotes()
    }
})

//create read command 
yargs.command({
    command: 'read',
    describe: 'read the command',
    builder: {
        title: {
            
        description: 'note titl',
        demandOption: true,
        type: string
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})


yargs.parse()


//console.log(msg)
console.log(process.argv)
console.log(validator.isEmail('pooja@gmail.com'))

console.log(yargs.argv)