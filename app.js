/***********************************

Import Your Own Files

*************************************/

// Notes:
  // In order to access variables and methods
  // in other modules, we have to export them
  // in ordert to have access to them.

  // Npm are packages that we can install such
  // as validating data like emails or sending emails.
  // We can use npm modules to solve problems.

  // Npm are packages to add additional functionality to our modules.

  // Npm is the package manager for JavaScript and the world's largest
  // software registry. Discover packages of reusable code - and assemble
  // them in powerful new ways.

  // We have to initialize npm in our project by
  // typing in the terminal npm init.

  // Json stands for JavaScript Object notation.

  // chalk npm package allows us to change how text appaers on the console.


    // Global npm packages allows us to execute new commands on the terminal.
    // If having problem installing a package type sudo to run it
    // as an administrator, as a result type sudo npm install nodemon.

    /***************************

    Arguments Parsing With Yargs

    *****************************/

    // Notes:
      // Yargs npm package helps you build interactive command
      // line tools, by parsing arguments and generating
      // an elegant user interface.

      // Things our node application should do:
        // add, remove, read, list.

    /*****************************

    Storing data with Json

    ******************************/

    // Storing data in file using the file system module.
    // Json is a format data that uses an array of
    // objects which each object represents
    // a note, and each object will have various properties
    // such as title and body.

// Outputs empty line.
console.log("");
// Outputs to the console.
console.log("################# Running Program ##################");
// Outputs empty line.
console.log("");

// Function call.
// Takes one parameter,
// loads chalk package.
// Stores output in the variable chalk.
const chalk = require('chalk');
// Function call.
// Takes one parameter,
// loads Yargs package.
// Stores output in the variable
const yargs = require('yargs');
// Function call.
// Takes one parameter,
// loads the notes.js module.
// Stores output in the variable notes.
const notes = require('./notes.js');

// Method call
// using object name.
// Takes one parameter.
yargs.version('1.1.0');

// Method call
// using object name.
// Takes one parameter,
// creates add command.
yargs.command({

  // Builds property.
  // Provides name add to cammand.
  command: 'add',
  // Builds property.
  // Describes value.
  describe: 'Add a new note',
  // Builds property.
  // Builder value is an object.
  builder: {

    // Builds object.
    title: {

      // Builds property.
      describe: 'Note title',
      // Builds property.
      // You have to provide an argument in order for the code to
      // work correctly.
      demandOption: true,
      // Builds property.
      // Title property is always expecting a string.
      type: 'string'

    },

    // Builds object.
    body: {

      // Builds property.
      describe: 'Note body',
      // Builds property.
      // You have to provide an argument in order for the Code
      // to work correctly.
      demandOption: true,
      // Builds property.
      // Body property is always expecting a string.
      type: 'string'

    }

  },

  // Function call.
  // Takes one paramater.
  // Code that runs when someone uses the add command.
  handler(argv) {

    // Method using object name.
    // Takes two parameters.
    notes.addNote(argv.title, argv.body)

  }

});

// Method call
// using object name.
// Takes one parameter,
// creates remove command.
yargs.command({

  // Builds property.
  // Provides name remove to command.
  command: 'remove',
  // Builds property.
  // Describes value.
  describe: 'Remove a note',
  // Builds builder object.
  builder: {

    // Builds object.
    title: {

      // Builds property.
      describe: 'Note title',
      demandOption: true,
      type: 'string'

    }

  },
  // Builds property.
  // Code that runs when someone uses the remove command.
  // Stores function call.
  // Commanand handler
  handler(argv) {

    // Function call.
    // Takes one parameter,
    // the title to remove.
    notes.removeNote(argv.title);

  }

});

// Method call
// using object name.
// Takes one parameter,
// creates list command.
yargs.command({

  // Builds property.
  // Provides name list to command.
  command: 'list',
  // Describes value.
  describe: 'List your note',
  // function call.
  // Code that runs when someone uses the list command.
  handler() {

    // Method call
    // using object name.
    // Takes no parameters.
    notes.listNotes();


  }

});

// Method call
// using object name.
// Takes one parameter,
// creates read command.
yargs.command({

  // Builds property.
  // Provides name read to command.
  command: 'read',
  // Describes value.
  describe: 'Read a note',

  // Builds builder object.
  builder: {

    // Builds object.
    title: {

      // Buils properties.
      describe: 'Note title',
      demand: true,
      type: 'string'

    }

  },

  // function call.
  // Takes one parameter,
  // an argument.
  // Code that runs when someone uses the read command.
  handler(argv) {

    // Function call
    // using object name.
    // Takes one parameter,
    // the title.
    notes.readNote(argv.title);

  }

});

// Method call
// using object name.
// Takes no parameters.
// Parses arguments with
// all configuration details you provide.
yargs.parse();

// Ouputs empty line.
console.log("");
// Outputs to the console.
console.log("################ Exiting Program ####################");
// Outputs empty line.
console.log("");
