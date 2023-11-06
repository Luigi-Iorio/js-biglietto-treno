# Biglietto del treno

### Descrizione

L'esercizio consiste nel creare un programma che calcoli il prezzo del biglietto del treno sulla base di informazioni come: **numero di km da percorrere** ed **età del passeggero**.

Le regole per il calcolo sono:

- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65

## Risoluzione in linguaggio naturale

1.  Richiesta all'utente (_tramite prompt_) dei km da percorrere e salvare il numero di km in una variabile
2.  Richiesta all'utente (_tramite prompt_) dell'età del passeggero e salvare in una variabile
3.  Calcolare il prezzo del biglietto (numero di km \* 0.21) e salvare il risultato in una variabile
4.  Applicare in base alle condizioni i vari sconti:

        if (etaUtente >= 18){
            applicare sconto del 20%
        } else if (etaUtente > 65){
            applicare sconto del 40%
        } else {
            non applicare nessuno sconto
        }

**_L'output del prezzo finale deve essere in "forma umana" (con massimo due decimali, per indicare centesimi sul prezzo)_**
