  // a function that returns a license badge based on which license is passed in
  // If there is no license, return an empty string
  function renderLicenseBadge(licenseBadge) {
    if (licenseBadge !== 'None'){
      return `![License](https://img.shields.io/badge/License-${licenseBadge}-blue.svg)`
    } 
    return ''
  }
  
  // a function that returns the license link for the table of contents
  // If there is no license, return an empty string
  function renderLicenseLink(licenseLink) {
    if (licenseLink !== 'None'){
      return `* [License](#license)`
    } 
    return ''
  }
  
  // a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license !== 'None'){
      return `## License
      
This project is licensed under the ${license} license.`
    } 
    return ''
  }
  
  // a function to generate markdown for README
const generateMarkdown = (data) => {
  //returning a template literal (README text in Markdown format)
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

To be able to install the project, the following is needed to install packages and/or dependencies:
~~~
${data.install}
~~~

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contribute}

## Tests

To run tests, run the following command:
~~~
${data.testing}
~~~

## Questions

If you have questions about the repo, open an issue or contact me directly at ${data.email}. 

You can find more of my work at [${data.username}](https://github.com/${data.username}).
`;
  }

//exporting the generateMarkdown function (will be the returned data)
module.exports = generateMarkdown
