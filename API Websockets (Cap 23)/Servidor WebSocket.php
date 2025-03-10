public function onMessage(IWebSocketConnection $user, IWebSocketMessage $msg){
$msg = trim($msg->getData());
switch($msg){
case 'hola':
$msgback = WebSocketMessage::create("Hola humano");
$user->sendMessage($msgback);
break;
case 'nombre':
$msgback = WebSocketMessage::create("No tengo un nombre");
$user->sendMessage($msgback);
break;
case 'edad':
$msgback = WebSocketMessage::create("Soy viejo");
$user->sendMessage($msgback);
break;
case 'fecha':
$msgback = WebSocketMessage::create("Hoy es ".date("F j, Y"));
$user->sendMessage($msgback);
break;
case 'hora':
$msgback = WebSocketMessage::create("La hora es ".date("H:iA"));
$user->sendMessage($msgback);
break;
case 'gracias':
$msgback = WebSocketMessage::create("No hay problema");
$user->sendMessage($msgback);
break;
case 'adios':
$msgback = WebSocketMessage::create("Que tengas un buen día");
$user->sendMessage($msgback);
break;
default:
$msgback = WebSocketMessage::create("No entiendo");
$user->sendMessage($msgback);
break;
}
}