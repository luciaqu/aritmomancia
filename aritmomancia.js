
var amor = 0 ;
var social=;
var nombre = ["s","o","f","i","a","g","u","t","i","e","r","r","e","z"];
var caracter= 0;
var letrasArray = [];
	
function leer (){ 
	for(var i=0; i < nombre.length; i++){
		if (nombre[i] == "a"|| nombre[i] == "j" || nombre[i] == "s"){
			caracter+=1;
			letrasArray+= nombre[i];
			if(nombre[i]=="a"){
				amor+=1;
			} 
		} else if (nombre[i] == "b" || nombre[i] == "k" || nombre[i] == "t"){
			caracter+=2;
			letrasArray+= nombre[i];
		} else if (nombre[i] == "c" || nombre[i] == "l" || nombre[i] == "u"){
			caracter+=3;
			if(nombre[i]=="u"){
				amor+=3;
			}
			letrasArray+= nombre[i];
		} else if (nombre[i] == "d" || nombre[i] == "m" || nombre[i] == "v"){
			caracter+=4;
			letrasArray+= nombre[i];
		} else if (nombre[i] == "e" || nombre[i] == "n" || nombre[i] == "w"){
			caracter+=5;
			letrasArray+= nombre[i];
			if(nombre[i]=="e"){
				amor+=5
			}
		} else if (nombre[i] == "f" || nombre[i] == "o" || nombre[i] == "x"){
			caracter+=6;
			letrasArray+= nombre[i];
			if(nombre[i]=="o"){
				amor+=6
			}
		} else if (nombre[i] == "g" || nombre[i] == "p" || nombre[i] == "y"){
			caracter+=7;
			letrasArray+= nombre[i];
		} else if (nombre[i] == "h" || nombre[i] == "q" || nombre[i] == "z"){
			caracter+=8;
			letrasArray+= nombre[i];
		} else if (nombre[i] == "i" || nombre[i] == "r"){
			caracter+=9;
			letrasArray+= nombre[i];
			if(nombre[i]=="i"){
				amor+=9
			}
		}
	}
	console.log("caracter ="+ caracter+ " letrasArray= "+letrasArray);

	/*for(var i=0; i < nombre.length; i++){
		if (nombre[i] == "a"){
			amor+=1;
		} else if (nombre[i] == "u"){
			amor+=3;
		} else if (nombre[i] == "e"){
			amor+=5;
		} else if (nombre[i] == "o"){
			amor+=6;
		} else if (nombre[i] == "i"){
			amor+=9;
		}
	}*/
	console.log("amor ="+ amor);

}
leer(nombre);




