
function Registrar() {
    let correo = document.getElementById("email-input").value;
    let contraseña = document.getElementById("password-input").value;
    let validaciones = false;
    // Validaciones
    while (!validaciones) {
        
        if (correo.trim() === "") {
            alert("Por favor, ingresa una dirección de correo válida.");
            return;
        }

        else if (!correo.includes("@")) {
            alert("La dirección de correo debe contener un '@'.");
            return;
        }

         else if (contraseña.length < 5) {
            alert("La contraseña debe tener al menos 5 caracteres.");
            return;
        }

        else{
            validaciones = true;
            alert('Se ha registrado con exito');
        }


    }
   


}

function convertir(){
    var valore = parseInt(document.getElementById("valor").value);
    var resultado =0;
    var dolar = 1000;
    var bitcoin =9300000;
    if (document.getElementById("dos").checked){
        resultado = valore/dolar;
        alert("El cambio de Pesos a Dolares es: $"+ resultado);
    }
    else if(document-getElementById("uno").checked){
        resultado = valores/bitcoin;
        alert("El cambio de Pesos a Bitcoin es: $" + resultado);

    }
    else{
        alert("Debe elegir una opción");
    }

}


