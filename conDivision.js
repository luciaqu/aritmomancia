var numero = 374;
var suma = centenas + decenas + unidades;
var centenas = 0;
var decenas = 0;
var unidades = 0;

function separado(inicial){
	centenas = (inicial/100) - (inicial % 100);
	decenas = (inicial%100)/10 - (inicial%100)%10;
	unidades = (inicial%100)%10;

	console.log(centenas+decenas+unidades);
}

separado(numero);

console.log(centenas, decenas, unidades);