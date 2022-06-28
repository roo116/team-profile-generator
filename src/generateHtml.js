const fs = require("fs");
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

generateCrdSection = (arr) => {
  const empCards = arr.join("");
  // generatePage(empCards);
  return empCards
};

generatePage = (html) => {
  let pageHTML = [];
  pageHTML.push(topHtml, html, bottomHtml);
  pageHTML = pageHTML.join("");
  console.log(pageHTML);

  fs.writeFileSync("./dist/index.html", pageHTML, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Did it work?");
  });
};

// generateCrdSection();

module.exports = {
  generateCrdSection,
  generatePage
};
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
