const fs = require("fs")
const inquirer = require("inquirer")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")
const generateHtml = require("./utils/generateHtml")
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

  function getEmployees() {

    function getManager() {
        inquirer.prompt(mgrQs)
        .then((answers) => {
            const { name, id, email, office } = answers
            let manager = new Manager(name, id, email, office)
            allEmployees.push(manager);

        })
    }

    function directory (){
        inquirer.prompt([
            {
                type: 'list',
                name: 'menu',
                message: 'What would you like to enter next?',
                choices: ['engineer', 'intern', 'exit']
            }
        ])
        .then((answers) =>{

        }
        )
    }

    function addEngineer() {}

    function addIntern() {}

    function buildHTML() {
        //use fs to write file
        // pass all data through generateHtml template with allEmployees array as parameter
    }

  }

  getEmployees();



  // TEMPLATE EXAMPLE INFO

