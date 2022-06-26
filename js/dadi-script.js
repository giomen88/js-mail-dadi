const myRandom = Math.random();
const pcRandom = Math.random();

const min = 1;
const max = 6;

let message = 'The winner is '

const myNumber = Math.floor(myRandom * (max + 1 - min)) + min;
console.log(myNumber)

const pcNumber = Math.floor(pcRandom * (max + 1 - min)) + min;
console.log(pcNumber)

if (myNumber > pcNumber) {
    message += 'YOU'
}

else if (myNumber < pcNumber) {
    message += 'PC'
}

else {
    message += 'NOBODY'
}

console.log(message)