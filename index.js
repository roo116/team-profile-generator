const fs = require("fs")
const inquirer = require("inquirer")
const { resolve } = require("path")

const basicQs = [
    {
        type: "input",
        name: "name",
        message: "Please input employee's name"
    },
    {
        type:"input",
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
        message: "Assing an office number (Required)"
    }
]

const engQs =[
    {
        type: "input",
        name: "github",
        message: "Please enter GitHub userid"
    }
]

const intQs = [
    {
        type:"input",
        name: "school",
        message: "Enter school name"
    }
]

const promptBasic = () => {
    inquirer
        .prompt(basicQs)
        .then((answers) => {
            console.log(answers)
            if(answers.role === "Manager") {
                promptMgr()
                return;
            };
            if(answers.role === "Engineer") {
                promptEng()
                return;
            };
            if(answers.role === "Intern") {
                promptInt()
                return;
            }
        })
        .catch((err) => {
            if (err) throw err;
        })

    // }
}

const promptMgr = () => {
    inquirer
    .prompt(mgrQs)
    .then((mAnswers) =>{
        console.log(mAnswers)
    })
}

const promptEng = () => {
    inquirer
    .prompt(engQs)
    .then((mAnswers) =>{
        console.log(mAnswers)
    })
}

const promptInt = () => {
    inquirer
    .prompt(intQs)
    .then((mAnswers) =>{
        console.log(mAnswers)
    })
}

promptBasic()