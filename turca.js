
//////////////-- inicia el escenario
this.gotoAndStop(1); // se detiene en en el frame 1
var ldt = this;   //Le asigno this a una variable para no tener errores 
//debido a que this no la puedo utilizar dentro de la función con play




/////////////--avanza según la tecla undida
window.addEventListener("keydown", leftright.bind(this));
var counter = 360; // Se explica su uso mas adelante.

//- los números 37 y 39 son tomados por javascript como las flechas izquiera 
//y derecha respectivamente
function leftright(e) {
	if (e.keyCode == 37) {
		
		this.meadow.x -= 10;   //Desplazamos el fondo pradera
		this.desert.x -= 10;   //Desplazamos el fondo desierto
		this.horse.x  -= 10;   //Desplazamos el caballo
		this.camel.x  -= 10;   //Desplazamos el camello
		counter  	  -= 10;   
		/*Le resto a la variable counter lo mismo que a la posición de las cosas*/ 
	}	
	 else if (e.keyCode == 39) {
		this.meadow.x += 10;
		this.desert.x += 10;
		this.horse.x  += 10;
		this.camel.x  += 10;
		counter 	  += 10;
		/*Le sumo a la variable counter lo mismo que a la posición de las cosas*/
		}  
	
}		


/* Hago una función que me devuelva todo a la posición original y no se vean los 
	parches blancos, acá es donde entra la variable counter
*/
window.addEventListener("keydown", maxlr.bind(this));
function maxlr(e){
	if (e.keyCode == 37 && counter < 0 ){
		if (confirm("Por favor seleccione si desea seguir leyendo")) {
			this.meadow.x = -360;   //Desplazamos todo a la posicion inicial
			this.desert.x = 360;
			this.horse.x  = -192;  //inicialmente está en 168 (168-360=-192)
			this.camel.x  = 193;   //inicialmente está en 553 (553-360=193)
			counter       = 0;	
		}
		else{
			this.meadow.x += 360;   //Desplazamos todo a la posicion inicial
			this.desert.x += 360;
			this.horse.x  += 360;
			this.camel.x  += 360;
			counter=360; // El contador se reinicia
		}
	}else if (e.keyCode == 39 && counter > 720 ){
		if (confirm("Por favor seleccione si desea seguir leyendo")) {
			this.meadow.x = 360;   //Desplazamos todo a la posicion inicial
			this.desert.x = 1080;
			this.horse.x  = 528;  //inicialmente está en 168 (168+360=528)
			this.camel.x  = 913;   //inicialmente está en 553 (553+360=913)
			counter       = 720;	
		}else{
			this.meadow.x -= 360;   //Desplazamos todo a la posicion inicial
			this.desert.x -= 360;
			this.horse.x  -= 360;
			this.camel.x  -= 360;
			counter=360; //El contador se reinicia
		}
	}	
}
