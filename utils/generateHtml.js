// manager icon = <i class="fa-solid fa-mug-hot"></i>
// engineer icon = <i class="fa-solid fa-glasses"></i>
// intern icon = <i class="fa-solid fa-baby"></i>

const { restoreDefaultPrompts } = require("inquirer")

const createCard = (role) => {
  if(role==="Manager") {
    
    const ({ name, id, email, office }) = empData;

    return
    `
    
    `
  }
}


return 
`
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


  <title>Team Members</title>
</head>

<body>
  <h1 class="p-3 mb-2 bg-danger text-white text-center">My Team</h1>

  <main class="container">
    <div class="d-flex justify-content-around">
      <div class="card m-1" style="width: 18rem;">
        <div class="card-header">
          <h2 class="fs-3">${name}</h2>
          <h3 class="fs-5">${title}<span><i class=`fa-solid fa-mug-hot"></i></span></h3>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: </li>
          <li class="list-group-item">Email: </li>
          <li class="list-group-item">Office Number: </li>
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