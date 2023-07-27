function crearTiendas(contenedorId, min, cantidadTiendas){
    //Encontrar contenedor por su id
    let elementoContenedor=document.getElementById(contenedorId);

    //loop para crear tantas tiendas como se pidan
    for(let conteoTiendas=1; conteoTiendas<=cantidadTiendas;conteoTiendas++){
        //Creación de el texto de label para poder llamar a la función
        let textoEtiqueta="Tienda "+conteoTiendas+": ";

        //Creación de tiendas con crearParrafoTienda()
        let parrafoTienda=crearParrafoTienda(textoEtiqueta,min);

        //agregar el párrafo al contenedor
        elementoContenedor.appendChild(parrafoTienda);
    }
    
}


function crearParrafoTienda(textoLabel, valorMinimo){
    //Creación de etiquetas <p>
    let elementoParrafo=document.createElement("p");

    //Creación etiqueta label
    let elementoEtiqueta=document.createElement("label");
    //Establecer texto
    elementoEtiqueta.innerText=textoLabel;
    //Conexión de label con input
    elementoEtiqueta.setAttribute("for",textoLabel);
    //Creación de input
    let elementoInput=document.createElement("input");
    //Establecimiento de artículos del input
    elementoInput.setAttribute("type","number");
    elementoInput.setAttribute("id",textoLabel);
    elementoInput.setAttribute("min",valorMinimo);
    elementoInput.setAttribute("value",0);

    //Agregar label e input al párrafo
    elementoParrafo.appendChild(elementoEtiqueta);
    elementoParrafo.appendChild(elementoInput);

    //Devolver el párrafo completo
    return elementoParrafo;
    //el párrafo se devuelve a la función crearTiendas()
}


function extraerNumeroDesdeElemento(elemento){
    let miTexto=elemento.value;
    let miNumero=Number(miTexto);

    return miNumero;
}



function calcular(){
    let ventas=[];
    let posicionVentas=0;
    let elementosVentas=document.getElementById("itemsTiendas");

    for(let item of elementosVentas.children){
        //Llamar a la función extrayendo del input, children segundo
        let valorVenta=extraerNumeroDesdeElemento(item.children[1]);
        ventas[posicionVentas]=valorVenta;

        posicionVentas++;
    }

   


    let totalVentas=sumarTotal(ventas);
    let ventaMayor=calcularMayor(ventas);
    let ventaMenor=calcularMenor(ventas);

    for(let item of elementosVentas.children){
        let valorVenta=extraerNumeroDesdeElemento(item.children[1]);
        item.children[1].className="fondoNeutro";
        
        if(valorVenta==ventaMenor){
            item.children[1].className="fondoRojo";
        }
        else if(valorVenta==ventaMayor){
            item.children[1].className="fondoVerde";
        }
    }




    let mensajeSalida="Total ventas: "+totalVentas;
                        
    let elementoSalida=document.getElementById("parrafoSalida");

    elementoSalida.textContent=mensajeSalida;

    

}

function sumarTotal(array){
    let total=0;

    for(let venta of array){
        total+=venta;
    }
    return total;
}

function calcularMayor(array){
    let maximo=array[0];

    for(let venta of array){

        if(venta>maximo){
            maximo=venta;
        }
    }
    return maximo;
}


    function calcularMenor(array){
        let menor=array[0];
    
        for(let venta of array){
    
            if(venta<menor){
                menor=venta;

            }
        }
        return menor;
    }

