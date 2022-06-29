const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');

// jest.mock('../lib/Employee.js');

test('creates an Intern object', () => {
    const intern = new Intern('Asok', 3, 'asok@example.com', 'UNC')
    expect(intern.getSchool()).toEqual('UNC');
    expect(intern.getRole()).toEqual('Intern');
});

// test('creates a new role for interns', () => {
//     const intern = new Intern()
// })
