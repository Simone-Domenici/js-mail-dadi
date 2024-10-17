const confirmedEmail = [
    "mario.rossi@esempio.com",
    "giulia.verdi@dominio.it",
    "luca.bianchi@azienda.org",
    "sara.neri@agenzia.net",
    "paolo.gialli@studio.biz",
    "anna.rosa@impresa.info"
];

let userEmail = prompt('Inserisci qui la tua email')

// if (confirmedEmail.includes(userEmail)) {
//     console.log(`Benvenuto ${userEmail}!`)
//     alert(`Benvenuto ${userEmail}!`)
// }   else {
//     console.log(`Mi dispiace ma la mail: ${userEmail} non è corretta.
//     Prova ad inserire un altra mail.`)
//     alert(`Mi dispiace ma la mail: ${userEmail} non è corretta.
//         Prova ad inserire un altra mail.`)
// }

let emailFound

for (let i = 0; i < confirmedEmail.length; i++) {
    if (userEmail === confirmedEmail[i]) {
        emailFound = true;
        break;
    }
}

if (emailFound) {
    console.log(`Benvenuto ${userEmail}!`)
    alert(`Benvenuto ${userEmail}!`)
} else {
    console.log(`Mi dispiace ma la mail: ${userEmail} non è corretta.
    Prova ad inserire un altra mail.`)
    alert(`Mi dispiace ma la mail: ${userEmail} non è corretta.
        Prova ad inserire un altra mail.`)
}