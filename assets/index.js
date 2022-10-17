const inquirer = require('inquirer');
const fs = require('fs');
const { default: Choices } = require('inquirer/lib/objects/choices');

const generateMarkdown = ({title, description, installation, usage, contribution, test, license, username, email}) =>

`# ${title}\n\n## Description\n${description}\n## Installation instructions\n${installation}\n## Usage information\n${usage}\n## Contribution Guidelines\n${contribution}\n## Test instructions\n${test}\n## License\n${license}\n## GitHub Username\n${username}\n## Question\nPlease contact me with any questions at ${email}`;


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
    },
    {
      type: 'list',
      message: 'Choose a license for your project',
      name: 'license',
      choices: ['MIT', 'Apache', 'GPL']
    },
    {
      type: 'input',
      message: 'Enter your GitHub username',
      name: 'username'
    },
    {
      type: 'input',
      message: 'Enter your email address',
      name: 'email'
    }
  ])
  .then((response) => {

  const markdownPagecontent = generateMarkdown(response);
  
  fs.writeFile('generateREADME.md', markdownPagecontent,(error, data) =>
  error ? console.error(error) : console.log(data)
  )
  });

