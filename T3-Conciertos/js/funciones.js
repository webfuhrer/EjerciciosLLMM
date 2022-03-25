var opciones_conciertos=[{nombre:"AC/DC", valor:"acdc", precio:100},
{nombre:"Barón Rojo", valor:"baron", precio:80},
{nombre:"Iron Butterfly", valor:"iron", precio:120}
]

function crearDesplegable()
{
	//1-Crea un select
	var obj_select=document.createElement("select");
	obj_select.id="opciones_conciertos";
	//obj_select.onchange=cambiarConcierto;
	obj_select.addEventListener("change", cambiarConcierto);

	//2-Con un bucle va creando objetos option
	var obj_option=document.createElement("option");
	obj_option.innerText="Seleccione una opción";
	obj_option.selected=true;
	obj_option.disabled=true;
	obj_select.appendChild(obj_option);
	for(i=0; i<opciones_conciertos.length; i++)//width, fifth
	{
		var obj_option=document.createElement("option");
		obj_option.innerText=opciones_conciertos[i].nombre;
		obj_option.value=opciones_conciertos[i].valor;
		//3-Dentro del bucle, va metiendo cada option 
		//como hijo del select
		obj_select.appendChild(obj_option);

	}
	
	//4-Una vez recorridos todos los elementos del array, osea
	// fuera del bucle, pongo al select como hijo del div
	document.getElementById("contenedor_desplegable").appendChild(obj_select);

}
function cambiarConcierto()
{
	
	//1-Tengo que saber qué ha selccionado el usuario
	//1.1-Mirando el value del select y haciendo un switch-case
	//1.2-Miro el valor del select y recorro el array viendo si ese 
	// valor coincide con alguno de los elementops del select
	//Ejemplo: El usr selcciona iron
	/*var concierto=document.getElementById("opciones_conciertos").value;
	for(i=0; i<opciones_conciertos.length; i++)
	{
		if (concierto==opciones_conciertos[i].valor)
		{
			var nombre=opciones_conciertos[i].nombre;
			var precio=opciones_conciertos[i].precio;
			alert("El concierto de "+nombre+" cuesta: "+precio+"€" );
		}
	}*/
	//1.3-Uso de selectedIndex
	var obj_select=document.getElementById("opciones_conciertos");
	var indice=obj_select.selectedIndex-1;
	//alert("Seleccionado el índice: "+indice);
	var nombre=opciones_conciertos[indice].nombre;
	var precio=opciones_conciertos[indice].precio;
	var texto="El concierto de "+nombre+" cuesta "+precio+"€";
	//alert(texto);
	var parrafo=document.getElementById("texto_precio");
	if (parrafo==null)//El parrafo no existe. Hay que crearlo
	{
	var obj_parrafo=document.createElement("p");
	obj_parrafo.id="texto_precio";
	obj_parrafo.innerHTML=texto;
	document.getElementById("contenedor_precio").appendChild(obj_parrafo);
	}
	else//El parrafo existe
	{
	parrafo.innerHTML=texto;
	}

	
	

}
