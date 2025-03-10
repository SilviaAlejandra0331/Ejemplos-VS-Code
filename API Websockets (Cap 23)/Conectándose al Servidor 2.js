var cajadatos, socket;
function iniciar() {
cajadatos = document.getElementById("cajadatos");
var boton = document.getElementById("boton");
boton.addEventListener("click", enviar);
socket = new WebSocket("ws://SU_DIRECCION_IP:12345/ws/demo.php");
socket.addEventListener("open", abierta);
socket.addEventListener("message", recibido);
socket.addEventListener("close", cerrada);
socket.addEventListener("error", mostrarerror);
}
function abierta() {
cajadatos.innerHTML = "CONEXION ABIERTA<br>";
cajadatos.innerHTML += "Estado: " + socket.readyState;
}
function recibido(evento) {
var lista = cajadatos.innerHTML;
cajadatos.innerHTML = "Recibido: " + evento.data + "<br>" + lista;
}
function cerrada() {
var lista = cajadatos.innerHTML;
cajadatos.innerHTML = "CONEXION CERRADA<br>" + lista;
var boton = document.getElementById("boton");
boton.disabled = true;
}
function mostrarerror() {
var lista = cajadatos.innerHTML;
cajadatos.innerHTML = "ERROR<br>" + lista;
}
function enviar() {
var comando = document.getElementById("comando").value;
if (comando == "cerrar") {
socket.close();
} else {
socket.send(comando);
}
}
window.addEventListener("load", iniciar);