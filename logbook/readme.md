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
