var link = 'https://66df33ebde4426916ee3e209.mockapi.io/Users';
const informacion = document.getElementById("caja2");

mostrar(link);

function mostrar(link) {
    fetch(link)
        .then(res => res.json())
        .then(data => {
            // Limpia el contenedor antes de agregar nuevos elementos
            informacion.innerHTML = '';

            for (const i of data) {
                informacion.innerHTML += `
                <div class="caja3">
                    <img class="imgs" src="${i.avatar}">
                    <h2 class="name">${i.name_full}</h2>
                    <h3 class="desc">${i.description}</h3>
                </div>
                `;
            }
        });

    // Agregar el evento de búsqueda después de cargar los datos
    document.getElementById("input").addEventListener("keyup", e => {
        const searchTerm = e.target.value.toLowerCase(); // Convierte el valor de búsqueda a minúsculas

        document.querySelectorAll(".caja3").forEach(element => {
            const name = element.querySelector(".name").textContent.toLowerCase(); // Convierte el nombre a minúsculas
            const description = element.querySelector(".desc").textContent.toLowerCase(); // Convierte la descripción a minúsculas
            if (name.includes(searchTerm) || description.includes(searchTerm)) {/*Verifica si el término de búsqueda está presente en el nombre o la descripción, sin importar las mayúsculas/minúsculas.*/
                element.classList.remove("filtro"); // Muestra el elemento si hay coincidencia
            } else {
                element.classList.add("filtro"); // Oculta el elemento si no hay coincidencia
            }
        });
    });
}