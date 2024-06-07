const questions = [
	{
		// Author Name
		type: 'input',
		message: 'Enter your FULL Name',
		name: 'authorName',
		validate: function(name) {
			let pass = name.match(/^[a-zA-Z]+ [a-zA-Z]+$/g);
			if (pass) {
				return true;
			}

			return 'Please enter a valid FULL Name.';
		},
	},
	{
		// Author Email
		type: 'input',
		message: 'Enter your email',
		name: 'email',
		validate: function(email) {
			let pass = email.match(/\S+@\S+\.\S+/g);
			if (pass) {
				return true;
			}

			return 'Please enter a valid email.';
		},
	},
	{
		// Github Username
		type: 'input',
		message: 'Enter your Github Username',
		name: 'username',
		validate: function(username) {
			if (username) {
				return true;
			}

			return 'It is required to enter your Github Username.';
		},
	},
	{
		// Github Repository Name
		type: 'input',
		message: 'Enter your Project Github Repository name (* Be sure your input is the SAME as your repository name on Github.)',
		name: 'repoName',
		validate: function(reponame) {
			if (reponame) {
				return true;
			}

			return 'It is required to enter your Github Project Repository name.';
		},
	},
	{
		// Additional Project Links
		type: 'confirm',
		name: 'isLinks',
		message: 'Besides the project repo link, would you like to add additional project link(s)?',
		default: false,
	},
	{
		// Get Addtional Project Links
		// https://stackoverflow.com/questions/161738/what-is-the-best-regular-expression-to-check-if-a-string-is-a-valid-url
		type: 'input',
		name: 'projectLinks',
		message: 'Enter the additional project link(s) using the entire link, including the http(s):. (* Use comma "," to separate each link)',
		when: function(answers) {
			return answers.isLinks !== false;
		},
		validate: function(projectLinks) {
			for (let i = 0; i < projectLinks.split(',').length; i++) {
				let pass = projectLinks.split(',')[i].trim().match(/^(ht|f)tp(s?)\:\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-\.\?\,\'\/\\\+&amp;%\$#_]*)?$/g);
			
			if (pass) {
				return true;
			}
				
			return 'Provide the valid links of the project using the entire link, including the http(s):';
			}
		},
	},
	{
		// Project Title
		type: 'input',
		message: 'Enter your Project Title',
		name: 'title',
		validate: function(title) {
			if (title) {
				return true;
			}

			return 'A professional README has a Project Title.';
		},
	},
	{
		// Screenshots and/or Demo
		type: 'confirm',
		name: 'screenshots',
		message: 'Would you like to add screenshots or demo to README?',
		default: false,
	},
	{
		// Get Image Path and/or URL
		type: 'input',
		name: 'imageURL',
		message: 'Enter the image paths or URLs of the screenshots or demo. (* Use comma "," to separate each path or url)',
		when: function(answers) {
			return answers.screenshots !== false;
		},
		validate: function(imageURL) {
			if (imageURL) {
				return true;
			}

			return 'Provide the image paths or URLs of the screenshots or demo. ';
		},
	},
	{
		// Project Objective
		type: 'input',
		message: 'What is your Project Objective?',
		name: 'objective',
		validate: function(objective) {
			if (objective) {
				return true;
			}

			return 'A professional README provides the Project Objective.';
		},
	},
	{
		// Project User Story
		type: 'input',
		message: 'Provide the User Story for your Project',
		name: 'userStory',
		validate: function(userstory) {
			if (userstory) {
				return true;
			}

			return 'A professional README provides the User Story for the Project.';
		},
	},
	{
		// Technologies Used
		type: 'input',
		message: 'List the Technologies used for the Project. (* Use comma "," to separate each technology)',
		name: 'technologies',
		validate: function(tech) {
			if (tech) {
				return true;
			}

			return 'A professional README lists Technologies used for the Project.';
		},
	},
	{
		// Installation
		type: 'input',
		message: 'What are the steps required to install your project?',
		name: 'installation',
		validate: function(install) {
			if (install) {
				return true;
			}

			return 'A professional README provides steps on how to install the project.';
		},
	},
	{
		// Usage
		type: 'input',
		message: 'Provide instructions on how to use your project',
		name: 'usage',
		validate: function(use) {
			if (use) {
				return true;
			}

			return 'A professional README provides instructions on how to use the project.';
		},
	},
	{
		// Credits / Reference
		type: 'input',
		message: 'Enter the parties and links you like to give credits to',
		name: 'credits',
		validate: function(credits) {
			if (credits) {
				return true;
			}

			return 'Not possible! Think again.';
		},
	},
	{
		// Tests
		type: 'input',
		message: 'How do you test your project?',
		name: 'test',
		default: 'npm test'
	},
	{
		// License
		type: 'list',
		message: 'Please select a License for your project.',
		name: 'license',
		choices: [
			{
				name: 'MIT',
				value: 'mit',
			},
			{
				name: 'GNU GPLv3',
				value: 'gpl-3.0',
			},
			{
				name: 'GNU AGPLv3',
				value: 'agpl-3.0',
			},
			{
				name: 'GNU LGPLv3',
				value: 'lgpl-3.0',
			},
			{
				name: 'APACHE 2.0',
				value: 'apache-2.0',
			},
			{
				name: 'Mozilla Public 2.0',
				value: 'mpl-2.0',
			},
			{
				name: 'The Unlicense',
				value: 'unlicense',
			},
			{
				name: 'Boost Software 1.0 ',
				value: 'bsl-1.0',
			},
		],
	},
];

module.exports = questions;
