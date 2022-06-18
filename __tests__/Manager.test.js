const Employee = require('../lib/Employee')
const Manager = require('../lib/Manager')

jest.mock('../lib/Employee')

test('creates manager object', () => {
const manager = new Manager('Pointy-Haired Boss', 'office-1');

expect(manager.name).toEqual('Pointy-Haired Boss')
expect(manager.office).toEqual('office-1')
})