/**
 * Generate a license badge based on which license agreement is passed in.
 * If there is not license, return an empty string.
 * @param {str} license - license provided by the CLI options. 
 * @returns {str} - URL of the Shields badge.
 */
function renderLicenseBadge(license) {
	if (!license) {
		return "";
	}
	// Badge format uses the `query string parameters` as outlined on the
	// shields webpage: https://shields.io/category/license.
	return `![](https://img.shields.io/static/v1?label=license&message=${license}&color=brightgreen)`;
};


/**
 * Render the license section of the README based on user input.
 * If a license is not provided, return an empty string.
 * @param {str} projectTitle - Title of the project.
 * @param {str} license - license provided by the CLI options.
 * @param {str} licenseUrl - URL to the license information.
 * @returns {str} - License section of the README file.
 */
function renderLicenseSection(projectTitle, license, licenseUrl) {
	if (!license) {
		return "";
	}
	let licenseStr = "## License\n\n";
	licenseStr += `\`${projectTitle}\` is licensed under the [${license}](${licenseUrl}) license.`;
	return licenseStr
};


/**
 * Generate the Questions section of the README file.
 * @param {str} githubUsername - GitHub username - will be appended to the github URL.
 * @param {str} emailAddress - Developer email address used for contributing.
 * @returns {str} Contents of the `Questions` section of the README file.
 */
function renderQuestionsSection(githubUsername, emailAddress) {
	let questionStr = "## Questions\n\n";
	const githubProfileUrl = "https://github.com/" + githubUsername;
	questionStr += "For additional questions, please visit our page ";
	questionStr += `[on GitHub](${githubProfileUrl}), `;
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
