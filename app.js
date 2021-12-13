const yargs = require('yargs')

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
        /*
            TODO:- Implement addNote(title,body) 
        */
        console.log("adding notes ....")
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
        /*
            TODO:- Implement delNote(title) 
        */
        console.log("deleting notes ....")
    }
})


// Listing all notes
yargs.command({
    command:'list',
    describe:'List all notes',
    handler:()=>{
        /*
            TODO:- Implement listNotes() 
        */
        console.log("listing notes ....")
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
        /*
            TODO:- Implement readNote(title) 
        */
        console.log("reading notes ....")
    }
})

// parsing the custom yargs commands
yargs.parse()