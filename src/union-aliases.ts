type Combinable = number | string;
type CombinableResult = 'as-number' | 'as-text';

function combine(input1: Combinable, input2: number | string, resultType: CombinableResult) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === 'as-number') {
        result = +input1 + +input2;
    } else if (typeof input1 === 'string' && typeof input2 === 'string') {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combineAges = combine(31, 30, 'as-number');
console.log(combineAges);

const combineStringAges = combine('31', '30', 'as-number');
console.log(combineStringAges);

const combinedNames = combine('Luke', 'Leia', 'as-text')
console.log(combinedNames);