// const emails = ["pippo@gmail.com", "pluto@gmail.com", "paperino@gmail.com", "topolino@gmail.com"];

// const userEmail = prompt('Inserisci la tua email');

// let message;

// if (emails.includes(userEmail)) {
//     message = 'Benvenuto'
// }

// else {
//     message = 'Spiacenti'
// }

// console.log(message)


const emails = ["pippo@gmail.com", "pluto@gmail.com", "paperino@gmail.com", "topolino@gmail.com"];

const userEmail = prompt('Inserisci la tua email');

let message;

let isAllowed = false
for (let i = 0; i < emails.length && isAllowed === false; i++) {

    if (userEmail == emails[i]) {
        isAllowed = true
        message = 'Benvenuto'
    }

    else {
        message = 'Spiacenti'
    }
}

console.log(message) 