const Employee = require('../lib/Employee')

class Intern extends Employee{
    constructor(name, school) {
        super(name)
        this.school = school;
        this.role = 'Intern'
    }

};
module.exports = Intern;