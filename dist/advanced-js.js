"use strict";
function addFunction(a, b = 5) {
    return a + b;
}
const addViaArrow = (a, b) => {
    return a + b;
};
const addViaShortArrow = (a, b) => a + b;
const addUnknownNoParams = (...numbers) => {
    return numbers.reduce((currentResult, currentValue) => {
        return currentResult + currentValue;
    }, 0);
};
const printOutput = (output) => console.log(output);
printOutput(addFunction(1));
printOutput(addViaArrow(1, 2));
printOutput(addViaShortArrow(1, 2));
printOutput(addUnknownNoParams(1, 2, 3));
printOutput(addUnknownNoParams(1, 2, 3, 4, 5));
const hobbies = ['Cooking', 'Sports', 'Fighting'];
const activiesHobbies = ['Hiking'];
activiesHobbies.push(...hobbies);
printOutput(activiesHobbies);
const copiedPointer = activiesHobbies;
const copiedValue = Object.assign({}, activiesHobbies);
const [hobby1, hobby2, ...remainingHobbies] = activiesHobbies;
printOutput(hobby1);
printOutput(hobby2);
printOutput(remainingHobbies);
const employee = {
    firstName: 'Jon',
    age: 31
};
const { firstName, age } = employee;
printOutput(firstName);
printOutput(age);
//# sourceMappingURL=advanced-js.js.map