const { generatePrime } = require("crypto");
const fs = require("fs");
const buildHTML =
  [
    '<div class="card m-1" style="width: 20rem;">\n' +
    '<div class="card-header bg-primary text-white">\n' +
    '  <h2 class="fs-3">The Boss</h2>\n' +
    '  <h3 class="fs-5">Manager <span><i class="fa-solid fa-mug-hot"></i></span></h3>\n' +
    '</div>\n' +
    '<ul class="list-group list-group-flush">\n' +
    '  <li class="list-group-item fw-bold">ID: TB01 </li>\n' +
    '  <li class="list-group-item fw-bold">Email: t.boss@example.com </li>\n' +
    '  <li class="list-group-item fw-bold">Office Number: 100 </li>\n' +
    '</ul>\n' +
    '</div>',
    '<div class="card m-1" style="width: 20rem;">\n' +
    '         <div class="card-header bg-primary text-white">\n' +
    '           <h2 class="fs-3">Dilbert</h2>\n' +
    '          <h3 class="fs-5">Engineer <span><i class="fa-solid fa-glasses"></i></span></h3>\n' +
    '         </div>\n' +
    '         <ul class="list-group list-group-flush">\n' +
    '          <li class="list-group-item fw-bold">ID: D01 </li>\n' +
    '          <li class="list-group-item fw-bold">Email: dilbert@example.com</li>\n' +
    '           <li class="list-group-item fw-bold">GitHub: <a href=https://github.com/dilbert target="_blank">https://github.com/dilbert</a></li>\n' +
    '        </ul>\n' +
    '      </div>',
    '<div class="card m-1" style="width: 20rem;">\n' +
    '         <div class="card-header bg-primary text-white">\n' +
    '           <h2 class="fs-3">Alice</h2>\n' +
    '          <h3 class="fs-5">Engineer <span><i class="fa-solid fa-glasses"></i></span></h3>\n' +
    '         </div>\n' +
    '         <ul class="list-group list-group-flush">\n' +
    '          <li class="list-group-item fw-bold">ID: A01 </li>\n' +
    '          <li class="list-group-item fw-bold">Email: alice@example.com</li>\n' +
    '           <li class="list-group-item fw-bold">GitHub: <a href=https://github.com/alice target="_blank">https://github.com/alice</a></li>\n' +
    '        </ul>\n' +
    '      </div>',
    '<div class="card m-1" style="width: 20rem;">\n' +
    '         <div class="card-header bg-primary text-white">\n' +
    '           <h2 class="fs-3">Wally</h2>\n' +
    '          <h3 class="fs-5">Engineer <span><i class="fa-solid fa-glasses"></i></span></h3>\n' +
    '         </div>\n' +
    '         <ul class="list-group list-group-flush">\n' +
    '          <li class="list-group-item fw-bold">ID: W01 </li>\n' +
    '          <li class="list-group-item fw-bold">Email: wally@example.com</li>\n' +
    '           <li class="list-group-item fw-bold">GitHub: <a href=https://github.com/wally target="_blank">https://github.com/wally</a></li>\n' +
    '        </ul>\n' +
    '      </div>',
    '<div class="card m-1" style="width: 20rem;">\n' +
    '    <div class="card-header bg-primary text-white">\n' +
    '      <h2 class="fs-3">Asok</h2>\n' +
    '     <h3 class="fs-5">Intern <span><i class="fa-solid fa-graduation-cap"></i></span></h3>\n' +
    '    </div>\n' +
    '    <ul class="list-group list-group-flush">\n' +
    '     <li class="list-group-item fw-bold">ID: A02 </li>\n' +
    '     <li class="list-group-item fw-bold">Email: asok@example.com</li>\n' +
    '      <li class="list-group-item fw-bold">GitHub: I.I.T.</li>\n' +
    '   </ul>\n' +
    '  </div>'
  ]

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



  //   createMgrHtml(mgrCardArr);
  //   createEngHtml(engCardArr);
  //   createIntHtml(intCardArr);
};


// buildCardArray(buildHTML);

generateCrdSection = (arr) => {
  const empCards = arr.join("");
  generatePage(empCards);
  // return empCards

};

generatePage = (html) => {
  let pageHTML = [];
  pageHTML.push(topHtml, html, bottomHtml);
  pageHTML = pageHTML.join("");

  fs.writeFileSync("../dist/index.html", pageHTML, (err) => {
    if (err) {
      console.log(err);
      return;
    }
  });
};

// generateCrdSection(buildHTML);

// module.exports = {

// //   generatePage
//  };
// fs.writeFile("./dist/index.html", pageHTML, (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(
//     "Page created! Check out index.html in this directory to see it!"
//   );
// });

//
