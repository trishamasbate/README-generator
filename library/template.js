// Get the current year
let year = new Date().getFullYear();

// Create a readme Template

function generateREADME(answers) {
	//Set additional project links

	let additionalProjectLinks = '';

	if (answers.projectLinks) {
		additionalProjectLinks = answers.projectLinks.split(',').join('<br>');
	}

	//Set Screenshots template according to the user iniput
	let screenshots = '';
	if (answers.imageURL) {
		for (let i = 0; i < answers.imageURL.split(',').length; i++) {
			screenshots += `<kbd>![screenshot-demo${i + 1}](${answers.imageURL.split(',')[i].trim()})</kbd>`;
		}
	}

	// Main README structure
	return ` 
  # ${answers.title.toUpperCase()}

  [![github-follow](https://img.shields.io/github/followers/${answers.username
      .trim()
      .toLowerCase()}?label=Follow&logoColor=purple&style=social)](https://github.com/${answers.username.trim().toLowerCase()})
  [![license](https://img.shields.io/badge/License-${answers.license
      .toUpperCase()
      .split('-')
      .join('v')}-brightgreen.svg)](https://choosealicense.com/licenses/${answers.license}/)

  ## Description
  ${answers.description}

  ## Table of Contents
  * [ Description ](#Description)
  * [ Project Links ](#Project-Links)
  * [ Screenshots-Demo ](#Screenshots)
  * [ Technologies ](#Technologies)
  * [ Installation ](#Installation)
  * [ Usage ](#Usage)
  * [ Contributing ](#Contribution-Guidelines)
  * [ Tests ](#Tests)
  * [ Questions ](#Questions)
  * [ License ](#License)
  #

  ##  Project Links
  https://github.com/${answers.username.trim().toLowerCase()}/${answers.repoName.trim()}<br>
  ${additionalProjectLinks}

  ## Screenshots-Demo
  ${screenshots}
  
  ## Installation
  ${answers.installation}

  ## Usage 
  ${answers.usage}
  
  ## Contributing
  ${answers.contributing}

  ## Tests
  ${answers.test}

  ## Questions
  Contact the author with any questions!<br>
  Github link: [${answers.username
		.trim()
		.toLowerCase()}](https://github.com/${answers.username.trim().toLowerCase()})<br>
  Email: ${answers.email}

  ## License
  This project is [${answers.license.toUpperCase()}](https://choosealicense.com/licenses/${answers.license}/) licensed.<br />

  Copyright © ${year} [${answers.authorName.trim().toUpperCase()}](https://github.com/${answers.username.trim().toLowerCase()})
  
  <hr>
  <p align='center'><i>
  All the best! ♥️ ${answers.authorName.trim().toUpperCase()}
  </i></p>
  `;
}

module.exports = generateREADME;
