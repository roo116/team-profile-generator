const htmlArr = [

]

const employeeArr = [
  {
    name: 'Boss',
    id: 'tBoss',
    email: 'tBoss@techco.com',
    office: '1',
    role: 'Manager'
  },
  {
    role: 'Engineer',
    name: 'Dilbert',
    id: 'd01',
    email: 'dilbert@techco.com',
    github: 'dilbert',
    askAgain: false
  }
]

const genManager = (employeeArr) => {
  return 
  `
  ${employeeArr
    .filter((Engineer)=> Engineer)
  .map({ name, id, email, office}) => {

    ` <div class="card m-1" style="width: 18rem;">
    <div class="card-header">
      <h2 class="fs-3">${employee.name}</h2>
      <h3 class="fs-5">${employee.role} <span><i class="fa-solid fa-mug-hot"></i></span></h3>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${employee.id}</li>
      <li class="list-group-item">Email: ${employee.email}</li>
      <li class="list-group-item">Office Number: ${employee.office}</li>
    </ul>
  </div>`
  }

  console.log(mgrCardArr)




getEmpArr()