const Intern = require('../lib/Intern');

test('creates a school object', () => {
    const intern = new Intern('UNC')

    expect(intern.school).toEqual('UNC');
});

// test('creates a new role for interns', () => {
//     const intern = new Intern()
// })
