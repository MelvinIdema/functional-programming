import api from "./config/api.js";

import numToPositive from './helpers/numToPositive.js';
import grabYear from './helpers/grabYear.js';
import describeThePh from "./helpers/describePh.js";

const $ = selector => document.querySelector(selector);

/**
 * Not a functional Function. Has side effects:
 * - Uses outside functions
 * This will turn a given year (in the past) into a "x years ago" string.
 * @param year
 * @returns {string}
 */
const yearToText = year => `First brewed ${numToPositive((parseInt(grabYear(year))) - new Date().getFullYear())} years ago`;

/**
 *
 * Transforms certain properties in the beer object.
 *
 * Uses dependency injection to avoid any side effects.
 *
 * @param describePh
 * @param transformFirstBrewed
 * @param dirtyBeer
 * @returns {*&{ph: string, firstBrewed: string}}
 */
const transformBeer = ({describePh, transformFirstBrewed}, dirtyBeer) => ({
    ...dirtyBeer,
    ph: describePh(dirtyBeer.ph),
    firstBrewed: transformFirstBrewed(dirtyBeer.firstBrewed),
});

function renderBeer(beer) {
    const thumb = $("#beerThumb");
    const title = $("#beerTitle");
    const desc = $("#beerDesc");
    const sour = $("#beerSour");
    const brewed = $("#beerBrewed");

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
function giveMeARandomBeer({describePh, transformFirstBrewed}, dirtyBeer) {
    const startHeader = $(".start-header");
    const beerSection = $(".beer-section");
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
