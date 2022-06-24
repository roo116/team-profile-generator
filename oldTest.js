// const { Console } = require("console")
const fs = require("fs")
const { get } = require("http")
const inquirer = require("inquirer")
const Employee = require("./lib/Employee")
// const { listenerCount } = require("process")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")
const generateHtml = require("./utils/generateHtml")
// const { resolve } = require("path")
const allEmployees = []

const mgrQs = [
  {
    name: "name",
    type: "input",
    message: "Enter your name:"
  },
  {
    name: "id",
    type: "input",
    message: "Enter your ID:"
  },
  {
    name: "email",
    type: "input",
    message: "Enter your email:"
  },
  {
    name: "office",
    type: "input",
    message: "Enter you office number:"
  },
]


const engQs = [
  {
    name: "name",
    type: "input",
    message: "Please input employee's name"
  },
  {
    name: "id",
    type: "input",
    message: "Please input employee id"
  },
  {
    name: "email",
    type: "input",
    message: "please enter email address"
  },
  {
    name: "github",
    type: "input",
    message: "Please enter GitHub userid",

    name: "askAgain",
    type: "confirm",
    message: "Enter another employee?",
    default: true
  }
]

const intQs = [
  {
    name: "name",
    type: "input",
    message: "Please input employee's name"
  },
  {
    name: "id",
    type: "input",
    message: "Please input employee id"
  },
  {
    name: "email",
    type: "input",
    message: "please enter email address"
  },
  {
    name: "school",
    type: "input",
    message: "Enter intern's school name",
  },
  {
    name: "askAgain",
    type: "confirm",
    message: "Enter another employee?",
    default: true
  }
]

function getEmployees() {

  getMgr = function () {



    inquirer
      .prompt(mgrQs)
      .then((answers) => {
        const { name, id, email, office } = answers
        let manager = new Manager(name, id, email, office)
        allEmployees.push(manager);

        this.directory();

      })

  };

  getEmployees.directory = () => {
    inquirer.prompt([
      {
        type: "list",
        name: "menu",
        message: "What would you like to do next?",
        choices: ["engineer", "intern", "done"]
      }
    ])
      .then((answers) => {
        const { menu } = answers
        switch (menu) {
          case "engineer":
            console.log("selected engineer")
            inquirer.prompt(engQs)
              .then(answers)
            const { name, id, email, github } = answers
            let engineer = new Engineer(name, id, email, github)
            // allEmployeeArr.push(engineer)
            allEmployees.push(engineer)
            break;

          case "intern":
            const { school } = answers
            // const intern = new Intern(name, id, email, school)
            // allEmployeeArr.push(intern)
            allEmployees.push(answers)
            break;


          // case "done":
        }
        if (answers.askAgain) {
          console.log(answers.askAgain)
          this.directory();
        } else {
          return allEmployees;
        }
      });


  };
};

getEmployees().getMgr()

  // inquirer
  // .prompt(empQs)
  // .then((answers) => {
  //   const { name, id, email } = answers

  //   switch (answers.role) {

  //     case "Manager":
  //       const { office } = answers
  //       const manager = new Manager(name, id, email, office)
  //       allEmployeeArr.push(manager)
  //       console.log('>> Manager switch ', allEmployeeArr)
  //       break;

  //     case "Engineer":
  //       const { github } = answers
  //       const engineer = new Engineer(name, id, email, github)
  //       allEmployeeArr.push(engineer)
  //       console.log('>> Engineer switch ', allEmployeeArr)
  //       break;

  //     case "Intern":
  //       const { school } = answers
  //       const intern = new Intern(name, id, email, school)
  //       allEmployeeArr.push(intern)
  //       console.log('>> Intern switch ', allEmployeeArr)
  //       break;
  //   }
  //   console.log(allEmployeeArr)
  //   if (answers.askAgain) {
  //     this.startTeam()
  //   }
  //   return allEmployeeArr
  // })




// const generateCards = (data) =>{
//   data.forEach((employee)=>{
//     let role = employee.getRole()
//     if(role ==="Manager"){
//         const managerCard = generateManager(employee);
//         cardArr.push(managerCard);
//     }
//     if(role ==="Engineer"){
//         const engineerCard = generateEngineer(employee);
//         cardArr.push(engineerCard);
//     }
//     if(role === "Intern"){
//         const internCard = generateIntern(employee);
//         cardArr.push(internCard);
//     }
//   })
//   let cardStr = cardArr.join("");
//   const renderPage = renderHTML(cardStr);
//   return renderPage
// };