interface AddFn {
    (a: number, b: number): number;
}

let addViaInterface: AddFn;

addViaInterface = (n1: number, n2: number) => {
    return n1 + n2;
}

interface Unique {
    readonly id: number;
    outputId?: number;
}

interface Greetable extends Unique {
    name?: string;

    greet(phrase: string): void;
}

class Person implements Greetable {
    id: number;
    name?: string;
    age = 31;

    constructor(id: number, n?: string) {
        this.id = id;
        if (n) {
            this.name = n;
        }
    }

    greet(phase: string) {
        console.log(phase + ' ' + this.name);
    }
}

let user1: Greetable;
let user2: Greetable;

user1 = new Person(1, 'Jon');
user2 = new Person(2);

user1.greet('Hi there - I am')
console.log(user1);
console.log(user2);