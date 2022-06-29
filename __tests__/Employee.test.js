const Employee = require('../lib/Employee');

test('creates an Employee object', () => {
    const employee = new Employee('John D.', 1, 'jd@example.com')

    expect(employee.name).toEqual('John D.');
    expect(employee.id).toEqual(1);
    expect(employee.email).toEqual('jd@example.com')
    expect(employee.getRole()).toEqual('Employee');
    // expect(employee.id).toEqual(expect(Number));
});