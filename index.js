//included the inquirer, fs, path packages and the generateMarkdown.js file
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js');
const path = require('path')

//this array holds the questions' type, message, and name 
const questions = [ 
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Provide a short description of your project.', 
        name: 'description',
      },
      {
       type: 'input',
       message: 'Describe the installation instructions (for packages or dependencies) for your project.',
       name: 'install',
     },
     {
       type: 'input',
       message: 'What does the user need to know about to be able to use the repo?', 
       name: 'usage',
     },
     {
       type: 'input',
       message: 'What does the user need to know about to contribute to the repo?', 
       name: 'contribute',
     },
     {
       type: 'input',
       message: 'What command do I need to run to test this project?).',
       name: 'testing',
     },
     {
       type: 'list',
       message: 'Which license type are you using for your project?',
       name: 'license',
       choices: [
           'MIT', 'Apache', 'GPLv2', 'None'
         ]     
     },
     {
       type: 'input',
       message: 'What is your GitHub username?',
       name: 'username',
     },
     {
       type: 'input',
       message: 'What is your email address?',
       name: 'email',
     }
 

];


//This function generates the README.md file
const writeToFile = (fileName, data) => {
    //this creates the file in the cwd (current working directory) - Develop folder with the name we passed in
    //passes in the data from generateMarkdown
    return fs.writeFileSync(path.join(process.cwd(),fileName), data)
}
    
// a function to initialize the app
function init() {
    //inquirer will ask questions in questions array
    inquirer
     .prompt(questions)
    .then((data) => {
        // console.log(data, typeof data);    
        //let's user know that the README file is generating 
        console.log ("Generating README file")
        //call the writeToFile function, calling it README.md and passing in data from generateMarkdown
        writeToFile('GeneratedREADME.md', generateMarkdown({...data}))
    })
}

// Function call to initialize app
init();