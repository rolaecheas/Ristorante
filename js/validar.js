function validar(){
    var nombre, apellidos, correo, usuario, clave, telefono, expresion;
    nombre = document.getElementById("nombre").value;
    apellidos= document.getElementById("apellidos").value;
    correo = document.getElementById("correo").value;
    usuario = document.getElementById("usuario").value;
    clave = document.getElementById("clave").value;
    telefono = document.getElementById("telefono").value;
    expresion = /\w+@\w+\.+[a-z]/;
    if(nombre === "" || apellidos === "" || correo === "" || usuario === "" || clave === "" || telefono === ""){
        alert(" Es necesario llenar todos los campos");
        return false ;
        
    }
    else if (nombre.length>30){
        alert("el nombre es muy largo");
        return false;
    }
     else if (apellidos.length>30){
        alert("los apellidos son muy largos");
        return false;
    }
     else if (correo.length>50){
        alert("su correo es muy largo");
        return false;
    }
    else if(!expresion.test(correo)){
        alert("El formato del correo no es válido");
        return false;
    }
     else if (usuario.length>20 || clave.length>20){
        alert("El usuario y contraseña debe tener maximo 20 caracteres");
        return false;
    }
     else if (telefono.length>9){
        alert("el telefono es muy largo solo se requiere un maximo de 9 digitos");
        return false;
    }
     else if (isNaN(telefono)){
        alert("El telefono ingresado no es un numero");
        return false;
    }
}