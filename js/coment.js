function Add_mensaje()
{
    //Detecar elemento
    const escritorio = document.getElementById("bodyChat");
    //Agregar mensaje
    const mensje =document.getElementById("messageInput");
    var mej = mensje.value;
    //Agregar emnsaje 
    const div1 = document.createElement("div");
    div1.setAttribute("class","message incoming-message");
    div1

    const span = document.createElement("span");
    span.textContent = "TU:";
    span.setAttribute("class","sender");

    
    const div2 = document.createElement("div");
    div2.setAttribute("class","content");

    //Agregar el mensaje
    const p = document.createElement("p");
    p.textContent = mej;

    //Agregar al documento
    escritorio.appendChild(div1);
    div1.appendChild(span);
    div1.appendChild(div2);
    div2.appendChild(p);



}