"use strict";
let userInput;
let anyUserInput;
let username;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    username = userInput;
}
;
username = anyUserInput;
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occurred!', 500);
//# sourceMappingURL=never-unknown.js.map