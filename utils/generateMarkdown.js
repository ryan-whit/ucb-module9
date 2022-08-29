// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

/**
 * Generate the contents of the README file using the user command line input data.
 * @param {Object} data - Data passed from the user CLI 
 * @param {Object} licenses - Key/value pairs of License name and the badge string
 * @returns {str} - contents of the README.md file
 */
function generateMarkdown(data, licenses) {
	// Document title
	const titleStr = `# ${data.title}\n`;
	
	// Description
	let descriptionStr = "## Description\n\n";
	descriptionStr += data.description;

	// Table of Contents
	let tableOfContentsStr = "## Table of Contents\n\n";
	tableOfContentsStr += [
		"- [Installation](#installation)",
		"- [Usage](#usage)",
		"- [License](#license)",
		"- [Contributing](#contributing)",
		"- [Tests](#tests)",
		"- [Questions](#questions)",
	].join("\n");

	// Installation
	let installationStr = "## Installation\n\n";
	installationStr += data.installation;

	// Usage
	let usageStr = "## Usage\n\n";
	usageStr += data.usageInformation;

	// License
	let licenseStr = "## License\n\n";
	// TODO: licensing info

	// Contributing
	let contributingStr = "## Contributing\n\n";
	contributingStr += data.contributing;

	// Tests
	let testsStr = "## Tests\n\n";
	testsStr += data.testInstructions;

	// Questions
	let questionsStr = "## Questions\n\n";
	// TODO: questions contents with email/github username
	
	const readmeContents = [
		titleStr,
		descriptionStr,
		tableOfContentsStr,
		installationStr,
		usageStr,
		licenseStr,
		contributingStr,
		testsStr,
		questionsStr,
	].join('\n\n');

	return readmeContents;
}

module.exports = generateMarkdown;
