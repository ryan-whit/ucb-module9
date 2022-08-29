// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
	if (!license) {
		return "";
	}
	// Badge format uses the `query string parameters` as outlined on the
	// shields webpage: https://shields.io/category/license.
	return `![](https://img.shields.io/static/v1?label=license&message=${license}&color=brightgreen)`;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(projectTitle, license, licenseUrl) {
	let licenseStr = "## License\n\n";
	licenseStr += `\`${projectTitle}\` is licensed under the [${license}](${licenseUrl}) license.`;
	return licenseStr
};

function renderQuestionsSection(githubUsername, emailAddress) {
	let questionStr = "## Questions\n\n";
	const githubProfileUrl = "https://github.com/" + githubUsername;
	questionStr += "For additional questions, please visit our page ";
	questionStr += `[on GitHub](${githubProfileUrl}),`;
	questionStr += `or email us at \`${emailAddress}\`.`;
	return questionStr;
};

/**
 * Generate the contents of the README file using the user command line input data.
 * @param {Object} data - Data passed from the user CLI 
 * @param {Object} licenses - Key/value pairs of License name and the badge string
 * @returns {str} - contents of the README.md file
 */
function generateMarkdown(data, licenses) {
	// Document title
	let titleStr = `# ${data.title}\n`;
	titleStr += renderLicenseBadge(data.license);
	
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

	// Contributing
	let contributingStr = "## Contributing\n\n";
	contributingStr += data.contributing;

	// Tests
	let testsStr = "## Tests\n\n";
	testsStr += data.testInstructions;

	const readmeContents = [
		titleStr,
		descriptionStr,
		tableOfContentsStr,
		installationStr,
		usageStr,
		renderLicenseSection(data.title, data.license, licenses[data.license]),
		contributingStr,
		testsStr,
		renderQuestionsSection(data.username, data.emailAddress),
	].join('\n\n');

	return readmeContents;
}

module.exports = generateMarkdown;
