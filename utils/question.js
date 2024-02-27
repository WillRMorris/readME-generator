const inquirer = require('inquirer');
// const data = {
//     title:  `please provide a title`,
//     description: `Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
  
//     - What was your motivation?
//     - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
//     - What problem does it solve?
//     - What did you learn?`,
//     installlation: `What are the steps required to install your project? 
//     Provide a step-by-step description of how to get the 
//     development environment running.`,
//     usage: `Provide instructions and examples for use. Include screenshots as needed.
//     NOTE: image inclusion syntax is ![alt text](assets/images/screenshot.png)
//     `,
//     tests:  `Go the extra mile and write tests for your application. Then provide examples on how to run them here.
//     `,
//     credits: `List your collaborators, if any, with links to their GitHub profiles.
  
//     If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
    
//     If you followed tutorials, include links to those here as well.
//     `,
//     license:  `The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. 
    
//     If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
//     `,
// }
let questionsAsked = 0;

function askUser(question){
    return new Promise ((resolve) =>{

        inquirer
        .prompt([
          {
            type: 'input',
            message: `
            ${question}
            `,
            name: `q${questionsAsked}`
          },
        ])
        .then((response) => {
          questionsAsked++;
          resolve(response);
        })
        
      })
}

function askQuestions (obj){
  return new Promise (async (answer) =>{

    inquirer
    .prompt([
      {
        type: 'input',
        message: `
        hello! welcome to README generator. We'll ask you some questions 
        then generate a README with your responses. if you wish to leave 
        a section blank, press enter to continue pass it. 
        The section title will however still appear in your README file. 
        As always it is reccomended to look over the file for an discrepencies, 
        and to modify as you wish. press enter to continue
        `,
        name: 'welcome',
      },
    ])
    .then(async function (response) {
        for( let response in obj){
          let input = await askUser(obj[response]);
          array = Object.entries(input)
          obj[response] = array[0][1];
          console.log(obj[response]);
        }
        answer(obj);
      }
      );
    })
    }
    module.exports = askQuestions;