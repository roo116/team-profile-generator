const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');

jest.mock('../lib/Employee.js');

test('creates a school object', () => {
    const intern = new Intern('Asok', 'UNC')

    expect(intern.name).toEqual('Asok');
    expect(intern.school).toEqual('UNC');
    expect(intern.role).toEqual('Intern');
});

// test('creates a new role for interns', () => {
//     const intern = new Intern()
// })
