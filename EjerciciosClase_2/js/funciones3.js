function cambiarEstado()
{
	let nombre_clase=document.getElementById("parrafo_lorem").className;
	if (nombre_clase=="rojo")
		{document.getElementById("parrafo_lorem").className="verde";
		 document.getElementById("parrafo_lorem").innerHTML="VERDE";
		}
	else
		{
			document.getElementById("parrafo_lorem").className="rojo";
			document.getElementById("parrafo_lorem").innerHTML="ROJO";

		}
	
}