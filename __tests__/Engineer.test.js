const Engineer = require('../lib/Engineer')
const Employee = require('../lib/Employee')

jest.mock('../lib/Employee.js');

test('create an engineer object', () => {
    const engineer = new Engineer('Dilbert', 'dilbert');

    expect(engineer.name).toBe('Dilbert');
    expect(engineer.role).toBe('Engineer');
    expect(engineer.github).toBe('dilbert');
})