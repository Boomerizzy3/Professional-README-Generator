// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

const inquirer = require('inquirer');
const fs = require('fs')

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Enter a description of your project.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Enter installation instructions for your project.',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Enter the usage information for your project.',
      name: 'usage'
    },
    {
      type: 'input',
      message: 'Enter contribution guidelines for your project',
      name: 'contribution'
    },
    {
      type: 'input',
      message: 'Enter test instructions for your project',
      name: 'test'
    }
  ])
  .then((response) => fs.writeFile('generateREADME.md', `# ${response.title}\n\n## description\n${response.description}`,(error, data) =>
  error ? console.error(error) : console.log(data)
  ));

