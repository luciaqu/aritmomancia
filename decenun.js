var numero = 857;
var milenials = 0;
var centenas = 0;
var decenas = 0;
var unidades = 0;
var sumaDec = 0;
var doscifras = 0;
var numeroFinal = 0;

if (numero>999){
	do{	
		numero-=1000;
 		milenials+=1;
 		console.log(milenials+"milenials");
	} while (numero > 999);
}
if (numero>99){
	do{	
		numero-=100;
	 	centenas+=1;
	 	console.log(centenas+"centenas");
	} while (numero > 99);
}
if (numero>9){
	do{	
		numero-=10;
	 	decenas+=1;
	 	console.log(decenas+"decenas");
	} while (numero > 9);
}	
if (numero>0){
	do{	
		numero-=1;
	 	unidades+=1;
	 	console.log(unidades+"unidades");
	} while (numero > 0);
}
console.log(milenials,centenas,decenas,unidades);
var numeroUno= milenials+centenas+decenas+unidades;
console.log(numeroUno+"numeroUno");


if (numeroUno < 10){
	numeroFinal = numeroUno;
	console.log(numeroFinal +"final menor que 10");
} else if(numeroUno > 10){
		doscifras = numeroUno;
		while(doscifras > 9){
			doscifras-=10;
			console.log(doscifras+"nroUno dentro del while")
			sumaDec++;
			console.log(sumaDec+"sumaDec");
		}

		numeroFinal = doscifras+sumaDec;
		console.log(numeroFinal+"final mayor que 10");
}
