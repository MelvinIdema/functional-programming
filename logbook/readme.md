# Logbook

## Dag 1
Deze eerste dag had ik mij gruwelijk verslapen 
waardoor ik de volledige les fysiek gemist heb.

Dankzij een mailtje van Vincent Vijn en de slides
op GitHub heb ik alsnog alles kunnen doen wat nodig
was. Zoals het aanmaken van 3 repositories voor de 3
vakken; Het Teams kanaal joinen; een enquête invullen.

## Dag 2
Dag 2 was ik wel op tijd. Het begon met een presentatie 
van Robert met een korte recap van Blok Tech. Dit kwam van pas
aangezien ik zelf Blok Tech niet gevolgd had.

Ook was dit de dag om aan de opdracht te gaan werken. 
Op het begin vond ik de opdracht best onduidelijk. Maar
dit kreeg al snel meer vorm nadat Robert duidelijkheid had
verschaft.

Ik had er voor gekozen om alle oogkleuren in een tabel te
weergeven op hexadecimal en als een kleurblokje. 

Met fetch had ik al eerder gewerkt en dit was dan ook het
makkelijkste gedeelte van de code. Daarna zat ik met een 
array met objecten. En eigenlijk had ik geen idee hoe nu verder.

Wat ik wou doen - en waar ik best lang tegenaan liep - was 
1 antwoord uit de enquete halen. "Wat is je oogkleur?". 

Aangezien de vragen spaties betrefde en je dus niet met de
dot notering de property kon verkrijgen dacht ik alle keys 
om te zetten naar camelcase. Hiervoor bestond er een NPM package.

Maar hoe gebruik je die in godsnaam in de browser? Dat is waar ik
een oud project zocht. Ik heb namelijk eerder met Gulp gewerkt, 
een taskmanager. Ik dacht hiermee NPM packages te kunnen gebruiken.
Dat kon wel, maar dat had ik niet gedaan in dat project.

Dat is waar ik besefte een **bundler** nodig te hebben. Eureka!
Een bundler bundelt natuurlijk alle javascript, dus ook je NPM
packages, in 1 bestand. Dat is wat ik nodig had. En dus heb ik
Webpack gebruikt. Met Babel - die in staat stelt om NPM packages
en nieuwe ecmascript te kunnen gebruiken. 

Hierna kon ik de camelcase package gebruiken. Maar ik kwam 
erachter dat het eigenlijk helemaal niet nodig is. Je kunt 
namelijk keys met spaties ook benaderen door middel van `[]`. 
Dus:

```js
objectName["key name"];
```

Dit heb ik dan ook toegepast. Vervolgens bleek de camelcase 
package nog wel van pas te komen bij het camelcasen van de kleuren.

Voor dat ik de kleuren kon camelcasen en vertalen, was het 
noodzakelijk om een array te verkrijgen met alle oogkleuren. 
Hier had ik veel moeite mee. Maar uiteindelijk kwam ik uit 
op een Array Prototype Reduce higher-order function. 
Dit bleek de ideale oplossing. 

```js
const reduced = data.reduce((previousValue, currentValue) => [...previousValue, currentValue['Wat is je oogkleur?']] ,[]);
```

Met als uiteindelijke resultaat:

![Drag Racing](1.png)

## Dag 3
In de morgen hebben we een korte introductie gekregen tot het 
documenteren van je project en het opstellen van een wiki. Ook 
hebben we heel kort gehad over Functional Programming. 
Programmeren waarbij alles een functie is zonder side-effects. 

Hierna ben ik begonnen met het documenteren van wat ik tot nu 
toe heb. Met als begin dit logboek. Vervolgens ben ik verder 
gegaan met de wiki.

## Dag 4
Op deze dag was ik ziek, dus qua groepje heb ik vrij weinig 
voor elkaar gekregen. Wel heb ik mij zelfstandig meer verdiept 
in Functional Programming. En mijn functies herschreven.

## Dag 5
Deze dag was ik ook ziek. Ik heb geprobeerd mij meer te verdiepen
in documentatie & de wiki. 

# Week 2
## Dag 6
Vandaag zijn we de dag begonnen met een presentatie over APIs. Daarna
zijn we onderzoek gaan doen naar beschikbaar API's. De duizenden API's
op het internet maakte het erg lastig voor me om een leuk, origineel
en bruikbare API te vinden.

Na een aantal ideeën ben ik uiteindelijk gegaan voor een bier API.
Hiervoor heb ik contact opgenomen met ratebeer.com. Helaas duurt dit
erg lang. Daarom ben ik voor nu gegaan voor punkapi.com. Deze bierlijst
is niet compleet en er ontbreken veel Nederlandse bieren.

