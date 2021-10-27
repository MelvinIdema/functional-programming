const camelcaseKeys = require('camelcase-keys');

const question = "Wat is je oogkleur?";

fetch("https://raw.githubusercontent.com/cmda-tt/course-21-22/main/tech-track-dataset.json")
    .then(res => res.json())
    .then(data => filterData(data));

function filterData(data) {
    console.log("old data: ", camelcaseKeys(data));
}
