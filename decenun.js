var numero = 9999;
var milenials = 0;
var centenas = 0;
var decenas = 0;
var unidades = 0;

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
	console.log(numeroUno +"final");
} else if(numeroUno > 10){
	numeroUno-=10;
	
	}
}
/*if (numeroUno>9){
	function achicarDe(dec) {
		var masuno = 0;
		if(dec>9){			
			do{
				dec-=10;
				masuno++;
			} while (dec > 9);
		console.log(masuno+"masuno");
		return masuno;
		}

		if(dec<=9){
			console.log(dec+"dec");
		}
	}
}
numeroUno = achicarDe(numeroUno);
console.log(numeroUno);
console.log(numeroUno+);*/