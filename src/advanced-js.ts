function addFunction(a: number, b: number = 5) {
    return a + b;
}

const addViaArrow = (a: number, b: number) => {
    return a + b;
}

const addViaShortArrow = (a: number, b: number) => a + b;

const addUnknownNoParams = (...numbers: number[]) => {
    return numbers.reduce((currentResult, currentValue) => {
        return currentResult + currentValue;
    }, 0)
}

const printOutput = (output: string | number | string[]) => console.log(output);

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
const copiedValue = {...activiesHobbies};

const [hobby1, hobby2, ...remainingHobbies] = activiesHobbies;
printOutput(hobby1);
printOutput(hobby2);
printOutput(remainingHobbies);

const employee = {
    firstName: 'Jon',
    age: 31
}

const { firstName, age } = employee;
printOutput(firstName);
printOutput(age);