function creaCampos()
{
	var obj_input=document.createElement("input");
	var obj_contenedor_input=document.getElementById("contenedor_campo");
	obj_input.id="campo_nombre";
	obj_input.placeholder="Pon tu nombre. Mínimo 4 caracteres";
	obj_input.onblur=validaCampo;
	obj_contenedor_input.appendChild(obj_input);
}
function validaCampo()
{
	//Tengo que ver si el aviso ya existe
	var nombre=document.getElementById("campo_nombre").value;
	var obj_div=document.getElementById("div_aviso");
	if(obj_div==null)
	{
		obj_div=document.createElement("div");
	}
	
	obj_div.id="div_aviso";

	if (nombre.length<4)
	{
		obj_div.className="alert alert-danger";
		obj_div.innerHTML="<strong>ERROR</strong> El campo debe ser de más de 4 caracteres."

	}
	else
	{
		obj_div.className="alert alert-success";
		obj_div.innerHTML="<strong>CORRECTO</strong> El campo cumple las condiciones."
	}
	var obj_contenedor_input=document.getElementById("contenedor_aviso");
	obj_contenedor_input.appendChild(obj_div);
}