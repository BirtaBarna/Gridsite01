/**
 * const -> változó deklarálásának kulcsszava
 * értéke nem változtatható meg
 * konstans állandó nevét érdemes nagy betűvel írni */
const SITE = document.querySelector('.site');
console.log("SITE:",SITE)
const TRIGGER = document.querySelector('.trigger');
//trigger osztályú gomb eltárolása változóba
function revealMenu() {
    SITE.classList.toggle('reveal');
    /**
     * függvény létrehozása:
     * 1.function
     * 2.szóköz
     * 3. függvény neve pl: myFunction
     * 4.kerek zárojel, ide kerülhet a paraméter
     * milyen paraméterekkel dolgozzon a függvény
     * 5.kapcsos zárojel {}, ez a függvény scope-ja vagy teste, ide írjuk meg 
     * mit szeretnénk, hogy mit hatjson végre,ha a függvényt meghívjuk!!
     */
   TRIGGER.innerHTML == 'Close menu' ? 
  
   TRIGGER.innerHTML = 'Open menu' : 
   
   TRIGGER.innerHTML = 'Close menu';
   console.log(TRIGGER.innerHTML == 'Close menu')
     /*A conditional vagyis feltételes operátor, az egyetlen operátor,ami 
     3 bemenet vár
     1:feltétel
     2:any vagyis bármik
     3.any vagyis bármik
     Működése:
     ha feltétel igaz, akkor a 2.eset fut le
     ha feltétel hamis, akkor a 3. eset fut le

   if(TRIGGER.innerHTML == 'Close menu') {
   TRIGGER.innerHTML = 'Open menu' 
   }else{ 
    TRIGGER.innerHTML = 'Close menu';

   }*/
}
/** 
 *  A függvény csak akkor fut le ha meghívjuk!! function invocation
 * A gombra amit a TRIGGER  változóban eltároltunk
 * hozzá kötjük az esemény figyelő metódust,ami a js
 * beépített függvénye,
 * Az addEventListener esemény figyelő legalább 2db paramétert vár
 * 1: mit figyeljen, pl kattintást, egér eseményt, billenytű eseményt
 * vagy lehet pl dokumentum objektum modell 
 * 2. mi trténjenM pl fusson le egy függvébym vagy meghívjuk a függvényt
 */ 

TRIGGER.addEventListener('click', revealMenu, false);

