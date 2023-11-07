document.addEventListener("DOMContentLoaded", function () {
    var formulario = document.getElementById("registro")
    formulario.addEventListener("submit", function (event) {
        if (!validarFormulario()) {
            event.preventDefault()
        }
    })
})

function validarFormulario() {
    var nombre = document.getElementById("registro_nombre").value
    var apellido = document.getElementById("registro_apellido").value
    var email = document.getElementById("registro_email").value
    var password = document.getElementById("registro_password").value
    var comentarios = document.getElementById("registro_comentarios").value.trim()
    var checkBox = document.getElementById("registro_condiciones")

    var validNombre = validarCampoObligatorio(nombre, "Nombre")
    var validApellido = validarCampoObligatorio(apellido, "Apellido")
    var validEmail = validarCampoObligatorio(email, "Email") && validarEmail(email)
    var validPassword = validarPassword(password)
    var validComentarios = validarCampoObligatorio(comentarios, "Comentarios") && validarComentarios(comentarios)
    var validCheckBox = validarCheckBox(checkBox)

    return validNombre && validApellido && validEmail && validComentarios && validPassword
}

function validarEmail(email) {
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    if (!emailRegex.test(email)) {
        alert("La dirección de correo electrónico no es válida.")
        return false
    }
    return true
}

function validarComentarios(comentarios) {
    var comentariosRegex = /^.{1,50}$/
    if (!comentariosRegex.test(comentarios)) {
        alert("La contraseña no puede exceder los 50 caracteres")
        return false
    }
    return true
}

function validarPassword(password) {
    if (password) {
        var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/
        if (!passwordRegex.test(password)) {
            alert("La contraseña debe tener al menos 6 caracteres, una letra minúscula, una letra mayúscula y un dígito.")
            return false
        }
    } else {
        alert("El campo contraseña es obligatorio.")
        return false
    }
    return true
}

function validarCampoObligatorio(valor, nombreCampo) {
    if (!valor) {
        alert("El campo " + nombreCampo + " es obligatorio")
        return false
    }
    return true
}

function validarCheckBox(checkBox) {
    if (!checkBox.checked) {
        alert("Debes aceptar términos y condiciones")
        return false
    }
    return true
}