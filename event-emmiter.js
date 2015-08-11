"use strict";

//requerimos la instancia EventEmitter del modulo events
var EventEmitter = require("events").EventEmitter;
//creamos un objeto de la instancia EventEmmiter
var pub = new EventEmitter();

//nos inventamos un tipo de eventos bajo el que se podrán emitir eventos, este evento ya se escuchara y haya lo que se defina en el callback.
pub.on("myevent", function(message){
	console.log(message);
});

//Esto es lo mismo per es para la primera vez que se emite el evento.
pub.once("myevent", function(message){
	console.log("Se emite por primera vez: "+ message);
});

//Emito 2 veces un evento del tipo <myevent>, la primera tenemos un escuchador especial, que nos hace X tarea.
pub.emit("myevent", "Soy un emisor de eventos");
pub.emit("myevent", "Volviendo a emitir 2");

//Podemos eliminar un evento bajo X circustancias.
pub.removeAllListeners("myevent");
//Y vemos como este evento emitido no es escuchado por el gestor o tipo de eventos <myevent> por que lo hemos eliminado.
pub.emit("myevent","Hola, evento 3");
