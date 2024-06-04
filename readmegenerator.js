const inquirer = require('inquirer');
const colors = require('colors');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: colors.brightGreen('What is your Projects Title?'),
    },
    {
        type: 'input',
        name: 'username',
        message: colors.brightGreen('What is your Github Username?'),
    },
    {
        type: 'input',
        name: 'email',
        message: colors.brightGreen('What is your Email?'),
    },
    {
      type: 'checkbox',
      message: colors.brightGreen('What languages are you using for this project? (check all that apply)'),
      name: 'stack',
      choices: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      type: 'list',
      message: colors.brightGreen('What license would you like to add a Badge for?'),
      name: 'license',
      choices: ['CCO', 'Eclipse', 'GNU', 'Hippocratic', 'IBM', 'ISC', 'MIT', 'Mozilla', 'BY', 'ODbL', 'PDDL', 'Perl', 'Artistic', 'SIL', 'Unlicense', 'WTFPL', 'Zlib'],
    },
    {
        type: 'input',
        name: 'description',
        message: colors.brightGreen('Enter a description of your project:'),
    },
    {
        type: 'input',
        name: 'instructions',
        message: colors.brightGreen('Enter any instructions on how to use your project:'),
    },
    {
        type: 'input',
        name: 'usage',
        message: colors.brightGreen('Enter usage information for your project:'),
    },
    {
        type: 'input',
        name: 'guidelines',
        message: colors.brightGreen('Enter any contribution guidelines for your project:'),
    },
    {
        type: 'input',
        name: 'testing',
        message: colors.brightGreen('Enter any testing instructions for your project'),
    },
    
  ])
  .then((answers) => {
    const generateHTML = ({ title, 
                            username, 
                            email, 
                            stack, 
                            license, 
                            description, 
                            instructions, 
                            usage, 
                            guidelines, 
                            testing
                            }) =>
`<h1 id="title">ReadMe file for "${title}"</h1><img src = "https://badgen.net/badge/license/${license}">
<h3>By User ${username}</h3>
<!-- Optional Screenshot will show if user places one within the same directory as this readme. -->
<p><img src = "screenshot.png"></p> 
<nav>
<h2>Table Of Contents</h2>
<ol>
<li><a href="#title">Title</a></li>
<li><a href="#username">Username</a></li>
<li><a href="#email">Email</a></li>
<li><a href="#stack">Stack</a></li>
<li><a href="#license">License</a></li>
<li><a href="#description">Description</a></li>
<li><a href="#instructions">Installation Instructions</a></li>
<li><a href="#usage">Usage</a></li>
<li><a href="#guidelines">Guidelines</a></li>
<li><a href="#testing">Testing</a></li>
</ol>
</nav>
<ul class="list-group">
<h2>Project Information</h2>
<h3 id="stack">Stack used:</h3>
<p>${stack}</p>
<h3 id="license">License: ${license}</h3>
<p>Badge: <img src = "https://badgen.net/badge/license/${license}"></p>
<h3 id="description">Description of project:</h3>
<p>${description}</p>
<h3 id="instructions">Installation Instructions:</h3>
<p>${instructions}</p>
<h3 id="usage">How to use:</h3>
<p>${usage}</p>
<h3 id="guidelines">Guidelines for Contribution:</h3>
<p>${guidelines}</p>
<h3 id="testing">Tests</h3>
<p>${testing}</p>
</ul>
<h3>Questions? Contact Me:</h3>
<ul class="list-group">
<li class="list-group-item">GitHub username: ${username}</li>
<li class="list-group-item">Email:  ${email}</li>
</ul>
`;
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('README.md', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });
