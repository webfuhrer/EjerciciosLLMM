/*
version 1 (Sin el this)
function crearCamposNombres()
{
	var num=document.getElementById("num_adultos").value;
	alert("Hes elegido "+num+" adultos");
}*/
function crearCamposNombres(num)
{
	
	//var num=objeto_select.value;
	var padre=document.getElementById("campos_nombres");
	//hAY QUE TENER EN CUENTA QUE QUIZÁ YA HUBIERA inputs
	//Opción 1: Borrar todo lo que hubiera antes
	padre.innerHTML="";
	//Opción 2: Ver cuántos ha seleccionado y ver cuantos faltan 
	//o sobran
	for(i=0; i<num; i++)
	{
		
		//var padre=document.getElementsByTagName("div")[0];
		var objeto_input=document.createElement("input");
		objeto_input.placeholder="Mete el nombre del adulto "+(i+1);
		objeto_input.type="text";
		objeto_input.className="clase_nombre";
		//objeto_input.id="nombre_"+i;
		padre.appendChild(objeto_input);
	}



	//alert("Hes elegido "+num+" adultos");
}
function crearCamposEdades()
{
	var num_ninios=document.getElementById("num_ninios").value;
	var padre_edades=document.getElementById("campos_edades");
	padre_edades.innerHTML="";
	for(i=0; i<num_ninios; i++)
	{
		var edad_ninio=document.createElement("input");
		edad_ninio.placeholder="Mete la edad del niño "+(i+1);
		edad_ninio.type="number";
		edad_ninio.id="edad_"+i;
		padre_edades.appendChild(edad_ninio);
	}

}
function validar()
{
	//¿Cómo acceso a los input de los nombres y las edades?
	//Opcion 2 (poniendo ids)
	//var num_adultos=document.getElementById("num_adultos").value;
	/*for (i=0; i<num_adultos; i++)
	{
		var nombres_ids="nombre_"+i;
		var nombres=document.getElementById(nombres_ids).value;
		alert(nombres);
	}*/

	//Opción 3, poniendo class:
	var lista_nombres=document.getElementsByClassName("clase_nombre");
	var nombres="";//El cubo que voy rellenando
	for(i=0; i<lista_nombres.length; i++)
	{
		var nombre=lista_nombres[i].value;
		nombres=nombres+" "+nombre;
		
	}
	//alert(nombres);

	//Coger los input de los niños:
	var objeto_div=document.getElementById("campos_edades");
	var inputs_edades=objeto_div.getElementsByTagName("input");
	var edades="";
	for(i=0; i<inputs_edades.length; i++)
	{
		edades=edades+" "+inputs_edades[i].value;
	}
	//alert (edades);
	alert("Van "+lista_nombres.length+" adultos de nombres: "+nombres+
		" y "+inputs_edades.length+" niños de edades: "+edades);

}