/* esercizio palindroma */



/* 
  PROCEDIMENTO
  -chiedo all'utente la parola
  -prendo la lughezza della parola e la divido in 2 arrotondando per eccesso
  -i si incrementa da 0 fino alla metà arrontondata
  -j si decrementa dalla fine fino alla metà arrotondata
*/

var parola = prompt("inserisci la parola"); //faccio inserire la parola all'utente
console.log(parola);

function checkPalindrom (str) {
  return str == str.split('').reverse().join(''); //confronta la stringa inserita nella funzione con la stessa però dove ogni elemento viene diviso attraverso lo split , alla quale viene applicato il metodo reverse per "capovolgere" la parola inserita e poi con il join('') riuniamo le singole lettere per renderle di nuovo una stringa. quindi se le due stringhe(quella di partenza e quella trasformata) sono uguali, allora restituisce il valore booleano true, altrimenti quello false  
}

var palindroma ; //flag dove salvare il valore della funzione

palindroma = checkPalindrom(parola);  //richiamo funzione assegnando al flag palindroma il valore risultato
console.log(palindroma);
/* inizio il controllo sul flag. Se il falg palindroma è true allora stampo palindroma
altrimenti stampo NON palindroma */
if(palindroma){
  console.log("palindroma");
}else{
  console.log("NON palindroma");
}
function somma() {
  var z = 11 + 5;
  return z;
  }


/* ragionamento da comprendere a pieno */
/* function isPalindrome(s,i) {
  return(i=i||0)<0||i>=s.length>>1||s[i]==s[s.length-1-i]&&isPalindrome(s,++i);
 }
*/

/* ESERCIZIO 2 */
/* CREO FUNZIONI DEL SECONDO ESERCIZIO */
function getRandomArbitrary(min, max) { //funzione random al quale passo il range 
    return Math.floor(Math.random() * ((max + 1) - min)  ) + min; // numero random che va da 0 fino al max meno il min (max = 5 min = 1 max-min = 4) al quale aggiungo il min in modo tale che il minimo numero che può uscire è 0 + il nostro min ( esce numero random 0 il nostro minimo è 5 quindi i numeri random che partono da 5 allora aggingo a 0 5 in modo tale che inizi dal min)
  }
function somma(x,y) {
    var z = x + y;
    return z;
    }
function pari(x){
  var pari = false;
  if(x%2 === 0){
    pari = true;
    return pari;
  }else{
    return pari;
  }
}

var scegli = prompt("Scegli pari o dispari");
console.log(scegli);

do{
  var numeroInserito = parseInt(prompt("inserisci un numero da 1 a 5"));
}while(numeroInserito < 1 || numeroInserito > 5);
console.log(numeroInserito+" il tuo numero");


var random = getRandomArbitrary(1,5);
console.log(random+" numero del computer");

var somma = somma(random,numeroInserito);
console.log(somma+" somma dei due numeri(computer + quello tuo)");

var pari = pari(somma);
console.log(pari+" true se è pari false se è dispari");

if(pari === true && scegli === 'pari'||scegli === 'Pari' || scegli === 'PARI' ){
  console.log("hai vinto");
}else if(pari === false && scegli === 'pari'||scegli === 'Pari' || scegli === 'PARI' ){
  console.log("hai perso");
}else if(pari == false && scegli === 'dispari' || scegli === 'Dispari' || scegli === 'DISPARI'){
  console.log("hai vinto");
}else if(pari == true && scegli === 'dispari' || scegli === 'Dispari' || scegli === 'DISPARI'){
  console.log("hai perso");
}else{
  console.log("hai inserito male la scelta");
}
/*

  variabile promp scegli pari o dispari;  //var scelta = promt("Scegli pari o dispari")

  fa{
    variabile promp parseINt numero da 1 a 5;
  }mentre(variabile promt parseInt numero < 1 || variabile promt parseInt numero > 5)
  

  funzione numero random(1 a 5);
  
  variabile risultato random = richiamo la funzione numero random(1 a 5);

  funzione somma (risultatorandom, numeroinserito da 1 a 5);

  variabile somma = richiamo funzione somma;

  funzione pari(somma){
    if(somma%2 === 0){
      return true;
    }else{
      return false;
    }
  };

  variabile pari = richiamo funzione pari(somma); // pari = false;

  switch(pari):

    case 1 :(pari == true && promt scelta === 'pari')
    console.log(hai vinto);

    case 2:(pari == false && promt scelta === 'pari')
    console.log(hai perso);

    case 3:(pari == true && promt scelta === 'dispari')
    console.log(hai perso);

    case 4:(pari == false && promt scelta === 'dispari')
    console.log(hai vinto);

    default:
      console.log(non hai scelto ne pari nè dispari)


*/