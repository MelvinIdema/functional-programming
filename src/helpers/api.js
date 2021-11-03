/**
 * Configuration
 * @type {string}
 */
const url = "https://api.punkapi.com";
const version = "v2";
const randomBeer = `${url}/${version}/beers/random`;

/**
 * Fetches a random beer and returns a promise with
 * a standardized object with the useful data in it.
 *
 * It should always return the same object.
 *
 * @returns {Promise<{image: *, name: *, ph: *, description: *, firstBrewed: *}>}
 */
function getRandomBeer() {
    return fetch(randomBeer)
        .then(res => res.json())
        .then(data => ({
            name: data[0].name ?? "Unknown",
            description: data[0].description ?? "Unknown",
            ph: data[0].ph ?? "Unknown",
            firstBrewed: data[0].first_brewed ?? "Unknown",
            image: data[0].image_url ?? "assets/empty_beer_bottle.png"
        }));
}

/**
 * Exports an object with the API configuration & methods
 */
export default {
    url,
    version,
    randomBeer,
    getRandomBeer
}
