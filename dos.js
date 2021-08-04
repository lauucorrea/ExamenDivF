function mostrar()
{
    let nacionalidadIngresada,
        resultadoHisopado,
        edadIngresada,
        cepaIngresada,

        contadorPositivos = 0,
        contadorNegativos = 0,
        porcentajePositivos,
        porcentajeNegativos,

        contadorDelta = 0,
        contadorAlfa = 0,
        contadorBeta = 0,
        
        
        cantidadCepaMenosEncontrada,
        nombreCepaMenosEncontrada,

        edadMenorArgentino,
        flagArgentino = 1,

        contadorExtranjerosDelta = 0;

        for(let i=1; i<=8; i++){

            nacionalidadIngresada = prompt("Por favor, ingrese la nacionalidad de la persona numero " + i + "(argentina / extranjero)").toLowerCase();

            while(!isNaN(nacionalidadIngresada) || nacionalidadIngresada != "argentina" && nacionalidadIngresada != "extranjero"){
                nacionalidadIngresada = prompt("ERROR Ingrese un nombre valido (argentina / extranjero)").toLowerCase();
            }

            resultadoHisopado = prompt("Ingrese el resultado del hisoptado positivo/negativo").toLowerCase();

            while(!isNaN(resultadoHisopado) || resultadoHisopado != "positivo" && resultadoHisopado != "negativo"){
                resultadoHisopado = prompt("ERROR, elija solo entre las opciones positivo/negativo").toLowerCase();
            }

            edadIngresada = parseInt(prompt("Ingrese su edad (entre 18 y 69 años)"));

            while(isNaN(edadIngresada) || edadIngresada < 18 || edadIngresada > 69){
                edadIngresada = parseInt(prompt("Ingrese su edad correctamente (entre 18 y 19 años)"));
            }


            if(resultadoHisopado == "negativo"){
                contadorNegativos++;
                alert("No hace falta ingresar ninguna cepa, el resultado del hisopado fue negativo.");
                cepaIngresada = "ninguna";
            }else{
                contadorPositivos++;

                //aprovecho el if/else para calcular el argentino con menor edad contagiado
                if( flagArgentino && nacionalidadIngresada == "argentina"){

                    edadMenorArgentino = edadIngresada;
                    flagArgentino = 0;

                }else if(!flagArgentino && nacionalidadIngresada == "argentina" && edadIngresada < edadMenorArgentino){

                    edadMenorArgentino = edadIngresada;

                }

                cepaIngresada = prompt("Ingrese cepa delta / alfa / beta").toLowerCase();
                while(!isNaN(cepaIngresada) || cepaIngresada != "delta" && cepaIngresada != "alfa" && cepaIngresada != "beta"){
                    cepaIngresada = parseInt(prompt("Ingrese cepa delta / alfa / beta")).toLowerCase();
                }  
            }
            
            switch(cepaIngresada){
                case "alfa":
                    contadorAlfa++;
                break;
                case "delta":
                    contadorDelta++;
                    if(nacionalidadIngresada == "extranjero"){
                        contadorExtranjerosDelta++;
                    }
                break;
                case "beta":
                    contadorBeta++;
                break;
            }

        }

        /*PUNTO A*/
        porcentajePositivos = contadorPositivos * 12.5; // cuenta resumida de 100 / 8 (8 es el total de hisopados)
        porcentajeNegativos = contadorNegativos * 12.5;

        /*PUNTO C*/

        if(contadorAlfa < contadorDelta && contadorAlfa < contadorBeta){
            cantidadCepaMenosEncontrada = contadorAlfa;
            nombreCepaMenosEncontrada = "Alfa";
        }
        else if(contadorDelta < contadorAlfa && contadorDelta < contadorBeta){
            cantidadCepaMenosEncontrada = contadorDelta;
            nombreCepaMenosEncontrada = "Delta";
        }
        else if(contadorBeta < contadorAlfa && contadorBeta < contadorDelta){
            cantidadCepaMenosEncontrada = contadorBeta;
            nombreCepaMenosEncontrada = "Beta";
        }

        document.write("El porcentaje de positivos es del " + porcentajePositivos + "% </br>");
        document.write("El porcentaje de negativos es del " + porcentajeNegativos + "% </br>");
        document.write("La cepa menos encontrada es la cepa "+ nombreCepaMenosEncontrada + " con un total de " + cantidadCepaMenosEncontrada + " casos</br>");
        document.write("La edad del argentino mas joven contagiado es de " + edadMenorArgentino + " años </br>");

        if(contadorExtranjerosDelta > 0){
            document.write("La cantidad de personas extranjeras contagiadas con la cepa Delta es de: " + contadorExtranjerosDelta);
        }else{
            document.write("No hay extranjeros con la cepa delta ingresados");

        }
        



}
