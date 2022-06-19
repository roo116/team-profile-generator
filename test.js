const inquirer = require("inquirer");

inquirer.prompt([{
    name: "food",
    type: "list",
    message: "What do you want",
    choices: [ "Calzone", "Pizza", "Sub" ]
  }, {
    name: "toppings",
    type: "list",
    when: function( answers ) {
      // Only run if user answered Pizza to the first prompt
      return answers.food === "Pizza";
    },
    // etc
  }]);
