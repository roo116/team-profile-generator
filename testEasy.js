const fs = require("fs")
const inquirer = require("inquirer")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")
const generateHtml = require("./src/generateHtml")
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

// function getArrayData (data) {
// //     //to get values
// // for (let value of Object.values(data)) {
// //    console.log(value);
// // }
// // // //Output: 1, 2, 3

// // // //to get keys
// // // for (let value of Object.keys(data)) {
// // //     console.log(value);
// // // }
// // //Output: one, two, three
// let result = data.filter(findRole)

// function findRole(data) {

// }

// // })

// }

const getManagerData = (data) => {
    const managerEmps = data.filter((emp) => {
      if (data.role === "Manager") {
        console.log("Test passed")
        return true;
      } else {
        console.log("Test failed")
        return false;
      }
    });
  };

function getEmployees() {
    // const allEmployeeArr = []
    // this.manager;
    // this.engineer;
    // this.interm;
    // this.arr = []

    getManager()

    function getManager() {
        inquirer
            .prompt(mgrQs)
            .then((answers) => {
                answers.role = 'Manager'
                const { name, id, email, office } = answers

                // let manager = new Manager(name, id, email, office)
                // console.log(">>> this manager = ", this.manager)
                // manager.role = Manager.getRole();

                allEmployees.push(answers);
                console.log(allEmployees);
                // startTeam()
                // getArrayData(allEmployees)          
            })
    };

    function startTeam() {
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
                        answers.role = "Engineer"
                        // let engineer = new Engineer(name, id, email, github)
                        // allEmployeeArr.push(engineer)
                        allEmployees.push(answers)
                        break;

                    case "Intern":
                        const { school } = answers
                        answers.role = "Intern"
                        // let intern = new Intern(name, id, email, school)
                        // allEmployeeArr.push(intern)
                        allEmployees.push(answers)
                        break;
                }
                if (answers.askAgain) {
                    startTeam()
                } else {
                    console.log(allEmployees)
                    return allEmployees
                }
            })
           
    }

    function addManager(arr) {

        let role = arr.filter('Manager');
        console.log(role)



    }

    function addEngineer(data) {
        //return template literal for the card so just the static 
        return
        `
        <div class="card m-1" style="width: 18rem;">
        <div class="card-header">
          <h2 class="fs-3">Engineer name ${data.name}</h2>
          <h3 class="fs-5">Title ${data.role} <span><i class="fa-solid fa-mug-hot"></i></span></h3>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: </li>
          <li class="list-group-item">Email: </li>
          <li class="list-group-item">Variable</li>
        </ul>
      </div>
      `


    }

   




    // function addIntern() { }

    // function buildHTML() { }

};

getEmployees()

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


