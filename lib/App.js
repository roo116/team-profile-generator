const inquirer = require('inquirer');
const Employee = require('./Employee');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Mamager = require('./Manager');


class App {
  constructor() {
    this.manager;
    this.engineer;
    this.intern;
    this.arr = [];
  }

  startMgr() {
    inquirer
      .prompt([
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
          message: "Enter you office number:"
        }
      ])
      .then((answers) => {

        const { name, id, email, office } = answers
        console.log(">>>>> console.log the ", answers)

        this.manager = new Manager(name, id, email, office)
        console.log(">>> this manager = ", this.manager)

        this.arr.push(manager);
        console.log(">>>> allEmployeesArr check after mgr ", this.arr);

        // this.startTeam()

      })
  }
}

module.exports = App;






// initializeGame() {
//   this.enemies.push(new Enemy('goblin', 'sword'));
//   this.enemies.push(new Enemy('orc', 'baseball bat'));
//   this.enemies.push(new Enemy('skeleton', 'axe'));

//   this.currentEnemy = this.enemies[0];

//   inquirer
//     .prompt({
//       type: 'text',
//       name: 'name',
//       message: 'What is your name?'
//     })
//     .then(({ name }) => {
//       this.player = new Player(name);

//       this.startNewBattle();
//     });
// }

// startNewBattle() {
//   if (this.player.agility > this.currentEnemy.agility) {
//     this.isPlayerTurn = true;
//   } else {
//     this.isPlayerTurn = false;
//   }
//   console.log('Your stats are as follows:');
//   console.table(this.player.getStats());

//   console.log(this.currentEnemy.getDescription());

//   this.battle();
// }

// battle() {
//   if (this.isPlayerTurn) {
//     inquirer
//       .prompt({
//         type: 'list',
//         message: 'What would you like to do?',
//         name: 'action',
//         choices: ['Attack', 'Use potion']
//       })
//       .then(({ action }) => {
//         if (action === 'Use potion') {
//           if (!this.player.getInventory()) {
//             console.log("You don't have any potions!");
//             return this.checkEndOfBattle();
//           }

//           inquirer
//             .prompt({
//               type: 'list',
//               message: 'Which potion would you like to use?',
//               name: 'action',
//               choices: this.player
//                 .getInventory()
//                 .map((item, index) => `${index + 1}: ${item.name}`)
//             })
//             .then(({ action }) => {
//               const potionDetails = action.split(': ');

//               this.player.usePotion(potionDetails[0] - 1);
//               console.log(`You used a ${potionDetails[1]} potion.`);
//               this.checkEndOfBattle();
//             });
//         } else {
//           const damage = this.player.getAttackValue();
//           this.currentEnemy.reduceHealth(damage);

//           console.log(`You attacked the ${this.currentEnemy.name}`);
//           console.log(this.currentEnemy.getHealth());

//           this.checkEndOfBattle();
//         }
//       });
//   } else {
//     const damage = this.currentEnemy.getAttackValue();
//     this.player.reduceHealth(damage);

//     console.log(`You were attacked by the ${this.currentEnemy.name}`);
//     console.log(this.player.getHealth());

//     this.checkEndOfBattle();
//   }
// }

// checkEndOfBattle() {
//   if (this.player.isAlive() && this.currentEnemy.isAlive()) {
//     this.isPlayerTurn = !this.isPlayerTurn;
//     this.battle();
//   } else if (this.player.isAlive() && !this.currentEnemy.isAlive()) {
//     console.log(`You've defeated the ${this.currentEnemy.name}`);

//     this.player.addPotion(this.currentEnemy.potion);
//     console.log(`${this.player.name} found a ${this.currentEnemy.potion.name} potion`);

//     this.roundNumber++;

//     if (this.roundNumber < this.enemies.length) {
//       this.currentEnemy = this.enemies[this.roundNumber];
//       this.startNewBattle();
//     } else {
//       console.log('You win!');
//     }
//   } else {
//     console.log("You've been defeated!");
//   }
// }

