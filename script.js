/* Game opdracht
Informatica - Emmauscollege Rotterdam
Template voor een game in JavaScript met de p5 library
Begin met dit template voor je game opdracht,
voeg er je eigen code aan toe.
*/
/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */
const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;
const KEY_LEFT = 37;
const KEY_RIGHT = 39;
const KEY_DOWN = 40;
const KEY_UP = 38;
var spelerX = 600; // x-positie van speler
var spelerY = 600; // y-positie van speler
var vijandX = 600; // x-positie van speler
var vijandY = 600; // y-positie van speler
/* ********************************************* */
/* functies die je gebruikt in je game */
/* ********************************************* */
/**
* Updatet globale variabelen met posities van speler, vijanden en kogels
*/
var beweegAlles = function () {
  // speler
  if (keyIsDown(KEY_LEFT)) {
    spelerX = spelerX - 5;
  }
  if (keyIsDown(KEY_RIGHT)) {
    spelerX = spelerX + 5;
  }
  if (keyIsDown(KEY_DOWN)) {
    spelerY = spelerY + 5;
  }
  if (keyIsDown(KEY_UP)) {
    spelerY = spelerY - 5;
  }
  // vijand
  // kogel
};
/**
* Checkt botsingen
* Verwijdert neergeschoten dingen
* Updatet globale variabelen punten en health
*/
var verwerkBotsing = function () {
  // botsing speler tegen vijand
  if (spelerX - vijandX < 150 &&
    vijandX - spelerX < 150 &&
    spelerY - vijandY < 150 &&
    vijandY - spelerY < 150) {
    console.log("botsing");
  }
  // botsing kogel tegen vijand
  // update punten en health
};
/**
* Tekent spelscherm
*/
var tekenAlles = function () {
  // achtergrond
  fill("white");
  rect(0, 0, 1280, 720)
  // vijand
  fill("red");
  ellipse(vijandX - 25, vijandY - 25, 150, 150);
  ellipse(vijandX - 25, vijandY - 25, 100, 100);
  // kogel
  // speler
  fill("green");
  ellipse(spelerX - 25, spelerY - 25, 150, 150);
  ellipse(spelerX - 25, spelerY - 25, 100, 100);
  // punten en health
};
/**
* return true als het gameover is
* anders return false
*/
var checkGameOver = function () {
  // check of HP 0 is , of tijd op is, of ...
  return false;
};
/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma */
/* ********************************************* */
/**
* setup
* de code in deze functie wordt één keer uitgevoerd door
* de p5 library, zodra het spel geladen is in de browser
*/
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);
  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
}
/**
* draw
* de code in deze functie wordt 50 keer per seconde
* uitgevoerd door de p5 library, nadat de setup functie klaar is
*/
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm
  }
}
