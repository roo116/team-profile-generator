const Employee = require('../lib/Employee')
const Manager = require('../lib/Manager')

// jest.mock('../lib/Employee')

test('creates manager object', () => {
const manager = new Manager('Catbert', 1, 'catbert@example.com', 'office-1');
expect(manager.getOffice()).toEqual('office-1')
expect(manager.getRole()).toEqual('Manager')
});