// importing all the stuff and any global variables
const { Console } = require("console");
const fs = require("fs");
const inquirer = require("inquirer");
const { createInterface } = require("readline");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const createMgrCard = require("./src/generateHtml");
const generateHtml = require("./src/generateHtml");
const employeeArr = [];
const mgrArr = [];
const engArr = [];
const intArr = [];

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

function getManager() {
  inquirer.prompt(mgrQs).then((answers) => {
    const { name, id, email, office } = answers;

    let manager = new Manager(name, id, email, office);

    // push new manager to employeeArr
    employeeArr.push(manager);

    // call the team function
    getTeam();
  });
} // end of get manager

// now get employees != 'Manager'
function getTeam() {
  console.log(
    `
            =============================
            INPUT EMPLOYEE INFORMATION
            =============================
            
            `
  );
  inquirer.prompt(empQs).then((answers) => {
    const { name, id, email } = answers;
    console.log("answers = ", answers);
    // based on the role, push an Engineer or push an Intern to employeeArr
    switch (answers.role) {
      case "Engineer":
        const { github } = answers;
        let engineer = new Engineer(name, id, email, github);
        employeeArr.push(engineer);
        // createEngCard(employeeArr);
        break;

      case "Intern":
        const { school } = answers;
        let intern = new Intern(name, id, email, school);
        employeeArr.push(intern);
        // createIntCard(employeeArr);
        break;
    }
    // rinse and repeat
    if (answers.askAgain) {
      getTeam();
    } else {
      createCard(employeeArr);
    }
  }); // end of getTeam()

  function createCard(data) {
    const results = data.forEach((employee) => {
      if (employee.getRole() === "Manager") {
        console.log("It worked!!!");
        mgrArr.push(employee);
        console.log("this is the manager array", mgrArr);
      } 

      if (employee.getRole() === "Engineer"){
      engArr.push(employee);
      };


  });
}
// prompt for the team members
// function getEmployees() {
//   // starts with manager

//   }

// generateHtml(mgrCardOutput)
// createMgrCard(data)

// generateHtml()

// return out mgrCard variables

// na
// return
// html
// manager name,

// createIntCard

// function createCard(data) {
//     console.log("in the createCard function")

//     // for (let value2 of Object.values(data[0])) {
//     //     console.log(value2)

// }

//   function createMgrCard(data) {
//     manager = data;
//     const { name, id, email, office } = manager;
//     manager.role = "Manager";
//     console.log("this is the manager object  ", manager);
//     console.log("this is the manager name ", data.name);
//     console.log("this is the manager.id ", data.id);
//     console.log("this is the manager.role ", data.role);
//   }

// now create the employee cards

// function to map through employeeArr
//  if the employee is a manager, then create a manager card and push that into the cardArr
//  if the employee is an engineer, then create an engineer card and push that into the cardArr
//  if the employee is an intern, then create an intern card and push that into the cardArr

//   function addMgrCard(arr) {}

//   function addEngineer(data) {
//     //return template literal for the card so just the static
//     return;
//     `
//         <div class="card m-1" style="width: 18rem;">
//         <div class="card-header">
//           <h2 class="fs-3">Engineer name ${data.name}</h2>
//           <h3 class="fs-5">Title ${data.role} <span><i class="fa-solid fa-mug-hot"></i></span></h3>
//         </div>
//         <ul class="list-group list-group-flush">
//           <li class="list-group-item">ID: </li>
//           <li class="list-group-item">Email: </li>
//           <li class="list-group-item">Variable</li>
//         </ul>
//       </div>
//       `;
//   }

//   // function addIntern() { }

//   function buildHTML() {
//     boilerPlateHtml();
//   }

function init() {
  getManager();
}

init();

// const getArrData = () =>{

// if(role ==="Manager"){
//     const managerCard = generateManager(employee);
//     cardArr.push(managerCard);
// }
// if(role ==="Engineer"){
//     const engineerCard = generateEngineer(employee);
//     cardArr.push(engineerCard);
// }
// if(role === "Intern"){
//     const internCard = generateIntern(employee);
//     cardArr.push(internCard);
// }
//   })
//   let cardStr = cardArr.join("");
//   const renderPage = renderHTML(cardStr);
//   return renderPage
// };

// // working on getting data from the array
// getArrData = (allEmployeeArr) => {
//     allEmployeeArr.filter(role)

// }

// function getEmpTest(data) {
//    let result = data.filter(employee => employee.includes('Manager'){
//         console.log(employee)

//    })

//         // if(employee == "Manager" ){
//             console.log(employee)
//         // } else {
//             // console.log("NOPE!!!!")
//         // }
//     }
//     // if (license === "none") {
//     //     return ''
//     // }
//     // let result = badgeArr.find(n => n.licenseName === license);
//     // const { licenseBadge } = result
//     // return licenseBadge

// };
// //Output: 1, 2, 3

// //to get keys
// for (let value of Object.keys(data)) {
//     console.log(value);
// }
//Output: one, two, three

// let result = data.filter(findRole)

// function findRole(data) {
//     if Object.values(data)
// }

// })
