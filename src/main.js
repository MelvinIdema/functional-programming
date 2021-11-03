import api from "./helpers/api.js";

import grabYear from './helpers/grabYear.js';
import describeThePh from "./helpers/describePh.js";

/**
 * Not a functional Function. Has side effects:
 * - Uses outside functions
 * This will turn a given year (in the past) into a "x years ago" string.
 */
const yearToText = year => `First brewed ${new Date().getFullYear() - parseInt(grabYear(year))} years ago`;

/**
 * Transforms certain properties in the beer object.
 *
 * Uses dependency injection to avoid any side effects.
 */
const transformBeer = ({describePh, transformFirstBrewed}, dirtyBeer) => ({
    ...dirtyBeer,
    ph: describePh(dirtyBeer.ph),
    firstBrewed: transformFirstBrewed(dirtyBeer.firstBrewed),
});

/**
 * Inserts the data from the beer object in the
 * proper HTML elements.
 */
function renderBeer(beer) {
    const thumb = document.querySelector("#beerThumb");
    const title = document.querySelector("#beerTitle");
    const desc = document.querySelector("#beerDesc");
    const sour = document.querySelector("#beerSour");
    const brewed = document.querySelector("#beerBrewed");

    thumb.src = beer.image;
    title.innerText = beer.name;
    desc.innerText = beer.description;
    sour.innerText = beer.ph;
    brewed.innerText = beer.firstBrewed;
}

/**
 * Not a functional function. Has side effects:
 * - Accesses DOM Element
 * - Makes changes to DOM Element
 * - Accesses API Object and outside functions.
 */
function giveMeARandomBeer() {
    const startHeader = document.querySelector(".start-header");
    const beerSection = document.querySelector(".beer-section");
    if (startHeader.dataset.started === "false") {
        startHeader.dataset.started = "true";
        startHeader.classList.add("to-the-left");
        beerSection.classList.add("active");
    }

    api.getRandomBeer()
        .then(randomBeer => transformBeer({describePh: describeThePh, transformFirstBrewed: yearToText}, randomBeer))
        .then(transformedBeer => renderBeer(transformedBeer))
        .catch(err => console.error(err));
}

document.querySelector("#giveMeABeerPlease").addEventListener("click", giveMeARandomBeer);
