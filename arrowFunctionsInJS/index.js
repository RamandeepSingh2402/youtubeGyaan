function sum(a,b) {
    return a + b;
}

function isPositive (number) {
    return number >= 0;
}

function randomNumber() {
    return Math.random;
}

// document.addEventListener('click', function() {
//     console.log('Click');
// });

// Arrow functions in JS
let sum1 = (a,b) => {
    return a + b;
}

let sum2 = (a,b) => a + b;

let isReallyPositive = number => number>= 0;

let randomNum = () => Math.random;

// document.addEventListener('click', () => console.log('click'));


// Using arrow functions - an Example:

class Person {
    constructor(name) {
        this.name = name;
    }

    // in arrow funciton, 'this keyword is not redefined', hence the name is printed in the console, whereas for printNameFunction(), no name is printed
    printNameArrowFunction() {
        setTimeout(() => {
            console.log('Arrow: ' + this.name), 100
        })
    }

    // Normal standard function in JS redefines 'this' keyword and you can't actually use this.name 
    printNameFunction () {
        setTimeout(function() {
            console.log('Function: ' + this.name)
        }, 100)
    }

}

let person = new Person('Bob');
person.printNameFunction();
person.printNameArrowFunction();

// what is the use of setTimeout?!
/*
    setTimeout() is used for delaying the execution of the code by the given and associated miliseconds
    when setTimeout() is used, then the function execution is delayed by milliseconds, example:

    setTimeout(() => {
        console.log('Set timeout is being used for the delays in the execution of the function: '), 100
    });

*/