//obtenemos los animales a listar de la url
const url = window.location.search;
const params = new URLSearchParams(url);
const animal = params.get('animal');

//cuando la página se haya cargado
$(document).ready(function () {
    //verificamos que seccion se muestra y la mostramos
    if (animal === "dogs") {
        const dogs = document.getElementById('dogs');
        dogs.style.display = "block";
    } else if (animal === "cats") {
        const cats = document.getElementById('cats');
        cats.style.display = "block";
    } else if (animal === "others") {
        const others = document.getElementById('others');
        others.style.display = "block";
    } else {
        const all = document.getElementById('all');
        all.style.display = "block";
    }
});

function showSection(section) {
    const dogs = document.getElementById('dogs');
    dogs.style.display = "none";
    const cats = document.getElementById('cats');
    cats.style.display = "none";
    const others = document.getElementById('others');
    others.style.display = "none";
    const all = document.getElementById('all');
    all.style.display = "none";

    if (section === 0) {
        all.style.display = "block";
    } else if (section === 1) {
        dogs.style.display = "block";
    } else if (section === 2) {
        cats.style.display = "block";
    } else {
        others.style.display = "block";
    }
}