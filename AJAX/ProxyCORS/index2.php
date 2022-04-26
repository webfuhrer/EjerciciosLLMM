<?php
//Aquí se hace la petición que desde Javascript me fallaría.
//El header es para que el XMLHttpRequest tenga su responseXML. Si no se pone, solo se accede al responseText
header('Content-Type: text/xml');
	$ch = curl_init();
	//Mando por GET el parámetro ruta para que me valga para distintas peticiones
	$ruta=$_GET["ruta"];
curl_setopt($ch, CURLOPT_URL, $ruta); 
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1 ); 
//El utf8_encode es para que se vean correctamente las tildes...
$dataFromExternalServer=utf8_encode(curl_exec($ch)); 
//Este echo lo lee el XMLHttpRequest como responseText
echo($dataFromExternalServer);
?>