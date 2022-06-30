const fs = require("fs");
const Employee = require("../lib/Employee");
const topHtml = `
<!DOCTYPE html>
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


  <title>Team Generator</title>
</head>

<body>
  <h1 class="p-3 mb-2 bg-danger text-white text-center">My Team</h1>

  <main class="container">
    <div class="d-flex justify-content-around">
    `;
const bottomHtml = `
</main>

</body>

</html>
    `;
let buildHTML = []

function buildCardsArr(arr) {
  arr.forEach(employee => {
    if (employee.role === "Manager") {
      let manager = employee
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

      buildHTML.push(mgrHtmlCard)
    };

    if (employee.role === "Engineer") {
      let engineer = employee;
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
    };

    if (employee.role === "Intern") {
      let intern = employee;
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

    };
  });
  results = buildHTML.join("");
  return results
};

function generatePage(html) {
  let pageHTML = topHtml + html + bottomHtml

  fs.writeFileSync("./dist/index.html", pageHTML, (err) => {
    if (err) {
      console.log(err);
      return;
    } else
      console.log("SUCCESS!!")
  });
};

module.exports = {
  buildCardsArr,
  generatePage
};