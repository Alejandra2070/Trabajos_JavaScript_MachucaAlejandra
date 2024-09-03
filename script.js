document.getElementById("button").addEventListener("click", GetDataFromAPI);

function GetDataFromAPI() {
    var iddisney = document.getElementById("entrada").value;
    let url = "http://api.disneyapi.dev/character/"+iddisney;
    readid(url)
}


function readid(url) {
    fetch(url)
    .then (res => res.json())
    .then (daticos => {

    document.getElementById("output").innerHTML = ""
    document.getElementById("output").innerHTML += `
        <p id = "nombre">${daticos.data.name}</p>
        <br><p id = "movie">Películas: ${daticos.data.films}</p>
        <br><p id = "fecha">Creado: ${daticos.data.createdAt}</p>
        <br><p id = "game">Videojuegos: ${daticos.data.videoGames}</p>
        <img id="imagen" src= "${daticos.data.imageUrl}"><br>
        ${daticos.data.shortFilms}
    `
    })
}