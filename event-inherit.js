"use strict";

var EventEmitter = require("events").EventEmitter;
//requireo la instancia clousure <inherits> del modulo <util> para hacer herencia. 
var inherits = require("util").inherits;

//Defino una function contructora o prototipo
var Clock = function(){
	//cacheo el valor de this para poder usarlo en scopes inferiores.
	var self = this;
	setInterval(function(){
		//cada 1 segundo emito un evento <tictac> 
		self.emit("tictac");
		//pero si el tipo de objeto no tiene carteristicas emisoras de eventos, EventEmitter no emitira., tenemos que heredarlas como hacemos a continuacion. 
	}, 1000);
}

//Necsito que mi clase Clock herede las caracteristicas de los emisores de eventos, para que pueda ser un emisor de eventos.
inherits(Clock, EventEmitter); 
//Para esto tenemos la utileria inherit que es una implementacion de apply() o bind() para hacer herencia sin importanr el contexto.


//Agrego un método a la funcion constructora <Clock>
Clock.prototype.theTime = function(){
	//me creo un objeto del prototipo <Date>
	var date = new Date();
	var hrs = date.getHours();
	var min = date.getMinutes();
	var sec = date.getSeconds();

	var msg = hrs+":"+min+":"+sec;
	//Este metodo imprimira por consola la hora, minutos y segundos
	console.log(msg);
}


var cucu = new Clock();

cucu.on("tictac", function(){
	cucu.theTime();
});


//También podríamos emitir los eventos a una determinada hora, en lugar de cada X segundos como hemos hecho anteriormente.

//ver el prototipo Date en consola para ver lo que tiene.
console.log(new Date); //no se imprime por que el relog no para, por el setinterval, lo hará cuando pare, o si lo  hacemos asincrono.

