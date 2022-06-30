const Engineer = require('../lib/Engineer')
const Employee = require('../lib/Employee')

// jest.mock('../lib/Employee.js');

test('create an engineer object', () => {
    const engineer = new Engineer('Dogbert', 2, 'Dogbert@example.com', 'dogbert');
    expect(engineer.getRole()).toEqual('Engineer');
    expect(engineer.getGitHub()).toEqual('https://github.com/dogbert');
})