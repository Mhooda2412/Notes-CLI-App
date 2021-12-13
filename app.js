const yargs = require('yargs')
const notes = require('./notes.js')

/*
    creating custom CLI using yargs for:--
    1) Creating new note
    2) Deleting specified note
    3) Listing all notes
    4) Reading specified note  
*/


// creating new note

yargs.command({
    command:'add',
    describe:'Add new note',
    builder:{
        title:{
            describe:'Title of note',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Body of note',
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv)=>{
        notes.addNote(argv.title,argv.body)
    }
})


// Deleting specified note

yargs.command({
    command:'del',
    describe:'Delete specified note',
    builder:{
        title:{
            describe:'Title of note',
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv)=>{
       notes.delNote(argv.title)
    }
})


// Listing all notes
yargs.command({
    command:'list',
    describe:'List all notes',
    handler:()=>{
       notes.listNotes()
    }
})


// Reading specified note
yargs.command({
    command:'read',
    describe:'Read specified note',
    builder:{
        title:{
            describe:'Title of note',
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv)=>{
        notes.readNote(argv.title)
    }
})

// parsing the custom yargs commands
yargs.parse()