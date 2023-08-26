// Parte 1: Botón para agregar una nueva actividad

// Contador para el número de actividades
let actividadContador = 2; // Inicializamos en 2 porque ya tenemos dos actividades

// Función para agregar una nueva actividad a la lista
function agregarActividad() {

    // Incrementamos el contador
    actividadContador++;

    // Obtenemos la lista de actividades por su id
    const listaActividades = document.getElementById("lista-actividades");

    // Creamos el elemento li
    const nuevaActividad = document.createElement("li");
    nuevaActividad.textContent = `Actividad ${actividadContador}`;

    // Agregamos el elemento li a la lista
    listaActividades.appendChild(nuevaActividad);
}

// Agregamos el comportamiento de la función al botón
const botonAgregar = document.getElementById("btnAgregar");
botonAgregar.addEventListener("click", agregarActividad);


// Parte 2: Botón para cambiar el color de fondo

let colorFondoInicial = true; // Variable para saber si el color de fondo es el inicial o no

// Función para cambiar el color de fondo
function cambiarColorFondo() {
    // Obtenemos el elemento body
    const body = document.querySelector("body");

    // Cambiamos el color de fondo
    if (colorFondoInicial) {
        body.style.backgroundColor = "red"; // Color rojo
    } else {
        body.style.backgroundColor = "#f0f0f0"; // Color inicial
    }

    // Cambiamos el valor de la variable
    colorFondoInicial = !colorFondoInicial;
}

// Agregamos el comportamiento de la función al botón
const botonCambiarColor = document.getElementById("btnCambiarColor");
botonCambiarColor.addEventListener("click", cambiarColorFondo);
