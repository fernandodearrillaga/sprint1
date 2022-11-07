const regexp=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const regexpCorreo=/^[\w]+@[\w]+.[\w]+$/;
const regexpCorreo2=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regexpNombre=/^[\w]+[\s]?[\w]+$/;

//var password= document.getElementById("contra").value;
//console.log(password);

function validar(e) {
    e.preventDefault();
    var nombre=document.getElementById("nombre").value;
    var apellidos=document.getElementById("apellidos").value;
    var password= document.getElementById("contra").value;
    var password2=document.getElementById("contra2").value;
    var correo= document.getElementById("correo").value;
    console.log(nombre);
    console.log(regexpNombre.test(nombre));
    console.log(regexpNombre.test(apellidos));
    console.log(password);
    console.log(regexp.test(password));
    console.log(correo);
    console.log(regexpCorreo.test(correo));
    
    if(regexpNombre.test(nombre)===false){
        alert("Nombre debe tener un máximo de 2 palabras");
        }
    else if(regexpNombre.test(apellidos)===false){
    alert("Apellidos debe tener un máximo de 2 palabras");
    }
    else if(regexp.test(password)===false){
        alert("La contraseña debe tener al menos ocho caracteres y contener al menos una letra minúscula, una mayúscula, un número y un símbolo");
        }
    else if(password!==password2){
        alert("Las contraseñas no coinciden");
    }
    else /*if (regexp.test(password)===true&&regexpCorreo.test(correo)===true&&password===password2)*/{
        alert("Se ha registrado correctamente");
    }
    
}

function validarLogin(e) {
    e.preventDefault();


    var passwordLog= document.getElementById("contraLog").value;
    var correoLog= document.getElementById("correoLog").value;
    console.log(passwordLog);
    console.log(regexp.test(passwordLog));
    console.log(correoLog);
    console.log(regexpCorreo.test(correoLog));
    if (regexp.test(passwordLog)===true&&regexpCorreo.test(correoLog)===true){
        alert("Se ha logueado correctamente");
    }
}

