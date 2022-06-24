const Employee = require("../lib/Employee")
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern")

  
// generate Manager Card function
function generateMgrCard() {
  return
  ` <div class="card m-1" style="width: 18rem;">
  <div class="card-header">
    <h2 class="fs-3">${name}</h2>
    <h3 class="fs-5">${Manager.getRole()} <span><i class="fa-solid fa-mug-hot"></i></span></h3>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${id} </li>
    <li class="list-group-item">Email: ${email} </li>
    <li class="list-group-item">Office Number: ${office} </li>
  </ul>
</div>
  `
}

// <h1>${manager.getName()}</h1>

//generate Eng cards function

// generate intern cards function

// JAVASCRIPT to make above functions usable

// let html = [];

// filter through all of you r employees to pick out manager
// map through your managers to pass them through the generateManagerCards function
// take new html produced and add to an array of html

// repeat for engineers and interns

//add all of the html from array together and return

// Key methods -> .filter, .map, .join, .push


//module.exports = allEmployees => {

return `
  getneral html info
  call generateTeamCards function here
 `


//}

return
`
      < !DOCTYPE html >
        <html lang="en">

          <head>
            <meta charset="UTF-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
                    integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
                    crossorigin="anonymous" referrerpolicy="no-referrer" />
                  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/css/bootstrap.min.css"
                    integrity="sha512-GQGU0fMMi238uA+a/bdWJfpUGKUkBdgfFdgBm72SUQ6BeyWjoY/ton0tEjH+OSH9iP4Dfh+7HM0I9f5eR0L/4w=="
                    crossorigin="anonymous" referrerpolicy="no-referrer" />


                  <title>Team Members</title>
                </head>

                <body>
                  <h1 class="p-3 mb-2 bg-danger text-white text-center">My Team</h1>

                  <main class="container">
                    <div class="d-flex justify-content-around">
                      <div class="card m-1" style="width: 18rem;">
                        <div class="card-header">
                          <h2 class="fs-3">${name}</h2>
                          <h3 class="fs-5">${title}<span><i class=fa-solid fa-mug-hot"></i></span></h3>
                      </div>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: </li>
                        <li class="list-group-item">Email: </li>
                        <li class="list-group-item">Office Number: </li>
                      </ul>
                    </div>


                    <div class="card m-1" style="width: 18rem;">
                      <div class="card-header">
                        <h2 class="fs-3">Employee Name</h2>
                        <h3 class="fs-5">Title <span><i class="fa-solid fa-mug-hot"></i></span></h3>
                      </div>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: </li>
                        <li class="list-group-item">Email: </li>
                        <li class="list-group-item">Variable</li>
                      </ul>
                    </div>

                    <div class="card m-1" style="width: 18rem;">
                      <div class="card-header">
                        <h2 class="fs-3"> Employee Name</h2>
                        <h3 class="fs-5">Title <span><i class="fa-solid fa-mug-hot"></i></span></h3>
                      </div>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: </li>
                        <li class="list-group-item">Email: </li>
                        <li class="list-group-item">Variable</li>
                      </ul>
                    </div>

                    <div class="card m-1" style="width: 18rem;">
                      <div class="card-header">
                        <h2 class="fs-3"> Employee Name</h2>
                        <h3 class="fs-5">Title <span><i class="fa-solid fa-mug-hot"></i></span></h3>
                      </div>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: </li>
                        <li class="list-group-item">Email: </li>
                        <li class="list-group-item">Variable</li>
                      </ul>
                    </div>

                    <div class="card m-1" style="width: 18rem;">
                      <div class="card-header">
                        <h2 class="fs-3"> Employee Name</h2>
                        <h3 class="fs-5">Title <span><i class="fa-solid fa-mug-hot"></i></span></h3>
                      </div>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: </li>
                        <li class="list-group-item">Email: </li>
                        <li class="list-group-item">Variable</li>
                      </ul>
                    </div>

                  </main>

                </body>

              </html>
              `

module.exports = generateHtml;