// import classes

const { Console } = require("console")
const fs = require("fs")
const inquirer = require("inquirer")
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const generateHtml = require('./utils/generateHtml')
// const { resolve } = require("path")

const basicQs = [
    {
        type: "input",
        name: "name",
        message: "Please input employee's name"
    },
    {
        type: "input",
        name: "id",
        message: "Please assign employee id"
    },
    {
        type: "input",
        name: "email",
        message: "please enter email address"
    },
    {
        type: 'list',
        name: 'role',
        message: 'Please select job description',
        choices: ['Manager', 'Engineer', 'Intern']

    }
]

const mgrQs = [
    {
        type: "input",
        name: "office",
        message: "What is the office number (Required)"
    }
]

const engQs = [
    {
        type: "input",
        name: "github",
        message: "Please enter GitHub userid"
    }
]

const intQs = [
    {
        type: "input",
        name: "school",
        message: "Enter school name"
    }
]

function getEmployee() {
    const allEmployeeArr = []
    this.manager;
    this.engineer;
    this.interm;



    getEmployee.prototype.startMgr = function () {
        console.log("Input your team information, starting with you as manager.")
        inquirer
            .prompt(basicQs)
            .then((answers) => {
                console.log(answers)
            })

    }

};
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
// const promptBasic = () => {
//     inquirer
//         .prompt(basicQs)
//         .then((answers) => {
//             allEmployeeArr.push(answers)
//             console.log(answers)
//             if (answers.role === "Manager") {
//                 promptMgr()
//                 // return;
//             };
//             if (answers.role === "Engineer") {
//                 promptEng()
//                 // return;
//             };
//             if (answers.role === "Intern") {
//                 promptInt()
//                 // return;
//             }
//         })
//         .catch((err) => {
//             if (err) throw err;
//         })

//     // }
// }

// const promptMgr = () => {
//     inquirer
//         .prompt(mgrQs)
//         .then((mAnswers) => {
//             console.log(mAnswers)
//         })
// }

// const promptEng = () => {
//     inquirer
//         .prompt(engQs)
//         .then((mAnswers) => {
//             console.log(mAnswers)
//         })
// }

// const promptInt = () => {
//     inquirer
//         .prompt(intQs)
//         .then((mAnswers) => {
//             console.log(mAnswers)
//         })
// }

// const promptMore = () => {
//     inquirer
//         .prompt(
//             {
//                 type: "confirm",
//                 name: "continue",
//                 message: "Would you like to enter another employee? (y,N)",
//                 default: "No"


//             }
//         ).then((answer) => {
//             if (answer) {
//                 promptBasic(); 
//             }
//         })
// }

// promptBasic()

new getEmployee().startMgr()





