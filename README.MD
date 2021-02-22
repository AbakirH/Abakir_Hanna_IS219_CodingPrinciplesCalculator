[![Coverage Status](https://coveralls.io/repos/github/AbakirH/Abakir_Hanna_IS219_CodingPrinciplesCalculator/badge.svg?branch=master)](https://coveralls.io/github/AbakirH/Abakir_Hanna_IS219_CodingPrinciplesCalculator?branch=master)
[![Build Status](https://travis-ci.com/AbakirH/Abakir_Hanna_IS219_CodingPrinciplesCalculator.svg?branch=master)](https://travis-ci.com/github/AbakirH/Abakir_Hanna_IS219_CodingPrinciplesCalculator)


1. Single Responsibility Principle:
In the Operations folder found in src folder, you see 6 javascript files that conatins one function to do one task

For examble in the Difference.js file we see that the difference function does one thing.
```
function Difference (a,b) {
    return a - b;
}
```
Each file in this operations folder follows a similar format.

Another example of this principle can be found in the Calculator.js file in the src folder where each function in the class has its own task.
For examble: 
```
static clearList(){
    this.Calculations = [];
}
```
This functions only goal is to clear the list of caclulations if we ever need to.

This same concept can be found in the Principle1.test.js file in the tests folder, where each test is only testing one function from the calculator class.

2. Open-Closed Principle

If we look at the Calculator class found in the Calculator.js file we see how we can new calculations to the list and clear the list without having to modify the array within the class.

```
class Calculator {
    static Calculations = [];
    static addCalculation(calculation){
        Calculator.Calculations.push(calculation);
    }
    static clearList(){
        this.Calculations = [];
    }
}
```

