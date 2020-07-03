const fs = require('fs')
const chalk = require('chalk')
const { title } = require('process')
const getNotes = function() {
    return 'your notes'
}

const addNote = function(title , body) {
    const notes = loadNotes()
    const duplicateNOtes = notes.filter(function (){
        return false
    })

    if ( duplicateNOtes.length === 0){

    notes.push({
        title: title,
        body: body
    })
    saveNotes(notes)
    console.log('new note added') 
} else {
    console.log('note title taken')
  }
}
const removeNote = function (title) {
    const notes = loadNotes()
    const notesTokeep = notes.filter(function  (note) {
        return note.title !== title
    }) 
if (notes.length > notesTokeep.length) {
    console.log(chalk.green.inverse('note removed'))
} else {
    console.log(chalk.red.inverse('no note found'))
}
}
const listNotes = () => {
        const notes =  loadNotes()
        
        console.log(chalk.inverse('your notes'))
        
        notes.forEach((note) => {
            console.log(note.title)
        })   
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('not note found'))
    }
}



const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
const loadNotes = function() {
    try {
        const dataBUffer = fs.readFileSync('notes.json')
        const dataJSON = dataBUffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
    
    
    

}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
