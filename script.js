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
    alert(`🌹 Dos meses contigo, Ana Karen 🌹

Ana Karen, desde que llegaste a mi vida,
todo cambió de una forma tan bonita,
como si el mundo tuviera más colores,
como si el tiempo se llenara de amores.

Dos meses parecen poco en el calendario,
pero contigo han sido extraordinarios,
cada risa, cada mirada sincera,
se ha vuelto mi momento favorito a tu manera.

Eres calma en mis días difíciles,
alegría en mis momentos más simples,
la razón por la que sonrío sin pensar,
y el lugar donde siempre quiero estar.

No sé qué escriba el destino más adelante,
pero hoy tengo algo muy importante:
que te quiero más de lo que puedo explicar,
y contigo siempre quiero caminar.

Gracias por estos dos meses, mi amor,
por cada detalle, por tanto calor,
por ser tú, tan única, tan especial…
Ana Karen, contigo todo es ideal. 💕

💖 Mi amor, prometo hacerte feliz cada día 💖`);
}

// MODO SECRETO 🔐
function modoSecreto() {
    const clave = prompt("Ingresa la clave secreta:");
    
    if (clave === "teamo") {
        alert( `Mi amor, mi niña, mi princesa, mi marinovia..
ya no es solo que me gustes o que me hagas feliz.

La verdad es que te quiero en mi vida,
no por un momento… sino para quedarte.

Quiero que seas tú,
la persona con la que construya todo.

Y aunque suene intenso, es real:
no te quiero solo ahora…
te quiero para siempre. ❤️
    💖 Eres el amor de mi vida Ana Karen 💖`);
    } else {
        alert("❌ Clave incorrecta");
    }
}
