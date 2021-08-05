function mostrar()
{
	let origenIngresado,
		cantidadVacunasIngresadas,
		costoVueloIngresado,
		respuesta,

		flagCantidadVacunas = 1,
		origenMenosVacunas,
		cantidadMenosVacunas,

		cantidadVuelosOccidente = 0,
		totalVacunasOccidente = 0,
		promedioVuelosOccidente,

		totalSinDescuento = 0,
		totalConDescuento,
		porcDescuento,
		acumuladorVacunas;

		do{
			origenIngresado = prompt("Por favor ingrese su origen Oriente / Occidente / Secreto").toLowerCase();

			while(!isNaN(origenIngresado) || origenIngresado != "oriente" && origenIngresado != "occidente" && origenIngresado != "secreto"){
				origenIngresado = prompt("ERROR Por favor ingrese su origen Oriente / Occidente / Secreto").toLowerCase();
			}
			cantidadVacunasIngresadas = parseInt(prompt("Por favor, ingrese la cantidad de vacunas (entre 500000 y 2500000"));

			while(isNaN(cantidadVacunasIngresadas) || cantidadVacunasIngresadas < 500000 || cantidadVacunasIngresadas > 2500000){
				cantidadVacunasIngresadas = parseInt(prompt("ERROR Por favor, ingrese la cantidad de vacunas (entre 500000 y 2500000"));
			}

			costoVueloIngresado = parseInt(prompt("Por favor, ingrese la cantidad de vacunas un millon, y 5 millones"));

			while(isNaN(costoVueloIngresado) || costoVueloIngresado < 1000000 || costoVueloIngresado > 5000000){
				costoVueloIngresado = parseInt(prompt("ERROR Por favor, ingrese la cantidad de vacunas un millon, y 5 millones"));
			}

			respuesta = prompt("Desea seguir registrando personas? s/n").toLowerCase();
			while(!isNaN(respuesta) || respuesta != "s" && respuesta != "n"){
				respuesta = prompt("Desea seguir registrando personas? s/n").toLowerCase();
			}

			if(flagCantidadVacunas){
				cantidadMenosVacunas = cantidadVacunasIngresadas;
				origenMenosVacunas = origenIngresado;
				flagCantidadVacunas = 0;
			}else if(cantidadVacunasIngresadas < cantidadMenosVacunas){
				cantidadMenosVacunas = cantidadVacunasIngresadas;
				origenMenosVacunas = origenIngresado;
			}

			if(origenIngresado == "occidente"){
				cantidadVuelosOccidente++;
				totalVacunasOccidente += cantidadVacunasIngresadas;
			}
			
			totalSinDescuento += costoVueloIngresado;
			acumuladorVacunas += cantidadVacunasIngresadas;
			
		}while(respuesta != "n");

		/*PUNTO A*/
		document.write("El origen que envio la menor cantidad de vacunas es: " + origenMenosVacunas + ", con un total de " + cantidadMenosVacunas + " vacunas </br>");

		/*PUNTO B*/

		if(cantidadVuelosOccidente > 0){
			promedioVuelosOccidente = totalVacunasOccidente / cantidadVuelosOccidente;
			document.write("El promedio de vuelos con vacunas a occidente es de: " + promedioVuelosOccidente + "</br>");
		}else{
			document.write("No se puede calcular el promedio de vuelos con vacunas a occidente, porque nunca fueron programados </br>");
		}
		

		if(acumuladorVacunas > 10000000){
			totalConDescuento = totalSinDescuento * 0.75;
			porcDescuento = 25;
		}else if(acumuladorVacunas >= 5000000 && acumuladorVacunas <= 10000000){
			totalConDescuento = totalSinDescuento * 0.85;
			porcDescuento = 15;
		}else{
			totalConDescuento = totalSinDescuento;
		}

		if(totalConDescuento < totalSinDescuento){
			document.write("Se realizo un descuento del " + porcDescuento + "% sobre el total. Total a pagar: " + totalConDescuento + "</br>");
		}else{
			/*PUNTO C*/
			document.write("El total a pagar sin descuento por los gastos de los viajes es de: " + totalSinDescuento);
		}


		
}
