function mostrarCamposEdades()//Hacerlo usando el this!!!
{
	var objeto_select=document.getElementById("num_ninios");
	var numero_ninios=objeto_select.value;
	//Coger los input y mostrar tantos como haya seleccionado.
	//Ojo porque el primer input es el del nombre.
	var lista_inputs=document.getElementsByTagName("input");
	for(i=1; i<lista_inputs.length-1; i++)
	{
		lista_inputs[i].className="oculto";
	}
	for (i=1; i<=numero_ninios; i++)
	{
		lista_inputs[i].className="mostrado";
	}
}
function validar()
{
	var nombre=document.getElementById("nombre").value;
	var numero_ninios=document.getElementById("num_ninios").value;
	var numero_adultos=document.getElementsByTagName("select")[0].value;
	if (nombre.length<3)
	{
		alert("No se admiten nombres de menos de 3 caracteres");
		document.getElementById("nombre").style.backgroundColor="red";
	}
	//El cliente NOMBRE ha reservado una habitación para X adultos y Z
//niños de edades: EDAD_a, EDAD_b...
if(numero_ninios==0)
	{
	alert("El cliente "+nombre+" ha reservado una habitación para "+numero_adultos+" adultos")
	}
	else
		{
			var edades="";
			for(i=1; i<=numero_ninios; i++)
			{
				edades=edades+" "+document.getElementsByTagName("input")[i].value;
			}
			alert("El cliente "+nombre+" ha reservado una habitación para "+numero_adultos+" adultos "+
				"y "+numero_ninios+" niños de edades: "+edades);
		}

}