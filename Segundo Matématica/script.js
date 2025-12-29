// seleccionamos los elementos del DOM
let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let respuesta_usuario = document.querySelector("#respuesta_usuario");
let msj_correccion = document.querySelector("#msj_correccion");
let operacion = document.querySelector("#operacion");
let txt_puntos = document.querySelector("#puntos");
let txt_record = document.querySelector("#record");
let txt_vidas = document.querySelector("#vidas");
let txt_puntaje_conseguido = document.querySelector("#puntaje_conseguido");

let operacion_actual;
let n1, n2;

// puntuación y vidas
let puntos = 0;
let vidas = 3;
let puntaje_maximo_ronda = 0;

// récords por operación
let recordSuma = localStorage.getItem("recordSuma") || 0;
let recordResta = localStorage.getItem("recordResta") || 0;
let recordProducto = localStorage.getItem("recordProducto") || 0;
let recordDivision = localStorage.getItem("recordDivision") || 0;

function mostrarRecordActual() {
    let r = 0;
    if (operacion_actual == "+") r = recordSuma;
    if (operacion_actual == "-") r = recordResta;
    if (operacion_actual == "*") r = recordProducto;
    if (operacion_actual == "/") r = recordDivision;
    txt_record.innerHTML = "🏆 Récord: " + r;
}

// funciones de operaciones
function btnSumar() {
    msj_correccion.innerHTML = "";
    txt_puntaje_conseguido.innerHTML = "";
    activarBoton("suma");
    operacion_actual = "+";
    operacion.innerHTML = " + ";
    puntos = 0;
    puntaje_maximo_ronda = 0;
    vidas = 3;
    nuevaSuma();
    actualizarInfo();
}

function nuevaSuma() {
    n1 = parseInt(Math.random() * 10);
    n2 = parseInt(Math.random() * 10);
    num1.innerHTML = n1;
    num2.innerHTML = n2;
    respuesta_usuario.focus();
}

function btnResta() {
    msj_correccion.innerHTML = "";
    txt_puntaje_conseguido.innerHTML = "";
    activarBoton("resta");
    operacion_actual = "-";
    operacion.innerHTML = " - ";
    puntos = 0;
    puntaje_maximo_ronda = 0;
    vidas = 3;
    nuevaResta();
    actualizarInfo();
}

function nuevaResta() {
    n1 = parseInt(Math.random() * 5 + 5);
    n2 = parseInt(Math.random() * 5);
    num1.innerHTML = n1;
    num2.innerHTML = n2;
    respuesta_usuario.focus();
}

function btnProducto() {
    msj_correccion.innerHTML = "";
    txt_puntaje_conseguido.innerHTML = "";
    activarBoton("producto");
    operacion_actual = "*";
    operacion.innerHTML = " x ";
    puntos = 0;
    puntaje_maximo_ronda = 0;
    vidas = 3;
    nuevoProducto();
    actualizarInfo();
}

function nuevoProducto() {
    n1 = parseInt(Math.random() * 10);
    n2 = parseInt(Math.random() * 10);
    num1.innerHTML = n1;
    num2.innerHTML = n2;
    respuesta_usuario.focus();
}

function btnDivision() {
    msj_correccion.innerHTML = "";
    txt_puntaje_conseguido.innerHTML = "";
    activarBoton("division");
    operacion_actual = "/";
    operacion.innerHTML = " / ";
    puntos = 0;
    puntaje_maximo_ronda = 0;
    vidas = 3;
    nuevaDivision();
    actualizarInfo();
}

function nuevaDivision() {
    let divisores = [];
    n1 = parseInt(Math.random() * 9 + 1);
    for (let i = 1; i <= n1; i++) {
        if (n1 % i === 0) {
            divisores.push(i);
        }
    }
    let pos = parseInt(Math.random() * divisores.length);
    n2 = divisores[pos];
    num1.innerHTML = n1;
    num2.innerHTML = n2;
    respuesta_usuario.focus();
}

// función corregir con vidas y récord por operación
function corregir() {
    if (respuesta_usuario.value == "") return;

    let solucion = eval(n1 + operacion_actual + n2);
    let i = document.createElement("i");

    if (respuesta_usuario.value == solucion) {
        i.className = "fa-regular fa-face-grin";
        puntos += 1;
        if (puntos > puntaje_maximo_ronda) {
            puntaje_maximo_ronda = puntos;
        }

        if (operacion_actual == "+" && puntos > recordSuma) {
            recordSuma = puntos;
            localStorage.setItem("recordSuma", recordSuma);
        } else if (operacion_actual == "-" && puntos > recordResta) {
            recordResta = puntos;
            localStorage.setItem("recordResta", recordResta);
        } else if (operacion_actual == "*" && puntos > recordProducto) {
            recordProducto = puntos;
            localStorage.setItem("recordProducto", recordProducto);
        } else if (operacion_actual == "/" && puntos > recordDivision) {
            recordDivision = puntos;
            localStorage.setItem("recordDivision", recordDivision);
        }

    } else {
        i.className = "fa-regular fa-face-frown";
        puntos = Math.max(puntos - 1, 0);
        vidas -= 1;

        if (vidas <= 0) {
            reiniciarJuego();
            return;
        }
    }

    msj_correccion.appendChild(i);
    actualizarInfo();

    if (operacion_actual == "+") nuevaSuma();
    else if (operacion_actual == "-") nuevaResta();
    else if (operacion_actual == "*") nuevoProducto();
    else if (operacion_actual == "/") nuevaDivision();

    respuesta_usuario.value = "";
}

// función corregida para mantener el signo de operación
function reiniciarJuego() {
    puntos = 0;
    vidas = 0;
    actualizarInfo();
    respuesta_usuario.disabled = true;
    document.getElementById("corregir").disabled = true;

    const signoOperacion = operacion.innerHTML;

    msj_correccion.innerHTML = "<p style='color:red;font-weight:bold'>🤪 Te quedaste sin vidas. A pensar antes de responder. Esperá 20 segundos...</p>";
    txt_puntaje_conseguido.innerHTML = "<p style='color:#ff6f00;font-weight:bold'>📊 Puntaje conseguido: " + puntaje_maximo_ronda + "</p>";

    setTimeout(() => {
        vidas = 3;
        actualizarInfo();
        respuesta_usuario.disabled = false;
        document.getElementById("corregir").disabled = false;
        msj_correccion.innerHTML = "";
        operacion.innerHTML = signoOperacion;

        if (operacion_actual == "+") nuevaSuma();
        else if (operacion_actual == "-") nuevaResta();
        else if (operacion_actual == "*") nuevoProducto();
        else if (operacion_actual == "/") nuevaDivision();
    }, 20000);
}

function actualizarInfo() {
    txt_puntos.innerHTML = "⭐ Puntos: " + puntos;
    txt_vidas.innerHTML = "❤️ Vidas: " + vidas;
    mostrarRecordActual();
}

respuesta_usuario.onkeydown = function(e) {
    if ((e.keyCode || e.which) == 13) {
        corregir();
    }
}

function activarBoton(idBoton) {
    document.getElementById("suma").className = "";
    document.getElementById("resta").className = "";
    document.getElementById("producto").className = "";
    document.getElementById("division").className = "";
    document.getElementById(idBoton).className = "activado";
}
