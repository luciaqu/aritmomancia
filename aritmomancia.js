
var amor = 0 ;
var social= 0;
var nombre = process.argv.slice(2); //Así me deja usar la consola siempre y cuando escriba el nombre letra por letra con espacio.
var caracter = 0;
var letrasArray = [];
var letraAmor = [];
var letraSocial = [];

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
	console.log("caracter ="+ caracter+ " letrasArray= "+letrasArray);
	console.log("amor ="+ amor+ " letras= " + letraAmor);
	console.log("social ="+ social+ " letras= "+ letraSocial);

}
leer(nombre);




