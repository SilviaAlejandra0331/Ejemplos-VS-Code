var cajadatos, socket;
function iniciar() {
cajadatos = document.getElementById("cajadatos");
var boton = document.getElementById("boton");
boton.addEventListener("click", enviar);
socket = new WebSocket("ws://SU_DIRECCION_IP:12345/ws/Servidor WebSocket.php");
socket.addEventListener("message", recibido);
}
function recibido(evento) {
var lista = cajadatos.innerHTML;
cajadatos.innerHTML = "Recibido: " + evento.data + "<br>" + lista;
}
function enviar() {
var comando = document.getElementById("comando").value;
socket.send(comando);
}
window.addEventListener("load", iniciar);