
function mostrar()
{
	let nombreIngresado,
		edadIngresada,
		vacunaIngresada,
		dosisIngresada,
		sexoIngresado,

		respuesta,

		cantidadVacRusa = 0,
		cantidadVacChina = 0,
		cantidadVacAmericana =0,
		cantidadVacAmericanaMenores = 0,
		porcentajeAmericanaMenores,

		totalEdadVacChina = 0,
		promedioEdadVacChina,

		nombreMasJoven,
		edadMasJoven,
		vacunaMasJoven,
		flagHombreJoven = 1,

		cantidadPrimeraDosis = 0,
		porcentajePrimeraDosis,
		totalDosis,

		vacunaMasInoculada;

		do{
			nombreIngresado = prompt("Ingrese su nombre");
			while(!isNaN(nombreIngresado)){
				nombreIngresado = prompt("ERROR. ingrese correctamente su nombre");
			}
			edadIngresada = parseInt(prompt(nombreIngresado + " Ingrese su edad (debe ser 12 o mas)"));
			while(isNaN(edadIngresada) || edadIngresada < 12){
				edadIngresada = parseInt(prompt("ERROR Ingrese su edad correctamente (debe ser 12 o mas)"))
			}
		
			if(edadIngresada >= 12 && edadIngresada <= 17){
				alert("La vacuna para esta persona es la AMERICANA")
				vacunaIngresada = "americana";
				cantidadVacAmericanaMenores++;
			}else{

				vacunaIngresada = prompt("Por favor elija la vacuna deseada rusa/china/americana").toLowerCase();
				
				while(!isNaN(vacunaIngresada) || vacunaIngresada != "rusa" && vacunaIngresada != "china" && vacunaIngresada != "americana"){
					vacunaIngresada = prompt("ERROR Por favor SOLO elija entre las vacunas: rusa/china/americana").toLowerCase();
				}
			}
			
			dosisIngresada = prompt("Que dosis le toca? p = primer dosis , s= segunda dosis").toLowerCase();
			while(!isNaN(dosisIngresada) || dosisIngresada != "p" && dosisIngresada != "s"){
				dosisIngresada = prompt("ERROR ingrese p = primer dosis , s= segunda dosis").toLowerCase();
			}

			sexoIngresado = prompt("Por favor, " + nombreIngresado + " Ingrese su sexo, f= femenino m= masculino").toLowerCase();
			while(!isNaN(sexoIngresado) || sexoIngresado != "f" && sexoIngresado != "m"){
				sexoIngresado = prompt("ERROR solo elija entre f= femenino m= masculino").toLowerCase();
			}

			respuesta = prompt("Desea seguir registrando personas? s/n").toLowerCase();
			while(!isNaN(respuesta) || respuesta != "s" && respuesta != "n"){
				respuesta = prompt("Desea seguir registrando personas? s/n").toLowerCase();
			}


			switch(vacunaIngresada){
				case "rusa":
					cantidadVacRusa++;
				break;
				case "china":
					cantidadVacChina++;
					totalEdadVacChina += edadIngresada;
				break;
				case "americana":
					cantidadVacAmericana++;
				break;
			}

			/*PUNTO B*/
			if(flagHombreJoven && sexoIngresado == "m"){

				nombreMasJoven = nombreIngresado;
				edadMasJoven = edadIngresada;
				vacunaMasJoven = vacunaIngresada;
				flagHombreJoven = 0;
			}else if(!flagHombreJoven && sexoIngresado == "m" && edadIngresada < edadMasJoven){

				nombreMasJoven = nombreIngresado;
				edadMasJoven = edadIngresada;
				vacunaMasJoven = vacunaIngresada;

			}
			
			if(dosisIngresada == "p"){
				cantidadPrimeraDosis++;
			}
			

		}while(respuesta != "n");
		/*PUNTO A*/
		promedioEdadVacChina = totalEdadVacChina / cantidadVacChina;
		porcentajeAmericanaMenores = cantidadVacAmericanaMenores * 100 / cantidadVacAmericana;

		totalDosis = cantidadVacAmericana + cantidadVacChina + cantidadVacRusa;
		porcentajePrimeraDosis = cantidadPrimeraDosis * 100 / totalDosis;

		/*PUNTO E*/
		if(cantidadVacChina > cantidadVacAmericana && cantidadVacChina > cantidadVacRusa){
			vacunaMasInoculada = "China";
		}
		else if(cantidadVacAmericana > cantidadVacChina && cantidadVacAmericana > cantidadVacRusa){
			vacunaMasInoculada = "Americana";
		}
		else if(cantidadVacRusa > cantidadVacAmericana && cantidadVacRusa > cantidadVacChina){
			vacunaMasInoculada = "Rusa";
		}

		document.write("El promedio de edad de los que se vacunaron con la vacuna china es de: " + promedioEdadVacChina.toFixed(2) + "</br>" );
		document.write("El nombre del hombre mas joven es: " + nombreMasJoven + ", le toco la vacuna: " + vacunaMasJoven + " Y tiene una edad de " + edadMasJoven + "</br>");
		document.write("De las " + cantidadVacAmericana + " personas que se vacunaron con la vacuna china, un " + porcentajeAmericanaMenores + " % son menores de edad </br>");
		document.write("De las " + totalDosis + " que se vacunaron, un " + porcentajePrimeraDosis + "% tuvieron su primera dosis" );
		document.write("La vacuna mas inoculada fue la " + vacunaMasInoculada);


}		
