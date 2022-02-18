function verificarEdad()
{
	var edad=document.getElementsByTagName("input")[0].value;
	console.log("La edad es "+edad);
	if (edad>=18)
		 {
		 	document.getElementsByTagName("p")[3].innerHTML="Eres mayor de edad";
		 	document.getElementsByTagName("p")[3].className="alert alert-success visible";	
		 }
		 else
		 {
		 		document.getElementsByTagName("p")[2].innerHTML="Eres menor de edad";
		 		document.getElementsByTagName("p")[2].className="alert alert-danger visible";	
		 }


}