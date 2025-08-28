/*
*  Archivo main.js
*  Creado por: Orlando Arboleda Molina
*  Fecha: 5-Julio-2024
*
*  Descripción: 
*  Logico frontEnd para suministrar datos JSON, 
*  para el curso de EDyA1 en la Universidad Autónoma de Occidente
*/

const formElement = document.getElementById("generarTransaccion");

let votos = {
    "JavaScript": 0,
    "Python": 0,
    "C++": 0,
    "Otro": 0
};

formElement.addEventListener('submit', (event) => {
    event.preventDefault();

    let seleccion = document.querySelector('input[name="accion"]:checked');
    if (!seleccion) return;

    let opcion = seleccion.value;
    votos[opcion]++;

    actualizarResultados();

    // Deshabilitar formulario para que no vuelva a votar
    let radios = document.querySelectorAll('input[name="accion"]');
    radios.forEach(r => r.disabled = true);
    event.target.querySelector('button[type="submit"]').disabled = true;
});

function actualizarResultados() {
    let total = Object.values(votos).reduce((a, b) => a + b, 0);

    for (let opcion in votos) {
        let votosOpcion = votos[opcion];
        let porcentaje = total > 0 ? ((votosOpcion / total) * 100).toFixed(1) : 0;

        if (opcion === "JavaScript") {
            document.getElementById("votos-js").innerText = votosOpcion;
            document.getElementById("porcentaje-js").innerText = porcentaje + "%";
        } else if (opcion === "Python") {
            document.getElementById("votos-py").innerText = votosOpcion;
            document.getElementById("porcentaje-py").innerText = porcentaje + "%";
        } else if (opcion === "C++") {
            document.getElementById("votos-cpp").innerText = votosOpcion;
            document.getElementById("porcentaje-cpp").innerText = porcentaje + "%";
        } else if (opcion === "Otro") {
            document.getElementById("votos-otro").innerText = votosOpcion;
            document.getElementById("porcentaje-otro").innerText = porcentaje + "%";
        }
    }
}