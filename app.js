// importing all the stuff and any global variables
const { Console } = require("console");
const fs = require("fs");
const inquirer = require("inquirer");
const { createInterface } = require("readline");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const { generateCrdSection, generatePage } = require("./src/generateHtml");
employeeArr = [];
const mgrCardArr = [];
const engCardArr = [];
const intCardArr = [];
const buildHTML = [];
buildengHTML = [];
// const engArr = [];
// const intArr = [];
// const buildHtml = []

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

function getEmployee() {
  getEmployee.prototype.promptManager = function () {
    return inquirer.prompt(mgrQs).then((answers) => {
      const { name, id, email, office } = answers;

      let manager = new Manager(name, id, email, office);
      manager.role = manager.getRole();

      // push new manager to employeeArr
      employeeArr.push(manager);

      // if (!employeeArr[0]) {
      //   return false;
      // } else {
      //   console.log(employeeArr)
      //   return employeeArr;
      // }

      // call the team function
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
          engineer.role = engineer.getRole();
          employeeArr.push(engineer);
          // createEngCard(employeeArr);
          break;

        case "Intern":
          const { school } = answers;
          let intern = new Intern(name, id, email, school);
          intern.role = intern.getRole();
          employeeArr.push(intern);
          // createIntCard(employeeArr);
          break;
      }
      // rinse and repeat
      if (answers.askAgain) {
        return this.getTeam();
      } else {
        buildCardArray(employeeArr);
      }
    }); // end of getTeam()
  };
}

buildCardArray = (data) => {
  data.forEach((employee) => {
    if (employee.role === "Manager") {
      mgrCardArr.push(employee);
      // createMgrHtml(mgrCardArr);
    }

    if (employee.role === "Engineer") {
      engCardArr.push(employee);
    }
    if (employee.role === "Intern") {
      intCardArr.push(employee);
    }
  });

  createMgrHtml(mgrCardArr);
  createEngHtml(engCardArr);
  createIntHtml(intCardArr);
};

// createHtmlCards = () => {

createMgrHtml = () => {
  mgrCardArr.forEach((manager) => {
    let mgrHtmlCard = `<div class="card m-1" style="width: 20rem;">
<div class="card-header bg-primary text-white">
  <h2 class="fs-3">${manager.name}</h2>
  <h3 class="fs-5">${manager.role} <span><i class="fa-solid fa-mug-hot"></i></span></h3>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item fw-bold">ID: ${manager.id} </li>
  <li class="list-group-item fw-bold">Email: <a href=mailto:${manager.email} class="fw-normal">${manager.email}</a></li>
  <li class="list-group-item fw-bold">Office Number: ${manager.office} </li>
</ul>
</div>`;

    buildHTML.push(mgrHtmlCard);
  });
};

createEngHtml = () => {
  engCardArr.forEach((engineer) => {
    let engHtmlCard = `<div class="card m-1" style="width: 20rem;">
         <div class="card-header bg-primary text-white">
           <h2 class="fs-3">${engineer.name}</h2>
          <h3 class="fs-5">${engineer.role} <span><i class="fa-solid fa-glasses"></i></span></h3>
         </div>
         <ul class="list-group list-group-flush">
          <li class="list-group-item fw-bold">ID: ${engineer.id} </li>
          <li class="list-group-item fw-bold">Email: <a href=mailto:${engineer.email} class="fw-normal">${engineer.email}</a></li>
           <li class="list-group-item fw-bold">GitHub: <a href=https://github.com/${engineer.github} target="_blank">${engineer.github}</a></li>
        </ul>
      </div>`;
    buildHTML.push(engHtmlCard);
  });
};

