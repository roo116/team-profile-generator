// import classes

const { Console } = require("console")
const fs = require("fs")
const inquirer = require("inquirer")
const { listenerCount } = require("process")
const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")
const generateHtml = require("./utils/generateHtml")
const allEmployeeArr = []
// const { resolve } = require("path")

const mgrQs = [
    {
        name: "name",
        type: "input",
        message: "Enter your name"
    },
    {
        name: "id",
        type: "input",
        message: "Enter your ID"
    },
    {
        name: "email",
        type: "input",
        message: "Enter your email"
    },
    {
        name: "officeNum",
        type: "input",
        message: "Enter you office number"
    },
    {
        name: "role",
        type: "list",
        message: "Confirm your role as Manager",
        default: ['Manager']
    }
]



const empQs = [
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
        name: "role",
        type: "list",
        message: "Please select job description",
        choices: ["Manager", "Engineer", "Intern"],
    },
    {
        name: "officeNum",
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

const startMgr = () => {
    console.log("Input your team information, starting with you as manager.")
    return inquirer
        .prompt(mgrQs)
        .then((answers) => {
            console.log(answers)
        })

};

// startMgr();

promptMgr = () => {

    console.log("In the promptMgr function")

    return inquirer
        .prompt(mgrQs)
        .then((answers) => {
            answers.role = 'Manager';
            allEmployeeArr.push(answers);
            console.log(allEmployeeArr);
        })
};


// getEmployee.prototype.startMgr = function () {
//     console.log("Input your team information, starting with you as manager.")
//     inquirer
//         .prompt(mgrQs)
//         .then((answers) => {
//             console.log(answers)
//         })

// };
// ).then()
//     .prompt(mgrQs)
//     .then((mAnswers) => {
//         console.log(mAnswers + answers)
//     })


// .then((answers) => {
//     console.log(answers)
// this.manager = new Manager(answers);
// console.log(this.manager)
// this.manager.push(allEmployeeArr);
// console.log(allEmployeeArr);
// }
// )
// }

// getEmployee.prototype.getStaff = function () {
//     inquirer
//         .prompt(basicQs)
//         .then((answers) => {
//             if (answers.role === 'Manager') {
//                 inquirer
//                     .prompt(mgrQs)
//                     .then((answers) => {
//                         this.manager = new Manager(answers);
//                         this.manager.push(allEmployeeArr);
//                     });
//             }
//         })
// };

//         } else if (answers.role === 'Engineer') {
//             inquirer
//             .prompt(engQs)
//             .then((answers) => {
//                 this.engineer = new Engineer(answers);
//                 this.engineer.push(allEmployeeArr)

//             })
//         }
//         })
// }

// const confMgr = () => {
//     return inquirer
//         .prompt(
//             {
//                 name: "role",
//                 type: "confirm",
//                 message: "Are you the manager of this team?",
//                 default: true
//             })
//         .then((confirmRole) => {
//             if (!confirmRole.role) {
//                 console.log("You must be the manager to run this program.  Buh-bye.");
//                 return;
//             }
//         });
// };

// const promptMgr = () => {

//     console.log("In the promptMgr function")

//     return inquirer
//         .prompt(mgrQs)
//         .then((answers) => {
//             answers.role = 'Manager';
//             allEmployeeArr.push(answers);
//             console.log(allEmployeeArr);
//         })
// };



// new getEmployee().startMgr()
// ).then()
//     .prompt(mgrQs)
//     .then((mAnswers) => {
//         console.log(mAnswers + answers)
//     })


// .then((answers) => {
//     console.log(answers)
// this.manager = new Manager(answers);
// console.log(this.manager)
// this.manager.push(allEmployeeArr);
// console.log(allEmployeeArr);
// }
// )
// }

// getEmployee.prototype.getStaff = function () {
//     inquirer
//         .prompt(basicQs)
//         .then((answers) => {
//             if (answers.role === 'Manager') {
//                 inquirer
//                     .prompt(mgrQs)
//                     .then((answers) => {
//                         this.manager = new Manager(answers);
//                         this.manager.push(allEmployeeArr);
//                     });
//             }
//         })
// };

//         } else if (answers.role === 'Engineer') {
//             inquirer
//             .prompt(engQs)
//             .then((answers) => {
//                 this.engineer = new Engineer(answers);
//                 this.engineer.push(allEmployeeArr)

//             })
//         }
//         })
// }
