// create the about section
function createCard(data) {
  if (!data) {
    return
  }
  const results = data.forEach((employee) => {
    if (employee.getRole() === "Manager") {
      htmlArr.push(employee);
      console.log("this is the manager", htmlArr);
    }

    if (employee.getRole() === "Engineer") {
      engArr.push(employee);
      console.log("this is the engineer array ", htmlArr)
    };

    if (employee.getRole() === "Intern") {
      intArr.push(employee)
      console.log("this is the intern array ", htmlArr)
    }
  })
};
// const mgrCard = 
//       ` <div class="card m-1" style="width: 18rem;">
//     <div class="card-header">
//       <h2 class="fs-3">${employee.name}</h2>
//       <h3 class="fs-5">${employee.getrole()} <span><i class="fa-solid fa-mug-hot"></i></span></h3>
//     </div>
//     <ul class="list-group list-group-flush">
//       <li class="list-group-item">ID: ${employee.id} </li>
//       <li class="list-group-item">Email: ${manager.email} </li>
//       <li class="list-group-item">Office Number: ${manager.office} </li>
//     </ul>
//   </div>
//     `

// create the projects section
// const generateProjects = projectsArr => {
//   return `
//     <section class="my-3" id="portfolio">
//       <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
//       <div class="flex-row justify-space-between">
//       ${projectsArr
//         .filter(({ feature }) => feature)
//         .map(({ name, description, languages, link }) => {
//           return `
//           <div class="col-12 mb-2 bg-dark text-light p-3">
//             <h3 class="portfolio-item-title text-light">${name}</h3>
//             <h5 class="portfolio-languages">
//               Built With:
//               ${languages.map(language => language).join(',')}
//             </h5>
//             <p>${description}</p>
//             <a href="${link}" class="btn"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
//           </div>
//         `;
//         })
//         .join("")}

//       ${projectsArr
//         .filter(({ feature }) => !feature)
//         .map(({ name, description, languages, link }) => {
//           console.log(languages);
//           return `
//           <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
//             <h3 class="portfolio-item-title text-light">${name}</h3>
//             <h5 class="portfolio-languages">
//               Built With:
//               ${languages.join(", ")}
//             </h5>
//             <p>${description}</p>
//             <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
//           </div>
//         `;
//         })
//         .join('')}
    
//       </div>
//     </section>
//   `;
// };

// export function to generate entire page
module.exports = createCard()
//   // destructure page data by section
//   const { projects, about, ...header } = templateData;

//   return `
//   <!DOCTYPE html>
//   <html lang="en">
  
//   <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Portfolio Demo</title>
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
//     <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
//     <link rel="stylesheet" href="./dist/style.css">
//   </head>
  
//   <body>
//     <header>
//       <div class="container flex-row justify-space-between align-center py-3">
//         <h1 class="page-title text-secondary bg-dark py-2 px-3">${header.name}</h1>
//         <nav class="flex-row">
//           <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${header.github}">GitHub</a>
//         </nav>
//       </div>
//     </header>
//     <main class="container my-5">
//       ${generateAbout(about)}
//       ${generateProjects(projects)}
//     </main>
//     <footer class="container text-center py-3">
//       <h3 class="text-dark">&copy;2020 by ${header.name}</h3>
//     </footer>
//   </body>
//   </html>
//   `;
// };