Omdat ik later wil overstappen op een uitgebreidere API wil ik graag
de data "normalizen"? Weet niet zeker of dit het juiste woord is. Maar
uiteindelijk één object hebben met altijd dezelfde data. Zodat je 
de API kunt veranderen zonder veel aan je code te hoeven veranderen. 

Verder heb ik mij, veel te lang, bezig gehouden met Fetch gebruiken
in een Functional Programming paradigma. Uiteindelijk blijkt dat
promises gewoon niet lekker werkt met Functional Programming. Ik ga
mij dan ook minder vastbijten hierin en gewoon lekker code schrijven. 

## Dag 7
Vandaag hebben we een uitgebreide presentatie gehad over 
async en promises door Joost Faber. Ik vond de voorbeelden echt heel
goed en opmaak van de code ook. Dit wil ik gaan toepassen op mijn eigen
code. Zo heb ik nu gebruik gemaakt van Webpack voor het bundelen van
mijn code en het gebruiken van modules. Maar dit blijkt dus niet meer
nodig aangezien bijna alle browsers het native ondersteunen.

Na het verwijderen van webpack uit m'n project ben ik verder gegaan
met het opschonen van de data aan de hand van de Functional Programming
principles. Hiervoor heb ik de PH waarde van een biertje vertaald naar
"zuur" en "niet zuur". Zodat ik dit kan laten zien in een GUI. Ook
heb ik het jaar waarin het biertje voor het eerst is gebrouwen vertaald
naar een "x jaar geleden" string. Hiervoor heb ik 3 functies moeten
schrijven:
* Een functie die het jaartal uit een string kan filteren
* Een functie die een negatief getal naar een positief getal kan 
  omzetten
* Een functie die van een jaartal een "x jaar geleden" string kan 
  maken.
  
```js
const getYearOnly = date => typeof date === "string" ? date.match(/\b(19|20)\d{2}\b/) : date;
const toPositive = num => num < 0 ? num * -1 : num;
const yearToText = year => `${toPositive((parseInt(getYearOnly(year))) - new Date().getFullYear())} years ago`;
const phToName = ph => ph > 4.2 ? "not so sour" : "sour";
```

Aangezien je zonder plan niet echt code kan schrijven en het doelloos
voelt om gewoon zomaar data te gaan opschonen. Ben ik begonnen met wat
ik in m'n hoofd heb: een random beer "generator" (laat eigenlijk
een random biertje zien.) uit te werken in HTML en CSS. Zo simpel
mogelijk, maar wel een beetje mooi.

Dit is het eindresultaat vandaag:

![eind resultaat vandaag](randombeerpage.png)

Na de standup ben ik nog even doorgegaan. Waarbij 
ik bierkleuren heb opgezocht voor de gradient en een tip van Christiaan 
Zandbergen toegepast om de knop te laten ademen. Verder viel mij op dat 
het geheel niet lekker in het midden lag. Daarom heb ik dit nog eens 
herzien en alles in het midden geplaatst.

Ik wil niet teveel bezig zijn met het uiterlijk aangezien dit voor dit vak
niet van belang is. Maar het maakt het toch net even iets leuker.

Verder wil ik de "Give me a random beer" naar links laten schuiven zodra je 
op "please" klikt. En dat er dan aan de rechterkant een biertje verschijnt.
Hiervoor moet ik een state opslaan, maar een state is in de wortel al gewoon
een niet functioneel begrip. Tenzij je de state direct doorgeeft in de chain.

![eind resultaat vandaag](slidetoleft.gif)

Aangezien het aanpassen van de DOM ook niet past in Functional Programming,
heb ik ervoor gekozen om de state op te slaan in een data attribute in de DOM.
Om zo states uit m'n javascript te houden en het zo "functional" mogelijk te 
houden:

```html
<header class="start-header" data-started="false"></header>
```

```js
const started = document.querySelector(".start-header").dataset.started // "false"
```

Ook heb ik alle functies voorzien van een korte beschrijving waarin ik evalueer hoe
de functie staat tegenover de Functional Programming principles:
```js
/**
 * Functional Function - Grabs the year from a string.
 * Definitely not fool proof. Years before 1600 and after 2099 are not "valid" according to this REGEX.
 * @param date
 * @returns {RegExpMatchArray|*}
 */
const getYearOnly = date => typeof date === "string" ? date.match(/\b(16|17|18|19|20)\d{2}\b/) : date;
```

Dit wil ik nog bereiken:
* De opgehaalde data laten zien in een redelijk vormgegeven element.
* Code opbreken in modules naar voorbeeld van Joost Faber.
* Wiki uitbreidden en aanpassen.
* Kijken of niet functional functies nog functional gemaakt kunnen worden.

