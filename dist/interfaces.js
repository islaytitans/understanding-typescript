"use strict";
let addViaInterface;
addViaInterface = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(id, n) {
        this.age = 31;
        this.id = id;
        if (n) {
            this.name = n;
        }
    }
    greet(phase) {
        console.log(phase + ' ' + this.name);
    }
}
let user1;
let user2;
user1 = new Person(1, 'Jon');
user2 = new Person(2);
user1.greet('Hi there - I am');
console.log(user1);
console.log(user2);
//# sourceMappingURL=interfaces.js.map