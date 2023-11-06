// Richiesta - km da percorrere
const numeroKm = parseFloat(prompt("Inserisci il numero di km da percorrere"));
console.log("Il numero di km da percorrere è: ", numeroKm);

// Richiesta - età del passeggero
const etaPasseggero = parseFloat(prompt("Inserisci la tua età"));
console.log("L'età del passeggero è: ", etaPasseggero);

// Calcolo prezzo totale del biglietto
const prezzoTotale = numeroKm * 0.21;
console.log(
  "Il prezzo totale del biglietto è: ",
  parseFloat(prezzoTotale.toFixed(2))
);

// Dichiarazione/assegnazione variabile prezzo scontato
let prezzoScontato = 0;

// Calcolo prezzo scontato
if (etaPasseggero <= 18) {
  prezzoScontato = prezzoTotale - (prezzoTotale * 20) / 100;
  console.log(
    "Il prezzo del biglietto scontato è: ",
    parseFloat(prezzoScontato.toFixed(2))
  );
} else if (etaPasseggero > 65) {
  prezzoScontato = prezzoTotale - (prezzoTotale * 40) / 100;
  console.log(
    "Il prezzo del biglietto scontato è: ",
    parseFloat(prezzoScontato.toFixed(2))
  );
} else {
  prezzoScontato = prezzoTotale;
}
