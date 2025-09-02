let datos=[];

function inicio(){
    let usuario=document.getElementById("usuario").value.trim();
    let contraseña=document.getElementById("contraseña").value.trim();

    if(!usuario || !contraseña){
        alert("Por favor, completa todos los campos.");
        return;
    }
    if(contraseña.length<8 || contraseña.includes("@") || contraseña.includes("_") || contraseña.includes(".")){
        let usuario= {usuario, contraseña};
        datos.push(usuario);
        renderizar();
        document.getElementById("usuario").value="";
        document.getElementById("contraseña").value="";
        alert("Inicio de sesión exitoso");
    } else {
        alert("La contraseña debe tener al menos 8 caracteres y no contener '@', '_' o '.'");
        return;
        
    }
    let usuarioExistente=datos.some(dato=>dato.usuario===usuario);
    if(usuarioExistente){
        alert("El usuario ya existe. Por favor, elige otro.");
        return;
    }
    datos.push({usuario,contraseña});
    renderizar();
    document.getElementById("usuario").value="";
    document.getElementById("contraseña").value="";
}
function renderizar(){
    let lista=document.getElementById("lista");
    lista.innerHTML="";
    for(let i=0;i<datos.length;i++){
        let li=document.createElement("li");
        li.textContent=`Usuario: ${datos[i].usuario}, Contraseña: ${datos[i].contraseña}`;
        lista.appendChild(li);
    }
}
