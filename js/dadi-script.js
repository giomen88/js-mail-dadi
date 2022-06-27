const min = 1;
const max = 6;

const myNumber = Math.floor(Math.random() * (max + 1 - min)) + min;
console.log(myNumber)

const pcNumber = Math.floor(Math.random() * (max + 1 - min)) + min;
console.log(pcNumber)

let message = 'The winner is '

if (myNumber > pcNumber) {
    message += 'YOU'
} else if (myNumber < pcNumber) {
    message += 'PC'
} else {
    message += 'NOBODY'
}

console.log(message)