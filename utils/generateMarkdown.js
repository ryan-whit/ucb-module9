// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
	// Document title
	const titleStr = `# ${data.title}`;
	
	// Description
	const descriptionStr = "# Description";
	
	// Table of Contents
	const tableOfContentsStr = "# Table of Contents";

	// Installation
	const installationStr = "# Installation";
	
	// Usage
	const usageStr = "# Usage";

	// License
	const licenseStr = "# License";

	// Contributing
	const contributingStr = "# Contributing";

	// Tests
	const testsStr = "# Tests";

	// Questions
	const questionsStr = "# Questions";

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
	].join();

	return readmeContents;
}

module.exports = generateMarkdown;