createIntHtml = () => {
  intCardArr.forEach((intern) => {
    let intHtmlCard = `<div class="card m-1" style="width: 20rem;">
    <div class="card-header bg-primary text-white">
      <h2 class="fs-3">${intern.name}</h2>
     <h3 class="fs-5">${intern.role} <span><i class="fa-solid fa-graduation-cap"></i></span></h3>
    </div>
    <ul class="list-group list-group-flush">
     <li class="list-group-item fw-bold">ID: ${intern.id} </li>
     <li class="list-group-item fw-bold">Email: <a href=mailto:${intern.email} class="fw-normal">${intern.email}</a></li>
     <li class="list-group-item fw-bold">School: ${intern.school}</li>
   </ul>
  </div>`;

    buildHTML.push(intHtmlCard);
    console.log(intHtmlCard);
  });
  
  genHtml(buildHTML)

  
};

genHtml = (arr) => {
const empCards = generateCrdSection(arr);
 generatePage(empCards);
};
//   let engHtmlCard = `<div class="card m-1" style="width: 18rem;">
//         <div class="card-header">
//           <h2 class="fs-3">${engineer.name}</h2>
//           <h3 class="fs-5">${engineer.role}}<span><i class="fa-solid fa-mug-hot"></i></span></h3>
//         </div>
//         <ul class="list-group list-group-flush">
//           <li class="list-group-item">ID: ${engineer.id} </li>
//           <li class="list-group-item">Email: ${engineer.email}</li>
//           <li class="list-group-item">GitHub: ${engineer.github}</li>
//         </ul>
//       </div>`

//   let intHtmlCard = `<div class="card m-1" style="width: 18rem;">
//       <div class="card-header">
//         <h2 class="fs-3">${intern.name}</h2>
//         <h3 class="fs-5">${intern.role}}<span><i class="fa-solid fa-mug-hot"></i></span></h3>
//       </div>
//       <ul class="list-group list-group-flush">
//         <li class="list-group-item">ID: ${intern.id}</li>
//         <li class="list-group-item">Email: ${intern.email}</li>
//         <li class="list-group-item">School: ${intern.school}</li>
//       </ul>
//     </div>`

//   engCardArr.forEach(engineer => {
//     buildHTML.push(engHtmlCard);
//   })

//   intCardArr.forEach(intern => {
//     buildHTML.push(intHtmlCard);
//   })
//   n
//   console.log(buildHTML)

// };

// getEmployee.prototype.splitCardData = function (data) {
//   if (!data) {
//     console.log("data is falsy")
//     return
//   }
//   const results = data.forEach((employee) => {
//     if (employee.getRole() === "Manager") {
//       cardArr.push(employee);
//       console.log("this is the manager", mgrArr);
//       return mgrArr
//     }

//     if (employee.getRole() === "Engineer") {
//       engArr.push(employee);
//       console.log("this is the engineer array ", engArr)
//       return engArr
//     };

//     if (employee.getRole() === "Intern") {
//       intArr.push(employee)
//       console.log("this is the intern array ", intArr)
//       return intArr
//     }
//   })

// function splitCardData(data) {
//   if (!data) {
//     console.log("data is falsy")
//     return
//   }
//   const results = data.forEach((employee) => {
//     if (employee.getRole() === "Manager") {
//       mgrArr.push(employee);
//       console.log("this is the manager", mgrArr);
//       return mgrArr
//     }

//     if (employee.getRole() === "Engineer") {
//       engArr.push(employee);
//       console.log("this is the engineer array ", engArr)
//       return engArr
//     };

//     if (employee.getRole() === "Intern") {
//       intArr.push(employee)
//       console.log("this is the intern array ", intArr)
//       return intArr
//     }
//   })
// };

// function genHtmlPage(employee) {
//   let mgrCard = genMgrCard(mgrArr)
//   genHtml.push(mgrCard)
//   console.log(genHtml)

// }

new getEmployee().promptManager();
// .then(generateCrdSection(buildHTML))
// noe I have the employees split out by type.  so Now based on the type I want to build the html.
// .then(buildHtml => {
//   return generatePage(mgrArr)
// })

// .then(getTeam)
// .then(splitCardData => {
//   return splitCardData(employeeArr)
// })
// .then(splitCardData(employeeArr))
// .then(createCard(employeeArr))
// .then(createCard => {
//   return createCard(employeeArr);
// })
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
