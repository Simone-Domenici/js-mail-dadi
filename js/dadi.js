let userDice = parseInt(Math.random() *6 + 1)
console.log('Utente',userDice)

let compDice = parseInt(Math.random() *6 + 1)
console.log('Computer:',compDice)

if (userDice < compDice) {
    
    console.log(`Hai Perso!
TU: ${userDice} COMPUTER: ${compDice}`)
    alert(`Hai Perso!
TU: ${userDice} COMPUTER: ${compDice}`)

} else if (userDice > compDice) {

    console.log(`Hai Vinto!
TU: ${userDice} COMPUTER: ${compDice}`)
    alert(`Hai Vinto!
TU: ${userDice} COMPUTER: ${compDice}`)

} else { 

    console.log(`Pareggio!
TU: ${userDice} COMPUTER: ${compDice}`)
    alert(`Pareggio!
TU: ${userDice} COMPUTER: ${compDice}`)
}