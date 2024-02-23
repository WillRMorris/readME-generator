const inquirer = require('inquirer');

const questions = [
    `please provide a title`,
    //description section
    `Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
  
    - What was your motivation?
    - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
    - What problem does it solve?
    - What did you learn?`,

    //installation section
    `What are the steps required to install your project? 
    Provide a step-by-step description of how to get the 
    development environment running.`,
    //Usage Section

    `Provide instructions and examples for use. Include screenshots as needed.
        NOTE: image inclusion syntax is ![alt text](assets/images/screenshot.png)
    `,
    //credits section
    `List your collaborators, if any, with links to their GitHub profiles.
  
    If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
    
    If you followed tutorials, include links to those here as well.
    `,
    //License section
    ` The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. 
    
    If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
    `,
    
    
];

let questionsAsked = 0;
let responseArray = [];
const data = {
    title: "",
    description:"",
    installlation: "",
    usage: "",
    credits: "",
    license: "",
}
  function askUser (){
    inquirer
    .prompt([
    {
      type: 'input',
      message: `
      ${questions[questionsAsked]}
      ---------------------------------------------------------------------------
      `,
      name: 'welcome',
    },
  ])
  .then((response)=>{
      if(questionsAsked < questions.length-1){
        responseArray.push(response);
          questionsAsked++;
          askUser();
        }
        return;
  }
  );
}


function ask (){

    inquirer
    .prompt([
        {
            type: 'input',
            message: `
      hello! welcome to README generator. We'll ask you some questions then generate a README with your responses. press enter to continue
      ---------------------------------------------------------------------------
      `,
      name: 'welcome',
    },
])
.then( async function (response){
    askUser()
}
);
}
ask();
console.log(responseArray);