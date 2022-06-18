const Employee = require('../lib/Employee');

test('creates an Employee object', () => {
    const employee = new Employee('Dilbert', 1, 'dilbert@example.com')

    expect(employee.name).toBe('Dilbert');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String))
    expect(employee.role).toBe('Employee');
    // expect(employee.id).toEqual(expect(Number));
});