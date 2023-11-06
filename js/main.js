// Richiesta - km da percorrere
const numeroKm = parseFloat(prompt("Inserisci il numero di km da percorrere"));
console.log("Il numero di km da percorrere è: ", numeroKm);

// Richiesta - età del passeggero
const etaPasseggero = parseFloat(prompt("Inserisci la tua età"));
console.log("L'età del passeggero è: ", etaPasseggero);

// Calcolo prezzo totale del biglietto
let prezzoTotale = numeroKm * 0.21; //prezzo predefinito
let messaggio = "Il prezzo totale del biglietto è: "; //messaggio predefinito

// Calcolo prezzo scontato
if (etaPasseggero < 18) {
  prezzoTotale = prezzoTotale - (prezzoTotale * 20) / 100;
  messaggio = "Il prezzo scontato del 20% è: ";
} else if (etaPasseggero > 65) {
  prezzoTotale = prezzoTotale - (prezzoTotale * 40) / 100;
  messaggio = "Il prezzo scontato del 40% è: ";
}

console.log(messaggio, parseFloat(prezzoTotale.toFixed(2)));
