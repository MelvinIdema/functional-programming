const apiUrl = 'https://api.punkapi.com'
const apiVersion = '/v2';
const apiRandomBeer = `${apiUrl}${apiVersion}/beers/random`;
const api = {
    getRandomBeer: () => fetch(apiRandomBeer).then(res => res.json())
}

/**
 * Functional Function - Grabs the year from a string.
 * Definitely not fool proof. Years before 1600 and after 2099 are not "valid" according to this REGEX.
 * @param date
 * @returns {RegExpMatchArray|*}
 */
const getYearOnly = date => typeof date === "string" ? date.match(/\b(16|17|18|19|20)\d{2}\b/) : date;

/**
 * Functional Function - Makes a number positive if not positive.
 * @param num
 * @returns {number|*}
 */
const toPositive = num => num < 0 ? num * -1 : num;

/**
 * Functional Function - Returns a string based on a given float (PH).
 * @param ph
 * @returns {string}
 */
const phToName = ph => ph > 4.2 ? "not so sour" : "sour";

/**
 * Not a functional Function. Has side effects:
 * - Uses outside functions
 * This will turn a given year (in the past) into a "x years ago" string.
 * @param year
 * @returns {string}
 */
const yearToText = year => `${toPositive((parseInt(getYearOnly(year))) - new Date().getFullYear())} years ago`;

/**
 * Not a functional function. Has side effects:
 * - Uses outside functions
 * @param dirtyBeer
 * @returns {{image: (string|string), name: (string|string), description: (*|string), isSour: (string|string), brewedHowLongAgo: (string|string)}}
 */
function transformBeer(dirtyBeer) {
    return {
        name: dirtyBeer.name ?? dirtyBeer.title ?? "Unknown",
        description: dirtyBeer.description ?? dirtyBeer.tagline ?? "Unknown",
        isSour: dirtyBeer.ph !== undefined ? phToName(dirtyBeer.ph) : "Unknown",
        brewedHowLongAgo: dirtyBeer.first_brewed !== undefined ? yearToText(dirtyBeer.first_brewed) : "Unknown",
        image: dirtyBeer.image_url !== undefined ? `${dirtyBeer.image_url}` : "Unknown"
    }
}

/**
 * Not a functional function. Has side effects:
 * - Accesses DOM Element
 * - Makes changes to DOM Element
 * - Accesses API Object and outside functions.
 */
function giveMeARandomBeer() {
    const startHeader = document.querySelector(".start-header");
    if(startHeader.dataset.started === "false") {
        startHeader.dataset.started = "true";
        startHeader.classList.add("to-the-left");
    }

    api.getRandomBeer()
        .then(randomBeer => transformBeer(randomBeer[0]))
        .then(transformedBeer => console.log(transformedBeer))
        .catch(err => console.error(err));
}

document.querySelector("#giveMeABeerPlease").addEventListener("click", giveMeARandomBeer);
