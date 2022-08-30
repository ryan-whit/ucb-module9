// Imported the needed modules.
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require("fs");

// License list and the associated URLs were obtained from the following sources:
// https://opensource.org/licenses
// https://www.gnu.org/licenses/license-list.en.html
// https://directory.fsf.org/wiki/Main_Page
const LICENSES = {
	"Apache-2.0": "http://www.apache.org/licenses/",
	"BSD-3-Clause": "https://spdx.org/licenses/BSD-3-Clause.html",
	"GPL-3.0": "https://www.gnu.org/licenses/gpl-3.0.en.html",
	"MIT": "https://spdx.org/licenses/MIT.html",
	"MPL-2.0": "https://www.mozilla.org/en-US/MPL/2.0/",
	"CDDL-1.0": "http://opensource.org/licenses/CDDL-1.0",
	"EPL-2.0": "https://spdx.org/licenses/EPL-1.0.html",
};

// Questions for the user that gather content for the README file.
// Will be passed to inquirer when the app is called from the command line.
const inquirerQuestions = [
	{
		type: 'input',
		name: 'title',
		message: 'Please provide the title of your project: ',
	},
	{
		type: 'input',
		name: 'description',
		message: 'Please provide the description of your project: ',
	},
	{
		type: 'input',
		name: 'installation',
		message: 'Please provide installation instructions: ',
	},
	{
		type: 'input',
		name: 'usageInformation',
		message: 'Please provide usageInformation: ',
	},
	{
		type: 'input',
		name: 'contributing',
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
		choices: Object.keys(LICENSES),  // Using the object keys to query the user from the command line
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
];

// Initialize the app.
function init() {
	inquirer
		.prompt(inquirerQuestions)
		.then((data) => {
			// Generate the markdown contents that will be written to a file.
			const readmeContents = generateMarkdown(data, LICENSES)

			// Write the generated contents to a README file.
			fs.writeFile("./output/README.md", readmeContents, (err) =>
				err ? console.error(err) : console.log("README.md generated.")
			);
		});
};


// Initialize the app.
init();
