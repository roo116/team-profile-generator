// importing all the stuff and any global variables
const { Console } = require("console");
const fs = require("fs");
const inquirer = require("inquirer");
const { createInterface } = require("readline");
const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const { buildCardsArr, generateCrdSection, generatePage } = require("./src/generateHtml");
employeeArr = [];

// manager questions array
const mgrQs = [
  {
    name: "name",
    type: "input",
    message: "Enter your name:",
  },
  {
    name: "id",
    type: "input",
    message: "Enter your ID:",
  },
  {
    name: "email",
    type: "input",
    message: "Enter your email:",
  },
  {
    name: "office",
    type: "input",
    message: "Enter you office number:",
  },
];

// employee questions array, assuming only role types are Engineer or Intern
const empQs = [
  {
    name: "role",
    type: "list",
    message: "Please select job description",
    choices: ["Engineer", "Intern"],
  },
  {
    name: "name",
    type: "input",
    message: "Please input employee's name",
  },
  {
    name: "id",
    type: "input",
    message: "Please input employee id",
  },
  {
    name: "email",
    type: "input",
    message: "please enter email address",
  },
  {
    name: "github",
    type: "input",
    message: "Please enter GitHub userid",
    when: function (answers) {
      return answers.role === "Engineer";
    },
  },
  {
    name: "school",
    type: "input",
    message: "Enter intern's school name",
    when: function (answers) {
      return answers.role === "Intern";
    },
  },
  {
    name: "askAgain",
    type: "confirm",
    message: "Enter another employee?",
    default: true,
  },
];

// get Employee Data, starting with Manager
function getEmployee() {
  getEmployee.prototype.promptManager = function () {
    return inquirer.prompt(mgrQs).then((answers) => {
      const { name, id, email, office } = answers;

      let manager = new Manager(name, id, email, office);
      manager.role = manager.getRole();

      // push new manager to employeeArr
      employeeArr.push(manager);

      // call function to get the Engineer/Intern prompts
      this.getTeam();

    });
  }; // end of get manager

  // now get employees != 'Manager'
  getEmployee.prototype.getTeam = function () {
    console.log(
      `
            =============================
            INPUT EMPLOYEE INFORMATION
            =============================
            
            `
    );
    inquirer.prompt(empQs).then((answers) => {
      const { name, id, email } = answers;
      // based on the role, push an Engineer or push an Intern to employeeArr
      switch (answers.role) {
        case "Engineer":
          const { github } = answers;
          let engineer = new Engineer(name, id, email, github);
          engineer.role = engineer.getRole()
          employeeArr.push(engineer);
          break;

        case "Intern":
          const { school } = answers;
          let intern = new Intern(name, id, email, school);
          intern.role = intern.getRole();
          employeeArr.push(intern);
          break;
      }
      // rinse and repeat
      if (answers.askAgain) {
        return this.getTeam();
      } else {
        let cards = buildCardsArr(employeeArr);
        generatePage(cards);
        if(generatePage) {
          console.log(
            `
            ============================================================
            The index.html file is in the ./dist folder.  Check it out!!
            ============================================================
            
            `)
        } else {
          console.log("Oops. Something went wrong.  Just walk away.  You didn't see anything.")
        }
      }
    }); // end of getTeam()

    // generate the employee card HTML


    // create the index.html file


  };
}



new getEmployee().promptManager()




