//get array of managers
const getManagerData = (data) => {
  const managerEmps = data.filter((emp) => {
    if (data.role === "Manager") {
      return true;
    } else {
      return false;
    }
  });
};

//     }

//     //

// generate Manager Card function
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
`;

//}
