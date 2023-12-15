// Retorna un string que es lo que va a jugar la CPU
function cpuChoice() {
    const opciones = ["piedra","papel","tijeras"];
    return opciones[Math.floor(Math.random() * 3)];
}

// Comprueba el ganador, retorna true si el user gana, false si la cpu gana
function juego(userChoice,cpuChoice) {
    if(userChoice === cpuChoice) {
        return "empate";
    } else if (
        (userChoice === "piedra" && cpuChoice === "tijeras") ||
        (userChoice === "papel" && cpuChoice === "piedra") ||
        (userChoice === "tijeras" && cpuChoice === "papel")
    ) {
        return true;
    } else {
        return false;
    }
}

function activar(opcion) {
    let botones = document.querySelectorAll(".botones button");
    botones.forEach(function(boton) {
        boton.classList.remove("active");
    });

    let botonClicado = document.getElementById("btn" + opcion);
    botonClicado.classList.add("active");

    var imagenUsuario = document.getElementById('imagenUsuario');
    switch (opcion) {
        case 'piedra':
            imagenUsuario.src = 'piedra.jpg'; 
            break;
        case 'papel':
            imagenUsuario.src = 'papel.jpg'; 
            break;
        case 'tijeras':
            imagenUsuario.src = 'tijeras.jpg'; 
            break;
        default:
            imagenUsuario.src = 'interrogacion.jpg';
    }

    const cpu = cpuChoice();
    var imagenCpu = document.getElementById('imagenCpu');
    switch (cpu) {
        case 'piedra':
            imagenCpu.src = 'piedra.jpg'; 
            break;
        case 'papel':
            imagenCpu.src = 'papel.jpg'; 
            break;
        case 'tijeras':
            imagenCpu.src = 'tijeras.jpg'; 
            break;
        default:
            imagenCpu.src = 'interrogacion.jpg';
    }

    const resultado = juego(opcion,cpu);
    mostrarResultado(resultado);
}

function mostrarResultado(resultado) {
    const mensaje = document.getElementById("resultado");
    const gameOver = document.querySelector(".game-over");
    gameOver.style.display = "block";

    // Eliminamos todas las clases
    mensaje.classList.remove("verde", "rojo", "empate");

    let textoResultado;
    switch (resultado) {
        case true:
            mensaje.classList.add("verde");
            textoResultado = "Enhorabuena, has ganado!";
            break;
        case false:
            mensaje.classList.add("rojo");
            textoResultado = "Vaya, has perdido!";
            break;
        case "empate":
            mensaje.classList.add("empate");
            textoResultado = "Has empatado!";
            break;
    }

    mensaje.innerHTML = textoResultado;
}
