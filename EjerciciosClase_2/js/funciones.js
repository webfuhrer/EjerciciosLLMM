function cargarFoco()
{
	//Acceder al objeto
	var obj_input=document.getElementById("campo");
	obj_input.className="colores_feos";
	/*obj_input.style.backgroundColor="red";
	obj_input.style.color="blue";
	obj_input.style.border="3px solid pink";*/
	//background-color->backgroundColor
	//border-radius->borderRadius
}
function descargarFoco()
{
	var obj_input=document.getElementById("campo");
	obj_input.style.backgroundColor="green";
}