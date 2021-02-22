const Calculator = require('../src/Calculator');
const Calculation = require("../src/Models/Calculation");

test('Calculator adding two numbers', () => {
    let calulationObject = Calculator.Sum(2,2);
    expect(calulationObject.GetResults()).toBe(4);
});
test('Calculator difference between two numbers', () => {
    let calulationObject = Calculator.Difference(2,2);   
    expect(calulationObject.GetResults()).toBe(0);
});