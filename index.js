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


// Map license names to their associated license badge string.
// License names copied from here: https://shields.io/category/license
const LICENSES = {
	"APM": "/apm/l/:packageName",
	"AUR": "/aur/license/:packageName",
	"Bower": "/bower/l/:packageName",
	"Cocoapods": "/cocoapods/l/:spec",
	"Conda": "/conda/l/:channel/:package",
	"CPAN": "/cpan/l/:packageName",
	"CRAN/METACRAN": "/cran/l/:packageName",
	"Crates.io": "/crates/l/:crate",
	"Crates.io": "/crates/l/:crate/:version",
	"CTAN": "/ctan/l/:library",
	"DUB": "/dub/l/:packageName",
	"Eclipse Marketplace": "/eclipse-marketplace/l/:name",
	"GitHub": "/github/license/:user/:repo",
	"GitLab": "/gitlab/license/:project+",
	"GitLab (self-managed)": "/gitlab/license/:project+?gitlab_url=https%3A%2F%2Fjihulab.com",
	"Greasy Fork": "/greasyfork/l/:scriptId",
	"Hex.pm": "/hexpm/l/:packageName",
	"NPM": "/npm/l/:packageName",
	"Ore": "/ore/l/:pluginId",
	"Packagist": "/packagist/l/:user/:repo",
	"Packagist (custom server)": "/packagist/l/:user/:repo?server=https%3A%2F%2Fpackagist.org",
	"PyPI": "/pypi/l/:packageName",
	"REUSE Compliance": "/reuse/compliance/:remote+",
	"Weblate component license": "/weblate/l/:project/:component?server=https%3A%2F%2Fhosted.weblate.org",
};


// Questions for the user that gather content for the README file.
// Will be passed to inquirer when the app is called from the command line
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
		choices: Object.keys(LICENSES),
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
	inquirer
		.prompt(inquirerQuestions)
		.then((data) => {
			console.log("Input successful.");

			generateMarkdown.generateMarkdown(data, LICENSES)

		});
};


// Function call to initialize app
init();
