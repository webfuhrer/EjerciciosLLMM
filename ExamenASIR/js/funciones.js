function ocultarMostrar(x)
{
	var lista_divs=document.getElementsByTagName("div");
	var div_seleccionado=lista_divs[x];
	if(div_seleccionado.style.display=="block")
	{
		div_seleccionado.style.display="none";
	}
	else
	{
		div_seleccionado.style.display="block";
	}
}

function validar()
{
	//0 nombre
	//1 email
	var campo_nombre=document.getElementsByTagName("input")[0];
	var campo_email=document.getElementsByTagName("input")[1];
	if(campo_nombre.value.length<4)
	{
		//alert...
		alert("El campo nombre debe tener más de 4 caracteres");
		campo_nombre.style.backgroundColor="red";
		//campo rojo
	}
	var contador=0;
	for (i=0; i<campo_email.value.length; i++)
	{
		//fhgfhgf
		if (campo_email.value[i]=="@")
		{
			contador++;
		}
	}
	if(contador==0)
	{
		//No hay arrobas
		alert("El campo email debe tener arroba");
		campo_email.style.backgroundColor="red";
		//campo rojo
	}
	if (campo_nombre.value.length>=4)
	{
		if (contador>0)
		{
			//Todo está bien, se saluda y se ponen fondos verdes
			var texto="Hola "+campo_nombre.value+" tu email es: "+campo_email.value;
			alert(texto);
			campo_email.style.backgroundColor="green";
			campo_nombre.style.backgroundColor="green";
		}
	}
	
	
	
}