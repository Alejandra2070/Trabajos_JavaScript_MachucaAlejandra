// URL para obtener un nuevo mazo de cartas barajado
var url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
var total = 0; // Variable para llevar el total de puntos
var deckId = ""; // Variable para almacenar el ID del mazo

// Llama a la función mostrarUrl con la URL del mazo
mostrarUrl(url);

// Función para obtener el ID del mazo y habilitar el botón para sacar una nueva carta
function mostrarUrl(url) {
    fetch(url) // Realiza una solicitud a la URL
        .then(res => res.json()) // Convierte la respuesta a JSON
        .then(data => {
            deckId = data.deck_id; // Almacena el ID del mazo
            document.getElementById("buttonNew").disabled = false; // Habilita el botón para sacar una nueva carta
        });
}

// Función para sacar una nueva carta del mazo
function nuevaCarta() {
    var linkDos = "https://deckofcardsapi.com/api/deck/" + deckId + "/draw/?count=1"; // URL para sacar una carta

    fetch(linkDos) // Realiza una solicitud a la URL
        .then(res => res.json()) // Convierte la respuesta a JSON
        .then(cartas => {
            let crear = document.getElementById("imgs"); // Obtiene el elemento donde se mostrarán las imágenes
            let img = document.createElement("img"); // Crea un nuevo elemento de imagen
            img.src = cartas.cards[0].image; // Establece la fuente de la imagen a la URL de la carta
            crear.appendChild(img); // Añade la imagen al elemento

            total += calcularValor(cartas.cards[0].value); // Añade el valor de la carta al total
            let mensaje = document.getElementById("mensaje"); // Obtiene el elemento para mostrar mensajes

            // Verifica si el total es 21, mayor que 21 o menor que 21 y muestra el mensaje correspondiente
            if (total === 21) {
                mensaje.innerText = "¡Felicidadessss, acabas de ganar :D!";
                document.getElementById("buttonNew").disabled = true; // Deshabilita el botón para sacar una nueva carta
                document.getElementById("buttonReset").style.display="inline-block"; // Muestra el botón de reiniciar
            } 
            else if (total > 21) {
                mensaje.innerText = "Perdiste, te pasaste de 21 :(";
                document.getElementById("buttonNew").disabled = true; // Deshabilita el botón para sacar una nueva carta
                document.getElementById("buttonReset").style.display="inline-block"; // Muestra el botón de reiniciar
            } 
            else {
                mensaje.innerText = "Tu total es de " + total + ". Sigue jugando.";
            }
        });
}

// Función para calcular el valor de una carta
function calcularValor(valor) {
    if (valor === "ACE") {
        return 11; // El valor del As es 11
    }
    else if (["KING", "QUEEN", "JACK"].includes(valor)) {
        return 10; // El valor del Rey, Reina y Jota es 10
    } 
    else {
        return parseInt(valor); // Convierte el valor de la carta a un número entero
    }
}

// Función para reiniciar el juego
function reintentarJuego() {
    total = 0; // Reinicia el total a 0
    document.getElementById("imgs").innerHTML = ""; // Limpia las imágenes de las cartas
    document.getElementById("mensaje").innerText = ""; // Limpia el mensaje
    document.getElementById("buttonNew").disabled = false; // Habilita el botón para sacar una nueva carta
    document.getElementById("buttonReset").style.display = "none"; // Oculta el botón de reiniciar
    mostrarUrl(url); // Vuelve a obtener un nuevo mazo
}

// Función para mostrar u ocultar las reglas del juego
function mostrarReglas(){
    var reglas = document.getElementById("reglas"); // Obtiene el elemento de las reglas
    if (reglas.style.display === "none") {
        reglas.style.display = "block"; // Muestra las reglas si están ocultas
    } else {
        reglas.style.display = "none"; // Oculta las reglas si están visibles
    }
}