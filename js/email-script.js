const emails = ["pippo@gmail.com", "pluto@gmail.com", "paperino@gmail.com", "topolino@gmail.com"];

const userEmail = prompt('Inserisci la tua email');

let message;

if (emails.includes(userEmail)) {
    message = 'Benvenuto'
}

else {
    message = 'Spiacenti'
}


console.log(message)