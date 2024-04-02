var modoOscuro = false;

// Función para cambiar la ruta del CSS y el texto del botón
function cambiarCSS() {
    // Obtenemos el elemento <link> que referencia al archivo CSS
    var cssLink = document.getElementById("css-link");

    // Si estamos en modo oscuro, cambiamos a modo claro
    if (modoOscuro) {
        cssLink.href = "css/style.css"; // Cambiar la ruta al CSS de modo claro
        document.getElementById("modo").textContent = "Mood Dark"; // Cambiar el texto del botón
        modoOscuro = false; // Actualizar el estado del modo
    } else {
        // Si no estamos en modo oscuro, cambiamos a modo oscuro
        cssLink.href = "css/style2.css"; // Cambiar la ruta al CSS de modo oscuro
        document.getElementById("modo").textContent = "Mood Light"; // Cambiar el texto del botón
        modoOscuro = true; // Actualizar el estado del modo
    }
}


const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;

        if (boton.id === "c") {
            pantalla.textContent = "0";
            return;
        }

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if (boton.id === "igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = "Sintax Error Wey!";
            }
            return;
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "Sintax Error Wey!") {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }
    })
})