const { Console } = require("console")
const fs = require("fs")
const inquirer = require("inquirer")
const { listenerCount } = require("process")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")
const generateHtml = require("./utils/generateHtml")
const allEmployeeArr = []
const { resolve } = require("path")
const allEmployees = []

console.log(">>> console.log at the initiation of allEmployees ", allEmployees)

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


const empQs = [
  {
    name: "role",
    type: "list",
    message: "Please select job description",
    choices: ["Manager", "Engineer", "Intern"],
  },
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
    name: "office",
    type: "input",
    message: "Enter manager's office number",
    when: function (answers) {
      return answers.role === "Manager"
    },
  },
  {
    name: "github",
    type: "input",
    message: "Please enter GitHub userid",
    when: function (answers) {
      return answers.role === "Engineer"
    },
  },
  {
    name: "school",
    type: "input",
    message: "Enter intern's school name",
    when: function (answers) {
      return answers.role === 'Intern'
    },
  },
  {
    name: "askAgain",
    type: "confirm",
    message: "Enter another employee?",
    default: true,
  },
]
function getEmployee() {
  const allEmployeeArr = []
  this.manager;
  this.engineer;
  this.interm;
  this.arr = []



  getEmployee.prototype.startMgr = function () {
    console.log(
      `
      =======================
      INPUT YOUR INFORMATION
      =======================
      
      `)
    inquirer
      .prompt(mgrQs)
      .then((answers) => {

        const { name, id, email, office } = answers
        console.log(">>>>> console.log the ", answers)

        this.manager = new Manager(name, id, email, office)
        console.log(">>> this manager = ", this.manager)

        allEmployeeArr.push(this.manager);
        console.log(">>>> allEmployeesArr check after mgr ", allEmployeeArr);

        this.startTeam()

      })

    getEmployee.prototype.startTeam = function () {
      console.log(
        `
          =============================
          INPUT YOUR TEAM'S INFORMATION
          =============================
          
          `
      )
      inquirer
        .prompt(empQs)
        .then((answers) => {
          const { name, id, email } = answers

          switch (answers.role) {

            case "Manager":
              const { office } = answers
              const manager = new Manager(name, id, email, office)
              allEmployeeArr.push(manager)
              console.log('>> Manager switch ', allEmployeeArr)
              break;

            case "Engineer":
              const { github } = answers
              const engineer = new Engineer(name, id, email, github)
              allEmployeeArr.push(engineer)
              console.log('>> Engineer switch ', allEmployeeArr)
              break;

            case "Intern":
              const { school } = answers
              const intern = new Intern(name, id, email, school)
              allEmployeeArr.push(intern)
              console.log('>> Intern switch ', allEmployeeArr)
              break;
          }
          if (answers.askAgain) {
            this.startTeam()
          }
          console.log(allEmployeeArr)
          return allEmployeeArr
        })
    }
  };


}



new getEmployee().startMgr()

// const promptMgr = () => {
//   inquirer.prompt(mgrQs)
//     .then((answers) => {
//       console.log(answers)
//     })
// }

// const promptEmp = () => {
//   inquirer.prompt(questions)
//     .then((answers) => {
//       console.log(answers)
//     })
// };

// const promptMgr = function() {

//   console.log(`
// =====================
// Add your Information
// =====================
// `);
//   inquirer.prompt(mgrQs)
//     .then((answers) => {
//       console.log(answers);
//       // allEmployees.push({answers})
//       const manager = new Manager(answer.name, answers.id, answers.email, answers.office)
//       allEmployeeArr.push(manager);
//       // promptEmp();

//     });
// };

// const promptEmp = allEmployees => {

//   console.log("second case of logging allEmployees ", allEmployees)

//   console.log(`
// =================
// Add an Employee
// =================
// `);

//   // If there's no 'staff' array property, create one

//   return inquirer
//     .prompt(empQs)
//     .then((answers) => {
//       allEmployees.push(answers)
//       console.log(">> checking if array updated after empQs ", allEmployees)
//       // if (answers.askAgain) {
//       //   return promptEmp()
//       // } else {
//       //   return allEmployees;
//       // }
//     });
// };



// promptMgr()
  // then(answers => {
  //   allEmployees.push(answers)
  //   console.log(">>>> should be the final list ", allEmployees);
  // });
    // console.log(">>> console of team from the actual prompt execution at the end of the file", team);