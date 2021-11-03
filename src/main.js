import numToPositive from './helpers/numToPositive.js';
import grabYear from './helpers/grabYear.js';

const apiUrl = 'https://api.punkapi.com'
const apiVersion = '/v2';
const apiRandomBeer = `${apiUrl}${apiVersion}/beers/random`;
const api = {
    getRandomBeer: () => fetch(apiRandomBeer).then(res => res.json())
}
const $ = selector => document.querySelector(selector);

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
const yearToText = year => `First brewed ${numToPositive((parseInt(grabYear(year))) - new Date().getFullYear())} years ago`;

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

function renderBeer(beer) {
    const thumb = $("#beerThumb");
    const title = $("#beerTitle");
    const desc = $("#beerDesc");
    const sour = $("#beerSour");
    const brewed = $("#beerBrewed");

    thumb.src = beer.image;
    title.innerText = beer.name;
    desc.innerText = beer.description;
    sour.innerText = beer.isSour;
    brewed.innerText = beer.brewedHowLongAgo;
}

/**
 * Not a functional function. Has side effects:
 * - Accesses DOM Element
 * - Makes changes to DOM Element
 * - Accesses API Object and outside functions.
 */
function giveMeARandomBeer() {
    const startHeader = $(".start-header");
    const beerSection = $(".beer-section");
    if(startHeader.dataset.started === "false") {
        startHeader.dataset.started = "true";
        startHeader.classList.add("to-the-left");
        beerSection.classList.add("active");
    }

    api.getRandomBeer()
        .then(randomBeer => transformBeer(randomBeer[0]))
        .then(transformedBeer => renderBeer(transformedBeer))
        .catch(err => console.error(err));
}

document.querySelector("#giveMeABeerPlease").addEventListener("click", giveMeARandomBeer);
