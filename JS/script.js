
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
        }


    }
    alert('Se ha registrado con exito');


}


