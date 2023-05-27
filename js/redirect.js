function Set_redirect(index,mensaje=null)
{
    //Agregar menasje en forma de alert
    if(mensaje != null)
    {
        alert(mensaje);
    }
    window.location.href= index;
}

function Help()
{
    alert("Esta es la aplicacion principal donde puedes selccionar los distintos servicios ofrecidos por Webmed")
}

