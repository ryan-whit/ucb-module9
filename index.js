// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// README sections
// title (in README title)
// Description
// Table of Contents
// Installation
// Usage
// License
// Contributing
// Tests
// Questions

// TODO: specify the license choices
const licenseOptions = ["option1", "option2"];

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Please input the project of your title: ',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide the description of your project: ',
    },
    {
      type: 'input',
      name: 'installationInstructions',
      message: 'Please provide installation instructions: ',
    },
    {
      type: 'input',
      name: 'usageInformation',
      message: 'Please provide usageInformation: ',
    },
    {
      type: 'input',
      name: 'contributingGuidelines',
      message: 'Please provide the contributing guidelines: ',
    },
    {
      type: 'input',
      name: 'testInstructions',
      message: 'Please provide the test instructions: ',
    },
    {
			type: 'list',
			name: 'license',
			message: 'Please select the license for your project: ',
			choices: licenseOptions,
    },
    {
      type: 'input',
      name: 'username',
      message: 'Please provide your GitHub username: ',
    },
    {
      type: 'input',
      name: 'emailAddress',
      message: 'Please provide your email address: ',
    },
  ])
  .then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });


// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
