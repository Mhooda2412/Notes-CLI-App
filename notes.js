const fs = require('fs')



/**
 * add new note
 * @param {string} title title of note 
 * @param {string} body body of note
 */
const addNote = (title , body )=>{
   
    const notes = lodeNotes()
    const dublicateNote = notes.find((note)=>{
        return note.title===title
    })
    if(!dublicateNote){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log("Sucessfuly added note")
    }else{
        console.log("title is already taken");
    }
}


/**
 * delete the specified note 
 * @param {string} title 
 */

const delNote =(title)=>{
    const notes = lodeNotes()
    const notesToKeep = notes.filter((note)=>{
        return note.title !== title
    })
    if(notesToKeep.length<notes.length){
        saveNotes(notesToKeep)
        console.log("Sucessfuly removed");
    }else{
        console.log("note not found");
    }
}

/**
 * List all avilable notes title
 */

const listNotes =()=>{
    const notes = lodeNotes()
    if(notes.length!==0){
        console.log("Your notes");
        notes.forEach((note) => {
            console.log(note.title);
        });
    }else{
        console.log("No note found");
    }
}

const readNote = (title)=>{
    try {
        const notes = lodeNotes()
        const readnote = notes.find((note)=>{
            return note.title === title
        })
    
        console.log("Title: - "+readnote.title)
        console.log("Body: -  "+readnote.body )    
    } catch (error) {
        console.log("note with the given title is not found");
    }
    
    
}

/**
 * lode the notes from Notes.json file
 * @returns array of notes objects 
 */

const lodeNotes = ()=>{
    try{
        const dataBuffer = fs.readFileSync("Notes.json")
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
        
    }catch(error){
        return []
    }
}

/**
 * save notes to Notes.json file
 * @param {Object} notes 
 */

const saveNotes = (notes)=>{
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync("Notes.json", dataJSON)
}


module.exports ={
    addNote:addNote,
    delNote:delNote,
    listNotes:listNotes,
    readNote:readNote
}
