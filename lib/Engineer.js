const Employee = require('../lib/Employee')

class Engineer extends Employee {
    constructor(name, github) {
        super(name);
        this.github = github;
        this.role = 'Engineer'
    }

    getGitHub() {
        return `https://github.com/${this.github}`;

    }

}









module.exports = Engineer