## Dag 8
Vandaag de dag begonnen met een hele korte presentatie over de rubric en
een verzoek om elkaars werk te peer-reviewen aan de hand van issues op 
GitHub. Ik heb Tom van den Berg gevraagd om mijn werk te peer-reviewen.
En heb zelf die van Davey Zaal en van Tom gepeer-reviewed. 

Verder heb ik vandaag wat visualisatie dingen gedaan en een transition
toegevoegd. 

Ik heb ook de to-do list van gisteren als issues in GitHub gezet.

Daarna heb ik alle opzichzelfstaande functies omgezet naar modules,
de API als config / methods object omgezet. En de transformBeer functie
Functional gemaakt. Door de spread operator te gebruiken (hierdoor
wordt er een nieuw object gemaakt.) En dependency injection. Waardoor
je de functies die binnenin gebruikt worden ook moet meegeven als
parameter. Dit was ook een uitgekozen moment om de functie om te zetten
naar arrow functie aangezien hij alleen iets returned. 

```diff
-Function transformBeer(dirtyBeer) {
-    return {
-        name: dirtyBeer.name ?? dirtyBeer.title ?? "Unknown",
-        description: dirtyBeer.description ?? dirtyBeer.tagline ?? "Unknown",
-        isSour: dirtyBeer.ph !== undefined ? describePh(dirtyBeer.ph) : "Unknown",
-        brewedHowLongAgo: dirtyBeer.first_brewed !== undefined ? yearToText(dirtyBeer.first_brewed) : "Unknown",
-        image: dirtyBeer.image_url !== undefined ? `${dirtyBeer.image_url}` : "Unknown"
-    }
-}

+const transformBeer = ({describePh, transformFirstBrewed}, dirtyBeer) => ({
+    ...dirtyBeer,
+    ph: describePh(dirtyBeer.ph),
+    firstBrewed: transformFirstBrewed(dirtyBeer.firstBrewed),
+});
```

Verder kwam ik in een helder moment er achter dat ik echt veel te
moeilijk gedaan heb in de yearToText functie:
```js
const yearToText = year => `First brewed ${numToPositive((parseInt(grabYear(year))) - new Date().getFullYear())} years ago`;
```
Hier heb ik een numToPositive functie voor geschreven, die het negatieve
resultaat van yearInThePast - currentYear omzet naar positief. Maar
je kunt natuurlijk gewoon currentYear - yearInThePast doen. Dan heb je
die functie helemaal niet nodig.

```
2013 - 2021 = -8;
2021 - 2031 = 8;
```

Nu is de functie iets simpeler, maar nog steeds niet functioneel. Er wordt nog
een functie van buitenaf aangeroepen en een Date object gebruikt. Eigenlijk
ben ik sowieso niet tevreden met m'n code. Een echte "functional programmer" zou hier
naar kijken en het niet herkennen als functional. 

Vorig jaar had ik dit artikel gevonden:
https://codereview.stackexchange.com/questions/241501/is-the-javascript-code-ive-provided-following-functional-programming-best-pract/241523?noredirect=1#comment474037_241523
En zojuist heb ik dit artikel er ook bij gevonden:
https://www.telerik.com/blogs/functional-programming-javascript
Met als qoute:
> "Pure functions are simple and reusable building blocks inside an application."

En dat vind ik een mooie leidraad om m'n functies te refactoren. 
Simpel en herbruikbaar. Helaas zijn API calls en DOM manipulation nou eenmaal 
niet functional aangezien het de no side-effect en immutability principles schend.

Deze week heb ik een aantal dingen geleerd en dat wil ik gaan toepassen op een
nieuwe versie van de app:
1. Zet de logica van je app bovenaan en de functies onderaan.
2. Functional Programming Principles
   1. Functies horen **puur** te zijn. Zelfde input = Zelfde output
      1. Accessing system state outside of the function
      2. Mutating objects passed as arguments
      3. Making a HTTP call
      4. Obtaining user input
      5. Querying the DOM
   2. Functies horen klein, simpel en herbruikbaar te zijn.
   3. Functies horen geen side effects te hebben
   4. Functies horen niets te muteren.
   5. In Functional Programming gebruik je geen loops, ifs of sequences.
    declaratief programmeren i.p.v imperatief

Eigenlijk hoe meer ik lees en experimenteer met Functional Programming in
Javascript, hoe meer ik er achter kom dat het echte verlangen ligt bij
het losjes volgen van de principles, testbaarheid en voornamelijk 
declaratief programmeren. Beschrijvend programmeren, je programma moet 
lezen als een boek. In plaats van een set instructies voor de computer.
