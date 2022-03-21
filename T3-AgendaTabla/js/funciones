function crearTablaAmigos()
{
   var obj_tabla=document.createElement("table"); 
   obj_tabla.className="tabla";
   for (i=0; i<amigos.length; i++)//width fifth 
   {
        var obj_fila=document.createElement("tr");
        var obj_celda_nombre=document.createElement("td");
        var obj_celda_apellido=document.createElement("td");
        obj_celda_nombre.innerHTML="<strong>"+amigos[i].nombre+"</strong>";
        obj_celda_apellido.innerHTML="<strong>"+amigos[i].apellido+"</strong>";
        obj_fila.appendChild(obj_celda_nombre);
        obj_fila.appendChild(obj_celda_apellido);
        obj_tabla.appendChild(obj_fila);

   }
   document.getElementById("contenedor_amigos").appendChild(obj_tabla);

}