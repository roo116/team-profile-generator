const fs = require("fs")
const inquirer = require("inquirer")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")
const generateHtml = require("./src/generateHtml")
const allEmployees = []
const htmlData = []

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
        message: "Enter you office number:",
    },
]


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

// // working on getting data from the array
// getArrData = (allEmployeeArr) => {
//     allEmployeeArr.filter(role)

// }

function getEmployee() {
    // const allEmployeeArr = []
    // this.manager;
    // this.engineer;
    // this.interm;
    // this.arr = []



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
                answers.role = 'Manager'
                const { name, id, email, office } = answers

                let manager = new Manager(name, id, email, office)
                // console.log(">>> this manager = ", this.manager)

                allEmployees.push(manager);

                this.startTeam()

            })

        getEmployee.prototype.startTeam = function () {
            console.log(
                `
            =============================
            INPUT EMPLOYEE INFORMATION
            =============================
            
            `
            )
            inquirer
                .prompt(empQs)
                .then((answers) => {
                    const { name, id, email } = answers

                    switch (answers.role) {
                        case "Engineer":
                            const { github } = answers
                            let engineer = new Engineer(name, id, email, github)
                            // allEmployeeArr.push(engineer)
                            allEmployees.push(engineer)
                            break;

                        case "Intern":
                            const { school } = answers
                            let intern = new Intern(name, id, email, school)
                            // allEmployeeArr.push(intern)
                            allEmployees.push(intern)
                            break;
                    }
                    if (answers.askAgain) {
                        this.startTeam()
                    } else {
                        console.log(allEmployees)
                        return allEmployees
                    }
                })
        }

    };

};



new getEmployee().startMgr()

function addManager() {
    let role = allEmployees.filter('Manager');
    console.log(role)


}

// const getArrData = () =>{

// if(role ==="Manager"){
//     const managerCard = generateManager(employee);
//     cardArr.push(managerCard);
// }
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


