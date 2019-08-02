/**********************************************

notes file

***********************************************/

// Function call.
// Takes one parameter,
// loads the fs module.
// Stores output in the fs variable.
const fs = require('fs');
// Function call.
// Takes one parameter,
// loads the chalk module.
// Stores output in the chalk variable.
const chalk = require('chalk');

// Builds function
// using arrow format.
// Takes two parameters.
// Function responsible for adding a note.
const addNote = (title, body) => {

  // Function call.
  // Takes no parameters,
  // stores output in the variable notes.
  const notes = loadNotes();

  // Method call
  // using object name.
  // Takes one parameter,
  // the array.
  // Method stops when it finds the first match of duplicate.
  // The purpose of this method
  // is to see if there are no duplicates in the array.
  const duplicateNote = notes.find((note) => note.title === title);

  // Builds if statement.
  // We didn't find any duplicates.
  if (!duplicateNote) {

    // Pushes each note as an object.
    // Adds to the empty erray.
    notes.push ({

      // Sets title property
      // that comes from the argument given on line 7.
      title: title,
      // Sets body property
      // that comes from the argument given on line 7.
      body: body

    });

    // Function call.
    // Takes one parameter.
    // Saves new notes.
    saveNotes(notes);

    // Outputs to the console.
    console.log(chalk.green.inverse('New note added!'));

  } else {

    // We found duplicates.
    console.log(chalk.red.inverse('Note title taken!'));

  }

}

// Builds function
// using arrow format.
// Takes one parameter.
// the title of the note to deletee.
const removeNote = (title) => {

  // Function call
  // takes no parameters.
  // stores value in the variable theTitle.
  const notes = loadNotes();

  // Function call
  // using object name.
  // Takes one parameter,
  // a function.
  // The purpose of this function is to see the notes to keep.
  const notesToKeep = notes.filter((note) => note.title != title)

  // Builds if statement.
  // If statement runs with green if a note was remove,
  // else it will output with the red saying that a note
  // was not remove.
  if(notes.length > notesToKeep.length) {

    // Outputs to the console.
    console.log(chalk.green.inverse('Note remove!'));

    // Function call.
    // Takes one parameter,
    // the array with notes.
    saveNotes(notesToKeep);

  } else {

    // Outputs to the console.
    console.log(chalk.red.inverse('No note found!'));

  }

}

// Builds function.
// Takes no parameters.
// Stores output in the variable listNotes.
const listNotes = () => {

  // Outputs to the console.
  console.log(chalk.inverse('Your notes!'));

  // Function call.
  // Takes no parameters,
  // loads the current notes.
  // Stores output in the variable notes.
  const notes = loadNotes();

  // Builds foreach loop
  // to loop through the array of notes.
  notes.forEach((note) => {

    // Outputs the title of
    // the note through each loop iteration.
    console.log(note.title)

  });

}

// Builds function.
// Takes one parameter,
// the title.
// Stores output in the variable readNote.
const readNote = (title) => {

  // Function call.
  // Takes no parameters,
  // loads the current notes.
  // Stores output in the variable notes.
  const notes = loadNotes();

  // Method call
  // using object name.
  // Takes one parameter,
  // looks in the array until a match is found.
  // Stores output in the variable note.
  const note = notes.find((note) => note.title === title);

  // Builds if statement.
  // Prints note if there is one,
  // else there is not a note.
  if(note) {

    // Outputs to the console.
    console.log(chalk.inverse(note.title));
    console.log(note.body);

  } else {

    console.log(chalk.red.inverse('Note not found'));

  }

}

// Builds function
// using arrow format.
// Takes one parameter,
// the array to save data.
const saveNotes = (notes) => {

  // Function call
  // using object name.
  // Takes one parameter.
  // Stores output in the variable dataJSON.
  const dataJSON = JSON.stringify(notes);

  // Method  call
  // using object name.
  // Takes two parameters,
  // creates file and and writes to the
  // file whatever is stored in the dataJSON.
  fs.writeFileSync('notes.json', dataJSON);

}

// Builds function
// using arrow format.
// Takes no parameters,
// returns an array of notes.
const loadNotes = () => {

  // Builds try and catch
  // exception to handle errors.
  try {

    // Function call.
    // Takes one parameter,
    // loads a file.
    // stores output in the variable dataBuffer.
    const dataBuffer = fs.readFileSync('notes.json');

    // Method call
    // using object name.
    // Takes one parameter,
    // converts data to a string.
    // Stores output in the variable dataJSON.
    const dataJSON = dataBuffer.toString();

    // Method call
    // using object name.
    // Takes one parameter,
    // Parses data.
    return JSON.parse(dataJSON);

  } catch(e) {

    // Code that runs if there is an empty file.
    // Returns an empty array.
    return [];

  }

}

// Export code from this module
// and sets it as an object.
// Exports code with two properties.
module.exports = {

  // Builds property.
  // stores function call.
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote

};
