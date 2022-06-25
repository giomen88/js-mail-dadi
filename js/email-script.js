const emails = ["pippo@gmail.com", "pluto@gmail.com", "paperino@gmail.com", "topolino@gmail.com"];

const userEmail = prompt('Inserisci la tua email');

let message;

for (let i = 0; i < emails.length; i++) {

    if (userEmail == emails[i]) {
        message = 'Benvenuto'
    }

    else if (userEmail != emails[i]) {
        message = 'Spiacenti'
    }
}

console.log(message)