"use strict";
var Role;
(function (Role) {
    Role[Role["Admin"] = 1000] = "Admin";
    Role[Role["ReadOnly"] = 1001] = "ReadOnly";
    Role[Role["Write"] = 1002] = "Write";
})(Role || (Role = {}));
const person = {
    name: 'Jon',
    age: 31,
    hobbies: ['Sports', 'Boardgames'],
    job: [2, 'author'],
    role: Role.Admin
};
console.log(person);
//# sourceMappingURL=objects-array-enum.js.map