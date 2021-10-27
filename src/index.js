const camelcase = require("camelcase");
const toHex = require("colornames");

fetch("https://raw.githubusercontent.com/cmda-tt/course-21-22/main/tech-track-dataset.json")
    .then(res => res.json())
    .then(data => filterData(data));

function translate(word) {
    switch(word.toLowerCase()) {
        case "bruin":
            return "brown";
        case "blauw":
            return "blue";
        case "groen":
            return "green";
        case "donkerbruin":
            return "brown";
        case "grijs":
            return "gray";
        case "groengrijs":
            return "palegreen";
        case "groenblauw":
            return "darkseagreen";
    }
}

function insertRow(id, color) {
    const eyeColorTableBody = document.querySelector("#eyeColorTable tbody");
    const tableRow = `
        <tr>
            <td>${id}</td>
            <td>${color}</td>
            <td><div class="visualisation" style="background-color: ${color}"></div></td>
        <tr>
    `;
    eyeColorTableBody.innerHTML += tableRow;
}

function filterData(data) {
    const reduced = data.reduce((previousValue, currentValue) => [...previousValue, currentValue['Wat is je oogkleur?']] ,[]);
    const camelCased = reduced.map(color => camelcase(color));
    const translated = camelCased.map(dutch => translate(dutch));
    const hexed = translated.map(colorName => toHex(colorName));
    hexed.forEach((color, index) => insertRow(index, color));
}
