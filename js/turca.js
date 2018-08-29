(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"turca_atlas_", frames: [[1922,0,106,74],[1922,76,106,74],[1922,152,106,74],[0,0,1920,1280],[0,1282,1920,1280],[1922,228,106,74],[1922,304,106,74],[1922,380,106,74],[1922,456,106,74],[1444,2564,600,200],[0,2564,720,480],[722,2564,720,480]]}
];


// symbols:



(lib.c1 = function() {
	this.spriteSheet = ss["turca_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.c2 = function() {
	this.spriteSheet = ss["turca_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.c3 = function() {
	this.spriteSheet = ss["turca_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.copiaMapadebits13 = function() {
	this.spriteSheet = ss["turca_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.copiaMapadebits14 = function() {
	this.spriteSheet = ss["turca_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.h1 = function() {
	this.spriteSheet = ss["turca_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.h2 = function() {
	this.spriteSheet = ss["turca_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.h3 = function() {
	this.spriteSheet = ss["turca_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.h4 = function() {
	this.spriteSheet = ss["turca_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits15 = function() {
	this.spriteSheet = ss["turca_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits2 = function() {
	this.spriteSheet = ss["turca_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits3 = function() {
	this.spriteSheet = ss["turca_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Meadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.Mapadebits2();
	this.instance.parent = this;
	this.instance.setTransform(720,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Meadow, new cjs.Rectangle(0,0,720,480), null);


(lib.Horsebtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ApTltISnAAIAALbIynAAg");
	this.shape.setTransform(59.6,36.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FF0000","#000000"],[0,1],0,0,0,0,0,70).s().p("ApTFuIAArbISnAAIAALbg");
	this.shape_1.setTransform(59.6,36.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,121.3,75.3);


(lib.H4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.h4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.H4, new cjs.Rectangle(0,0,106,74), null);


(lib.H3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.h3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.H3, new cjs.Rectangle(0,0,106,74), null);


(lib.H2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.h2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.H2, new cjs.Rectangle(0,0,106,74), null);


(lib.Desert = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.Mapadebits3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Desert, new cjs.Rectangle(0,0,720,480), null);


(lib.Closehorse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FF0000","#000000"],[0,1],0,0,0,0,0,47.7).s("#000000").ss(1,1,1).de(-47.5,-46.7,95,93.4);
	this.shape.setTransform(47.5,46.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Closehorse, new cjs.Rectangle(-1,-1,97,95.4), null);


(lib.Closecamel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FF0000","#000000"],[0,1],0,0,0,0,0,46.6).s("#000000").ss(1,1,1).de(-45.6,-45.1,91.2,90.2);
	this.shape.setTransform(45.6,45.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Closecamel, new cjs.Rectangle(-1,-1,93.2,92.2), null);


(lib.Camelbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FF0000","#000000"],[0,1],0,0,0,0,0,46.1).s().p("AmED2IAAnrIMJAAIAAHrg");
	this.shape.setTransform(38.9,24.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,77.8,49.3);


(lib.C3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.c3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.C3, new cjs.Rectangle(0,0,106,74), null);


(lib.C2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.c2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.C2, new cjs.Rectangle(0,0,106,74), null);


(lib.Banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.Mapadebits15();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Banner, new cjs.Rectangle(0,0,600,200), null);


(lib.Horseinf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.copiaMapadebits13();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Capa_2
	this.closehorse = new lib.Closehorse();
	this.closehorse.name = "closehorse";
	this.closehorse.parent = this;
	this.closehorse.setTransform(1856.5,67.1,1,1,0,0,0,47.5,46.7);
	new cjs.ButtonHelper(this.closehorse, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.closehorse).wait(1));

}).prototype = getMCSymbolPrototype(lib.Horseinf, new cjs.Rectangle(0,0,1920,1280), null);


(lib.Horse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.h1();
	this.instance.parent = this;

	this.h2 = new lib.H2();
	this.h2.name = "h2";
	this.h2.parent = this;
	this.h2.setTransform(63,37,1,1,0,0,0,53,37);

	this.h3 = new lib.H3();
	this.h3.name = "h3";
	this.h3.parent = this;
	this.h3.setTransform(64,43,1,1,0,0,0,53,37);

	this.h4 = new lib.H4();
	this.h4.name = "h4";
	this.h4.parent = this;
	this.h4.setTransform(53,37,1,1,0,0,0,53,37);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.h2}]},4).to({state:[{t:this.h3}]},5).to({state:[{t:this.h4}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106,74);


(lib.Caminf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.copiaMapadebits14();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Capa_2
	this.closecamel = new lib.Closecamel();
	this.closecamel.name = "closecamel";
	this.closecamel.parent = this;
	this.closecamel.setTransform(1843.3,68.7,1,1,0,0,0,45.6,45.1);
	new cjs.ButtonHelper(this.closecamel, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.closecamel).wait(1));

}).prototype = getMCSymbolPrototype(lib.Caminf, new cjs.Rectangle(0,0,1920,1280), null);


(lib.Camel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.c1();
	this.instance.parent = this;

	this.c2 = new lib.C2();
	this.c2.name = "c2";
	this.c2.parent = this;
	this.c2.setTransform(53,37,1,1,0,0,0,53,37);

	this.c3 = new lib.C3();
	this.c3.name = "c3";
	this.c3.parent = this;
	this.c3.setTransform(53,37,1,1,0,0,0,53,37);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.c2}]},5).to({state:[{t:this.c3}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106,74);


// stage content:
(lib.turca = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//////////////-- inicia el escenario
		this.gotoAndStop(1); // se detiene en en el frame 1
		var ldt = this;   //Le asigno this a una variable para no tener errores 
		//debido a que this no la puedo utilizar dentro de la función con play
		
		
		this.horseinf.visible = false;
		this.caminf.visible = false;
		
		
		/////////////--avanza según la tecla undida
		window.addEventListener("keydown", arrows.bind(this));
		var counter = 360;  // Se explica su uso mas adelante.
		
		//- los números 37 y 39 son tomados por javascript como las flechas izquiera 
		//y derecha respectivamente
		function arrows(e) {
			if (e.keyCode == 37) {
				
				this.meadow.x -= 10;   //Desplazamos el fondo pradera
				this.desert.x -= 10;   //Desplazamos el fondo desierto
				this.horse.x  -= 10;   //Desplazamos el caballo
				this.camel.x  -= 10;   //Desplazamos el camello
				this.horsebtn.x  -= 10;
				this.camelbtn.x  -= 10;
				this.caminf.visible = false;
				this.horseinf.visible = false;
				this.banner.visible = false;
				counter  	  -= 10;
				/*Le resto a la variable counter lo mismo que a la posición de las cosas*/ 
			}	
			 else if (e.keyCode == 39) {
				this.meadow.x += 10;
				this.desert.x += 10;
				this.horse.x  += 10;
				this.camel.x  += 10;
				this.horsebtn.x  += 10;
				this.camelbtn.x  += 10;
				this.caminf.visible = false;
				this.horseinf.visible = false;
				this.banner.visible = false;
				counter 	  += 10;
				/*Le sumo a la variable counter lo mismo que a la posición de las cosas*/
			} 
			 else if (e.keyCode == 38){ //keyCode == 38 == flecha_arriba
					this.horseinf.visible = true;
					this.caminf.visible = false;
					this.banner.visible = false;
					
					
			} 
			 else if (e.keyCode == 40){
					this.caminf.visible = true;
					this.horseinf.visible = false;
					this.banner.visible = false;
			}
			 else if (e.keyCode == 27) {  //keyCode == 27 == tecla_esc  
					this.caminf.visible = false;
					this.horseinf.visible = false;
					this.banner.visible = false;
			
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
					this.horse.x  = -192;  //inicialmente esta en 168 (168-360=-192)
					this.camel.x  = 193;   //inicialmente esta en 553 (553-360=193)
					this.horsebtn.x  = -192;  //inicialmente esta en 168 (168-360=-192)
					this.camelbtn.x  = 193;
					counter       = 0;
					this.caminf.visible = false; //Si esta abierta la otra informacion, que tambien se cierre
					this.horseinf.visible = false;
				}
				else{
					this.meadow.x += 360;   //Desplazamos todo a la posicion inicial
					this.desert.x += 360;
					this.horse.x  += 360;
					this.camel.x  += 360;
					this.horsebtn.x  += 360;
					this.camelbtn.x  += 360;
					counter=360; // El contador se reinicia
					this.caminf.visible = false; 
					this.horseinf.visible = false;
				}
			}else if (e.keyCode == 39 && counter > 720 ){
				if (confirm("Por favor seleccione si desea seguir leyendo")) {
					this.meadow.x = 360;   //Desplazamos todo a la posicion inicial
					this.desert.x = 1080;
					this.horse.x  = 528;  //inicialmente está en 168 (168+360=528)
					this.camel.x  = 913;   //inicialmente está en 553 (553+360=913)
					this.horsebtn.x  = 528;  //inicialmente está en 168 (168+360=528)
					this.camelbtn.x  = 913;
					counter       = 720;	
				}else{
					this.meadow.x -= 360;   //Desplazamos todo a la posicion inicial
					this.desert.x -= 360;
					this.horse.x  -= 360;
					this.camel.x  -= 360;
					this.horsebtn.x  -= 360;
					this.camelbtn.x  -= 360;
					counter=360; //El contador se reinicia
				}
			}	
		}
		
		
		//Quiero que mi texto aparezca cuando se tenga una porción suficiente del fondo del tema
		window.addEventListener("keydown", mytext.bind(this));
		function mytext (e){
			
			if (e.keyCode == 37 && counter <= 123 ){ 
				/*Camel originalmente en X=500 con un ancho de 106p, por tanto la parte derecha esta
				a X=606, entonces: 360-(106+40) 
					500-360+106=246
					246/2=123
				*/
				//La siguiente linea se extiende, solo es el texto del cuadro
				this.ddi.text = "En cuanto se habla de la historia turca después del islam, podemos encontrar que todo empezó en La Meca (península arabiga), donde el profeta Mahoma empezó a predicar y donde estuvo haciendólo por 13 años hasta su expulsión a Medina donde duró 10 años hasta su muerte aproximadamente en el año 632. De allí el mundo musulman se empezó a expandir hasta llegar a los turcos por una alianza contra China con musulmanes Abbasides y allí empezó la islamización de los turcos. ";
			
			} 
			else if (e.keyCode == 39 && counter >= 590){ 
				/* Horse se encuentra incialmente en X=40 y counter en 360
				entonces 360+180 + 50 (Xhorse + 10 ) = 590  */
				//La siguiente linea se extiende, solo es el texto del cuadro
				this.adi.text = "Los turcos, antes del islam creían en un solo Dios llamado Gök-Tanri quien era el único creador y no tenía semejante. También tenían creencias sobre la vida después de la muerte y se enterraban con sus objetos cotidianos, caballos y al rededor de la tumba se ponían los balbales, estos son estatuas que representaban a los enemigos que  habían acabado en vida.";
					
			}
			else if (counter != 360 ) {
				this.adi.text = "";
				this.ddi.text = "";
				this.destext.text = "";
			}
			else if (counter == 360 ) {
				this.adi.text = "";
				this.ddi.text = "";
				this.destext.text = "Usa las flechas del teclado o dale doble click a un animal para acceder a la información";
			}
			
			else {
					this.adi.text = "";
					this.ddi.text = "";
					
			}
		}  
		
		
		/* voy a desplegar la información que proporciona el camello*/
		this.camelbtn.addEventListener ('click', infocamel.bind(this));
		function infocamel(event){
			this.caminf.visible = true;
			this.banner.visible = false;
			//ldt.play();
			}
			
		this.caminf.closecamel.addEventListener ('click', closec.bind(this));
		function closec(event){
				this.caminf.visible= false;
			}
			
			
			//Para desplegar la información del caballo
		this.horsebtn.addEventListener("click", infohorse.bind(this));
		function infohorse(event) {
			this.horseinf.visible = true;
			this.banner.visible = false;
		}
		
		
		this.horseinf.closehorse.addEventListener ('click', closeh.bind(this));
		function closeh(event){
				this.horseinf.visible= false;
			}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Capa_3
	this.banner = new lib.Banner();
	this.banner.name = "banner";
	this.banner.parent = this;
	this.banner.setTransform(371,176,1,1,0,0,0,300,100);
	this.banner._off = true;

	this.timeline.addTween(cjs.Tween.get(this.banner).wait(1).to({_off:false},0).wait(1));

	// horseinfo
	this.horseinf = new lib.Horseinf();
	this.horseinf.name = "horseinf";
	this.horseinf.parent = this;
	this.horseinf.setTransform(360,240,0.375,0.375,0,0,0,960.1,640);
	this.horseinf._off = true;

	this.timeline.addTween(cjs.Tween.get(this.horseinf).wait(1).to({_off:false},0).wait(1));

	// camelinfo
	this.caminf = new lib.Caminf();
	this.caminf.name = "caminf";
	this.caminf.parent = this;
	this.caminf.setTransform(360.1,240,0.375,0.375,0,0,0,960.1,640);
	this.caminf._off = true;

	this.timeline.addTween(cjs.Tween.get(this.caminf).wait(1).to({_off:false},0).wait(1));

	// An
	this.camel = new lib.Camel();
	this.camel.name = "camel";
	this.camel.parent = this;
	this.camel.setTransform(553,313,1,1,0,0,0,53,37);

	this.horse = new lib.Horse();
	this.horse.name = "horse";
	this.horse.parent = this;
	this.horse.setTransform(168,313,1,1,0,0,0,53,37);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.horse},{t:this.camel}]},1).wait(1));

	// textos
	this.destext = new cjs.Text("Usa las flechas del teclado o dale doble click a un animal para acceder a la información", "bold 12px 'Arial'", "#FFFFFF");
	this.destext.name = "destext";
	this.destext.textAlign = "center";
	this.destext.lineHeight = 16;
	this.destext.lineWidth = 296;
	this.destext.parent = this;
	this.destext.setTransform(366,292);

	this.ddi = new cjs.Text("", "bold 20px 'Arial'", "#990000");
	this.ddi.name = "ddi";
	this.ddi.textAlign = "right";
	this.ddi.lineHeight = 24;
	this.ddi.lineWidth = 296;
	this.ddi.parent = this;
	this.ddi.setTransform(679,33.5,1,1.002);

	this.adi = new cjs.Text("", "bold 20px 'Arial'", "#FFFFFF");
	this.adi.name = "adi";
	this.adi.lineHeight = 24;
	this.adi.lineWidth = 296;
	this.adi.parent = this;
	this.adi.setTransform(42,87.5,1,1.002);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.adi},{t:this.ddi},{t:this.destext}]},1).wait(1));

	// BG
	this.desert = new lib.Desert();
	this.desert.name = "desert";
	this.desert.parent = this;
	this.desert.setTransform(720,240,1,1,0,0,0,360,240);

	this.meadow = new lib.Meadow();
	this.meadow.name = "meadow";
	this.meadow.parent = this;
	this.meadow.setTransform(0,240,1,1,0,0,0,360,240);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.meadow},{t:this.desert}]},1).wait(1));

	// Capa_1
	this.horsebtn = new lib.Horsebtn();
	this.horsebtn.name = "horsebtn";
	this.horsebtn.parent = this;
	this.horsebtn.setTransform(177.8,313.1,1,1,0,0,0,59.6,36.6);
	new cjs.ButtonHelper(this.horsebtn, 0, 1, 1);

	this.camelbtn = new lib.Camelbtn();
	this.camelbtn.name = "camelbtn";
	this.camelbtn.parent = this;
	this.camelbtn.setTransform(556.4,311.8,1,1,0,0,0,38.9,24.6);
	new cjs.ButtonHelper(this.camelbtn, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AmEj1IMJAAIAAHrIsJAAg");
	this.shape.setTransform(556.3,311.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.camelbtn},{t:this.horsebtn}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(477.2,515.5,479,75.3);
// library properties:
lib.properties = {
	id: '41DB7841612C424F820F9EEEE905C355',
	width: 720,
	height: 480,
	fps: 24,
	color: "#666666",
	opacity: 1.00,
	manifest: [
		{src:"images/turca_atlas_.png?1526190807554", id:"turca_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['41DB7841612C424F820F9EEEE905C355'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;