const Potion = require('../lib/Intern');

jest.mock('../lib/Intern.js');

test('creates a school object', () => {
    const intern = new Intern();

    expect(intern.school).toEqual(expect.any(String));
});

test('creates a new role for interns', () => {
    const intern = new Intern()
})
