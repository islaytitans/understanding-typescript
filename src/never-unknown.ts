let userInput: unknown;
let anyUserInput: any;
let username: string;

userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    username = userInput;
};

username = anyUserInput;

// function will never and should never return a value
function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};
}

generateError('An error occurred!', 500);