function mostrarCarta() {
    document.getElementById("carta").classList.remove("oculto");
}

function cerrarCarta() {
    document.getElementById("carta").classList.add("oculto");
}

function sorpresa() {
    alert("💖 Ana Karen, eres lo mejor que me ha pasado. Te amo muchísimo 💖");
}

/* Crear corazones dinámicos */
setInterval(() => {
    const corazon = document.createElement("div");
    corazon.innerHTML = "💖";
    corazon.style.position = "absolute";
    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.top = "100%";
    corazon.style.fontSize = "20px";
    corazon.style.animation = "subir 5s linear";

    document.body.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 5000);
}, 300);

const style = document.createElement('style');
style.innerHTML = `
@keyframes subir {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(-100vh); opacity: 0; }
}`;
document.head.appendChild(style);
