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
    }
]



const questions = [
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

const confMgr = function () {
    inquirer
        .prompt(
            {
                name: "role",
                type: "confirm",
                message: "Are you the manager of this team?",
                default: true
            })
        .then((answers) => {
            if (!answers.role) {
                console.log("You must be the manager to run this program.  Buh-bye.");
                return;
            }
            getMgr()
        })
}

const getMgr = function () {

    console.log("In the getMgr function")

    inquirer
        .prompt(mgrQs)
        .then((answers) => {
            answers.role = 'Manager';
            allEmployeeArr.push(answers);
            console.log(allEmployeeArr);
        })

    getEmployee()
};

const getEmployee = function () {

    inquirer
        .prompt(questions)
        .then((answers) => {
            allEmployeeArr.push(answers);
            console.log(allEmployeeArr);
            if (!answers.askAgain) {
                return
            } else {
                getEmployee()
            }
        });
};

confMgr()





