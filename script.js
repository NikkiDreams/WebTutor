/**
 * Verkefni 7 – Reikniæfingarforrit
 *
 * Forrit sem æfir hraða í að reikna einföld dæmi
 */

// fasti sem segir til um hve marga leiki eigi að spila
const GAMES_TO_PLAY = 10;

/**
 * Birtir upplýsingar um leik og eftir að notandi samþykkir spilar fyrsta leik
 * með kalli í play().
 * Eftir leik er notanda boðið að spila annan leik, ef ekki hættir forrit.
 */
function start() {
  villa;
}

/**
 * Spilar einn leik. Heldur utan um hvenær leikur byrjaði, hvenær endar og
 * fjölda réttra svara. Eftir leik eru birtar upplýsingar um niðurstöðu:
 *   Þú svaraðir X af 10 dæmum rétt á Y sekúndum
 *   Meðalrétt svör á sekúndu eru Z
 * Þar sem Y og Z hafa tvo aukastafi.
 *
 * Ef notandi ýtir á "Cancel" í leik eru skilaboðin "Hætt í leik." birt og engar
 * upplsýingar um niðurstöður.
 *
 */
function play() {
}

/**
 * Spyr einnar spurningar og skilar upplýsingum um svar (mögulega með því að
 * nota true, false og null ef notandi hættir). Birtir notanda propmpt til að
 * svara í og túlkar svarið yfir í tölu.
 *
 * Mögulegar spurningar eru:
 * - `+` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `-` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `*` dæmi þar sem báðar tölur geta verið á bilinu `[1, 10]`
 * - `/` dæmi þar sem fyrri tala er á bilinu `[2, 10]` og seinni talan er fyrri
 *   talan sinnum tala á bilinu `[2, 10]` þ.a. svarið verði alltaf heiltala
 *
 * Sniðugt væri að færa það að búa til spurningu í nýtt fall sem ask() kallar í.
 */
function ask() {
}

/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Byrjar leik
start();

/*  /**
* Verkefni 7 – Gisk leikur
*
* Útfæra leik sem snýst um að giska á tölu milli 0 og 100.
*/

/**
* global fylki sem geymir fjölda ágiskana í leikjum
* Ef fylki er tómt hefur engin leikur verið spilaður.
* Ef fylki er [2, 3] hafa verið spilaðir tveir leikir þar sem:
*   - Fyrsti kláraðist í tveim ágiskunum
*   - Seinni kláraðist í þrem ágiskunum
*/
const GAMES = [];

/**
* Byrjar leikinn okkar með því að kalla í play().
* Eftir að að play() klárar, bíður notanda að spila annan leik með confirm()
* Ef notandi ýtir á "ok" er annar leikur spilaður
* Ef ýtt er á "cancel" er niðurstöðum leikja skilað með getResults() og alert()
*/
function start() {
alert('Velkomin í leikinn. Giskaðu á tölu');

do {
  play();
} while (confirm('Spila annan?'));

alert(getResults());
}

/**
* Spilar einn leik. Sér um að:
*   - Velja handahófskennda tölu í byrjun með randomNumber()
*   - Biðja notanda um tölu með prompt()
*   - Vinna úr inntaki frá notanda með parseGuess()
*   - Láta vita hversu nálægt eða rétt gisk er með getResponse() og alert()
*   - Halda utan um fjölda ágiskana
*   - Vista fjölda ágiskana "games" fylki þegar búið að giska rétt
*
* Ef notandi ýtir á "cancel" þegar beðið er um ágiskun skal hætta í leik en
* ekki vista ágiskanir (nota "break" í lykkju.)
*
* Þarf að útfæra með lykkju og flæðistýringum.
*/
function play() {
// næsta lína kastar villu sem má sjá í "console" undir DevTools
const random = randomNumber(100);
console.log(random);

let correct = false;
let attempts = 0;

do {
  const input = prompt('Giskaðu á tölu milli 0-100');

  if (input === null) {
    break;
  }

  const parsedInput = parseGuess(input);
  correct = parsedInput === random;

  alert(getResponse(parsedInput, random));
  attempts++;
} while (!correct);

GAMES.push(attempts);
alert(`Rétt í ${attempts} ágiskunum`);

return true;
}

/**
* Skilar niðurstöðum um spilaða leiki sem streng.
* Fjölda leikja er skilað ásamt meðalfjölda giska, t.d.:
*   "Þú spilaðir 10 leikir
*    Meðalfjöldi ágiskana var 6"
* Ath að meðalfjöldi kemur í nýrri línu.
* Ef enginn leikur var spilaður er "Þú spilaðir engan leik" skilað.
*/
function getResults() {
const played = GAMES.length;
const average = calculateAverage();

const result = `Þú spilaðir ${played} leikir
Meðalfjöldi ágiskana var ${average.toFixed(2)}`;

return result;
}

/**
* Reiknar út og skilar meðal ágiskunum í öllum leikjum sem geymdir eru í
* global breytu "games". Skilar gildi með tveim aukastöfum.
* Ef games = [3, 4, 4] er niðurstaðan
* (3 + 4 + 4) / 3 = 3.666666667
* og er henni skilað sem 3.67
*
* Þarf að útfæra með lykkju.
*/
function calculateAverage() {
const played = GAMES.length;

let sum = 0;
for (let game of GAMES) {
  sum += game;
}

const average = sum / played;

return average;
}

/**
* Tekur inn input sem streng og skilar þeirri tölu sem hægt er að ná þar úr.
* Ef ekki er hægt að ná tölu úr input er null skilað.
*/
function parseGuess(input) {
const parsed = parseInt(input, 10);

if (isNaN(parsed)) {
  return null;
}

return parsed;
}

/**
* Skilar svari sem birta á notanda sem streng, tekur inn tvær breytur
*   - guess sem tölu, ágiskun notanda
*   - correct sem tölu, rétt gildi
* Ef guess er < 0 eða ekki tala skal skila strengnum "Ekki rétt"
* Ef guess er nákvæmlega sama og correct skal skila strengnum "Rétt"
* Ef munur er undir 5 (|correct - guess| < 5) skal skila "Mjög nálægt"
* Ef munur er undir 10 skal skila "Nálægt"
* Ef munur er undir 20 skal skila "Frekar langt frá"
* Ef munur er undir 50 skal skila "Langt frá"
* Annars skal skila "Mjög langt frá"
*
* Þarf að útfæra með flæðistýringu.
* Math.abs skilar algildi tölu: |a| = Math.abs(a)
*/
function getResponse(guess, correct) {
const diff = Math.abs(correct - guess);

if (guess < 0 || isNaN(guess)) {
  return 'Ekki rétt';
}

if (diff < 5) {
  return 'Mjög nálægt';
} else if (diff < 10) {
  return 'Nálægt';
} else {
  return 'Mjög langt frá';
}
}

/**
* Skilar tölu af handahófi frá [0, n]
*/
function randomNumber(n) {
return Math.floor(Math.random() * (n + 1));
}

// Byrjar leik
start();*/
