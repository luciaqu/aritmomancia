var amor = 0;
var social= 0;
var nombre = process.argv.slice(2); //Así me deja usar la consola siempre y cuando escriba el nombre letra por letra con espacio.
var caracter = 0;
var letrasArray = [];
var letraAmor = [];
var letraSocial = [];
var numeroFinal = 0;

console.log(nombre);

function leer (){
	for(var i=0; i < nombre.length; i++){
		if (nombre[i] == "a"|| nombre[i] == "j" || nombre[i] == "s"){//compara con las primeras 3 letras
			caracter+=1; //suma si es verdadero
			letrasArray+= nombre[i]; //agrega la letra al array de todas las letras
			if(nombre[i]=="a"){ //pregunta si es la vocal
				amor+=1; //suma la vocal
				letraAmor+= nombre[i]; // agrega la vocal al array de vocales (para verificar nomás)
			} else {
				social+=1; //como no es vocal suma el valor de la consonante 
				letraSocial+= nombre[i]; //agrega la consonante al array de consonantes (para verificar nomás)
			}

		} else if (nombre[i] == "b" || nombre[i] == "k" || nombre[i] == "t"){
			caracter+=2;
			letrasArray+= nombre[i];
			social+=2; //en esta sección no hay vocales, suma las consonantes sí o sí.
			letraSocial+= nombre[i];

		} else if (nombre[i] == "c" || nombre[i] == "l" || nombre[i] == "u"){
			caracter+=3;
			letrasArray+= nombre[i];
			if(nombre[i]=="u"){
				amor+=3;
				letraAmor+= nombre[i];
			} else {
				social+=3;
				letraSocial+= nombre[i];
			}
			
		} else if (nombre[i] == "d" || nombre[i] == "m" || nombre[i] == "v"){
			caracter+=4;
			letrasArray+= nombre[i];
			social+=4;
			letraSocial+= nombre[i];
		
		} else if (nombre[i] == "e" || nombre[i] == "n" || nombre[i] == "w"){
			caracter+=5;
			letrasArray+= nombre[i];
			if(nombre[i]=="e"){
				amor+=5;
				letraAmor+= nombre[i];
			} else {
				social+=5;
				letraSocial+= nombre[i];
			}
		
		} else if (nombre[i] == "f" || nombre[i] == "o" || nombre[i] == "x"){
			caracter+=6;
			letrasArray+= nombre[i];
			if(nombre[i]=="o"){
				amor+=6;
				letraAmor+= nombre[i];
			} else {
				social+=6;
				letraSocial+= nombre[i];
			}
		} else if (nombre[i] == "g" || nombre[i] == "p" || nombre[i] == "y"){
			caracter+=7;
			letrasArray+= nombre[i];
			social+=7;
			letraSocial+= nombre[i];
		} else if (nombre[i] == "h" || nombre[i] == "q" || nombre[i] == "z"){
			caracter+=8;
			letrasArray+= nombre[i];
			social+=8;
			letraSocial+= nombre[i];
		} else if (nombre[i] == "i" || nombre[i] == "r"){
			caracter+=9;
			letrasArray+= nombre[i];
			if(nombre[i]=="i"){
				amor+=9;
				letraAmor+= nombre[i];
			}else {
				social+=9;
				letraSocial+= nombre[i];

			}
		}
	}
	//console.log("caracter suma completa="+ caracter+ " letrasArray= "+letrasArray);
	//console.log("amor suma completa="+ amor+ " letras= " + letraAmor);
	//console.log("social suma completa="+ social+ " letras= "+ letraSocial);

}
function achicar(numero){
	var milenials = 0;
	var centenas = 0;
	var decenas = 0;
	var unidades = 0;
	var sumaDec = 0;
	var doscifras = 0;

	if (numero>999){
		do{	
			numero-=1000;
	 		milenials+=1;
	 		//console.log(milenials+"milenials");
		} while (numero > 999);
	}
	if (numero>99){
		do{	
			numero-=100;
		 	centenas+=1;
		 	//console.log(centenas+"centenas");
		} while (numero > 99);
	}
	if (numero>9){
		do{	
			numero-=10;
		 	decenas+=1;
		 	//console.log(decenas+"decenas");
		} while (numero > 9);
	}	
	if (numero>0){
		do{	
			numero-=1;
		 	unidades+=1;
		 	//console.log(unidades+"unidades");
		} while (numero > 0);
	}
//	console.log(milenials,centenas,decenas,unidades);
	var numeroUno= milenials+centenas+decenas+unidades;
	//console.log(numeroUno+"numeroUno= suma de todos los resultados");


	if (numeroUno < 10){
		numeroFinal = numeroUno;
		console.log(numeroFinal);
		//console.log("final menor que 10");
	} else if(numeroUno > 9){
			doscifras = numeroUno;
			while(doscifras > 9){
				doscifras-=10;
				//console.log(doscifras+"nroUno dentro del while")
				sumaDec++;
				//console.log(sumaDec+"sumaDec");
			}

			numeroFinal = doscifras+sumaDec;
			console.log(numeroFinal);
			//console.log("final mayor que 10");
	}
}

