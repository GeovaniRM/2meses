// TEXTO TIPO MÁQUINA
const texto = "Hola mi amor Ana Karen 💕... hoy celebramos 2 meses y quiero que sepas que eres lo mejor que me ha pasado ❤️";
let i = 0;

function escribir() {
    if (i < texto.length) {
        document.getElementById("mensaje").innerHTML += texto.charAt(i);
        i++;
        setTimeout(escribir, 50);
    }
}
escribir();

// CORAZONES PRO
setInterval(() => {
    const corazon = document.createElement("div");
    corazon.classList.add("corazon");
    corazon.innerHTML = "💖";
    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.fontSize = Math.random() * 20 + 15 + "px";

    document.body.appendChild(corazon);

    setTimeout(() => corazon.remove(), 6000);
}, 200);

// MODAL
function mostrarCarta() {
    document.getElementById("carta").classList.remove("oculto");
}

function cerrarCarta() {
    document.getElementById("carta").classList.add("oculto");
}

// SORPRESA
function sorpresa() {
    alert("💖 Ana Karen, prometo hacerte feliz cada día 💖");
}

// MODO SECRETO 🔐
function modoSecreto() {
    const clave = prompt("Ingresa la clave secreta:");
    
    if (clave === "teamo") {
        alert("💖 Eres el amor de mi vida Ana Karen 💖");
    } else {
        alert("❌ Clave incorrecta");
    }
}
