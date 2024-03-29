// TODO: set up functioning table of contents
// TODO set up readME input with data.xyz format for input. 
// TODO set up liscence choosing and badge adding. this is definetly last.
const fs = require("fs")
const generateMd = require("./utils/generateMarkdown");
const ask = require("./utils/question");
const data = {
    title:  `please provide a title`,
    fileName: 
    `please add a file name:
    NOTE: .md will be added to the end of the provided name. 
    DO NOT insert it yourself.`,
    description: `Provide a short description explaining the what, why, 
    and how of your project. Use the following questions as a guide:
  
    - What was your motivation?
    - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
    - What problem does it solve?
    - What did you learn?`,

    installation: 
    `What are the steps required to install your project? 
    Provide a step-by-step description of how to get the 
    development environment running.`,
    usage: 
    `Provide instructions and examples for use. Include screenshots as needed.
    NOTE: image inclusion syntax is ![alt text](assets/images/screenshot.png)
    `,
    contribute: ` please add guidelines for contributingto the project. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.`,

    tests:  
    `Go the extra mile and write tests for your application. 
    Then provide examples on how to run them here.
    `,
    credits: 
    `List your collaborators, if any, with links to their GitHub profiles.
  
    If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
    
    If you followed tutorials, include links to those here as well.
    `,
    license:  `The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. 
    
    If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

    to choose a liscense, put in the license name with no additional spaces or input currently only MIT and GNU are supported. For instance: to chose an MIT liscense, input MIT.
    `,
    github: `enter your github username:`,
    email: `enter your email adress:`
}


// 8 total sections

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=>{
        if(err){
            console.log('error printing file');
        }
        else{
            console.log(`file printed successfully`);
        }
    })
}

// TODO: Create a function to initialize app
async function init() {
   let obj = await ask(data)
    let mdInput = generateMd.generateMarkdown(obj)
    writeToFile(`${obj.fileName}.md`, mdInput);
}

// Function call to initialize app
init();