function definicion(numeroF){
	if (numeroF == 1){
		console.log("Uno: Es el número del individuo. Los Unos son independientes, de ideas claras, audaces y decididos. Se fijan una meta y van a por ella. Son líderes e inventores. A los Unos les cuesta trabajar en equipo y no les gusta recibir órdenes. Pueden ser egocéntricos, egoístas y dominantes. Suelen ser solitarios.");
	} else if (numeroF == 2){
		console.log("Dos: El dos representa la interacción, la comunicación en dos direcciones, la cooperación y el equilibrio. Los Doses son imaginativos, creativos y amables. Sus características son la paz, la armonía, el compromiso, la lealtad y el sentido de la justicia. Pero el dos también introduce la idea de conflicto, de fuerzas opuestas, y de facetas en contraposición: el día y la noche, lo bueno y lo malo. Los Doces pueden ser retraídos, volubles, tímidos e indecisos.");
	} else if (numeroF == 3){
		console.log("Tres: El tres representa la idea de la plenitud o totalidad, como en los tríos de pasado/presente/futuro y mente/cuerpo/espíritu. Los pitagóricos consideraban al tres el primer número <<completo>>, ya que, igual que tres guijarros puestos en fila, posee un comienzo, un medio y un final. El tres indica talento, energía, natural artístico, sentido del humor y facilidad para el trato social. Los Treses suelen ser gente con suerte, de trato fácil, ricos y con mucho éxito, pero también pueden ser personas dispersas, que se ofenden con facilidad y superficiales.");
	} else if (numeroF == 4){
	console.log("Cuatro: Como una mesa que reposa firmemente sobre sus cuatro patas, el cuatro indica estabilidad y firmeza. Los Cuatros disfrutan con el trabajo duro. Son prácticos, fiables y con los pies en el suelo; prefieren la lógica y la razón a os vuelos de la fantasía. Son buenos organizadores y consiguen que las cosas se hagan. Como el ciclo de las estaciones, también resultan predecibles. Pueden ser tozudos, recelosos, excesivamente prácticos y con tendencia a tener arrebatos de mal genio. Cualquier conflicto posible con los Doses se duplica en los Cuatros.");
	} else if (numeroF == 5){
	console.log("Cinco: El cinco es el número de la inestabilidad y el desequilibrio. Indica cambio e incertidumbre. Los Cincos se sienten atraídos por muchas cosas a la vez, pero no se centrar en ninguna. Son aventureros, están llenos de energía y siempre dispuestos a arriesgarse. Les encanta viajar y conocer gente nueva, pero puede que no permanezcan mucho tiempo en un mismo lugar. Los Cincos pueden ser engreídos, irresponsables, irascibles e impacientes.");
	} else if (numeroF == 6){
	console.log("Seis: El seis representa la armonía, la amistad y la vida familiar. Los Seises son leales, fiables y amorosos. Tienen facilidad para adaptarse. Se les dan muy bien la enseñanza y las artes, mientras que los negocios no suelen ser lo suyo. A veces tienen tendencia al chismorreo y a la complacencia. Los pitagóricos consideraban el seis el número perfecto, ya que es divisible tanto por dos como por tres y contiene la suma y el producto de los tres primeros dígitos (1 + 2 +3 = 6, 1 x 2 x 3 = 6).");
	} else if (numeroF == 7){
		console.log("Siete: Perceptivos, comprensivos y brillantes, a los Sietes les gusta el trabajo duro y los retos. Suelen ser serios, estudiosos y les interesan todas las cosas misteriosas. Para ellos, la originalidad y la imaginación son más importantes que el dinero y las posesiones materiales. Los Sietes pueden ser también pesimistas, sarcásticos e inseguros. El siete se considera a veces un número místico o mágico, debido a que se asocia con los bíblicos siete días de la Creación, y con los siete cuerpos celestes de la antigua astronomía (el Sol, la Luna, Mercurio, Venus, Marte, Saturno y Júpiter).");
	} else if (numeroF == 8){
		console.log("Ocho: El ocho indica la posibilidad de gran éxito en los negocios, las finanzas y la política. Los Ochos son prácticos, ambiciosos, comprometidos y trabajadores. Pero también pueden ser celosos, codiciosos, dominantes y sedientos de poder. Se dice que el ocho es el número más imprescindible de todos, y pueden indicar tanto el éxito máximo como el fracaso más rotundo; ambas posibilidades están presentes desde el principio.");
	} else if (numeroF == 9){
		console.log("Nueve: Representa totalidad y logro en el grado más alto, ya que es el número <<completo>> (el tres) expresado tres veces (3 x 3 = 9). Los Nueves dedican su vida al servicio al prójimo, a menudo como maestros, científicos y humanistas. De fuertes convicciones, trabajan incansablemente y sirven de inspiración para los demás. Sin embargo, también pueden ser arrogantes y engreídos cuando las cosas no salen como ellos esperan.");
	}
}

leer(nombre);

console.log("caracter");
achicar(caracter);
definicion(numeroFinal);
console.log(" ");

console.log("amor");
achicar(amor);
definicion(numeroFinal);
console.log(" ");

console.log("social");
achicar(social);
definicion(numeroFinal);

/*var caracterFinal = achicar(caracter); 
var amorFinal = achicar(amor);
var socialFinal = achicar(social);*/

