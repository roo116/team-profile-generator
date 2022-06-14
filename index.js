const fs = require('fs')
const inquirer = require('inquirer')

const questions = [
    'Please enter the school name'
]


function promptUser = {
    inquirer.prompt(questions)
    .then(answers) {
        console.log(answers);
    }
}

