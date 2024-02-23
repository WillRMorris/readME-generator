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
  return `# ${data.title}
  `

  // ## Description
  
  // ## Installation
  
  // ## Usage
  
  // ## Credits
  
  // ## License
  
  // 🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

    // ## Table of Contents (Optional)
  
  // If your README is long, add a table of contents to make it easy for users to find what they need.
  
  // - [Installation](#installation)
  // - [Usage](#usage)
  // - [Credits](#credits)
  // - [License](#license)
  
  // ## Features
  
  // If your project has a lot of features, list them here.
  
  // ## How to Contribute
  
  // If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
  
  // ## Tests
  
  // Go the extra mile and write tests for your application. Then provide examples on how to run them here.

}

module.exports = {
  generateMarkdown,

}