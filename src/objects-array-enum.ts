enum Role { Admin = 1000, ReadOnly, Write }

const person: {
    name: string;
    age: number;
    hobbies: string[];
    job: [number, string]; ///Tuple
    role: Role
} = {
    name: 'Jon',
    age: 31,
    hobbies: ['Sports', 'Boardgames'],
    job: [2, 'author'],
    role: Role.Admin
};


console.log(person);