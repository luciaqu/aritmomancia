
var amor;
var social;
var nombre = [process.argv];
var caracter= 0;
	
function leer (){ 
	for(var i=0; nombre.length < i; i++){
		if (nombre[i] == "a"|| nombre[i] == "j" || nombre[i] == "s"){
			caracter+=1;
		} else if (nombre[i] == "b" || nombre[i] == "k" || nombre[i] == "t"){
			caracter+=2;
		} else if (nombre[i] == "c" || nombre[i] == "l" || nombre[i] == "u"){
			caracter+=3;
		} else if (nombre[i] == "d" || nombre[i] == "m" || nombre[i] == "v"){
			caracter+=4;
		} else if (nombre[i] == "e" || nombre[i] == "n" || nombre[i] == "w"){
			caracter+=5;
		} else if (nombre[i] == "f" || nombre[i] == "o" || nombre[i] == "x"){
			caracter+=6;
		} else if (nombre[i] == "g" || nombre[i] == "p" || nombre[i] == "y"){
			caracter+=7;
		} else if (nombre[i] == "h" || nombre[i] == "q" || nombre[i] == "z"){
			caracter+=8;
		} else if (nombre[i] == "i" || nombre[i] == "r"){
			caracter+=9;
		}
	}
	console.log("caracter ="+ caracter);

}
leer(nombre);




