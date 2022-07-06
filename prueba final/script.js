function validar() {
    var nombre = document.formulario.txt_nombre.value;
    var apellido = document.formulario.txt_apellido.value;
    var rut = document.formulario.txt_rut.value;
    var telefono = document.formulario.txt_telefono.value;
    var correo = document.formulario.txt_correo.value;
    var marca = document.formulario.txt_marca.value;
    var modelo = document.formulario.txt_modelo.value;
    var patente = document.formulario.txt_patente.value;
    if (nombre.length < 3) {
        alert("Nombre tiene pocos caracteres");
        document.formulario.txt_nombre.focus();
        return false;
    }
    if (apellido.length < 3) {
        alert("apellido tiene pocos caracteres");
        document.formulario.txt_apellido.focus();
        return false;
    }
    if (rut.length < 9 || rut.length > 10 || rut.indexOf('-') < 0 || rut.indexOf('.') > 0) {
        alert("Debe ingresar rut entre 9 y 10 digitos con guión y sin punto");
        document.formulario.txt_rut.focus();
        return false;
    }
    if (telefono.indexOf('9') != 0 || telefono.length != 9 || telefono.indexOf('+') > 0) {
        alert("debe ingresar numero de 9 digitos sin signo + y comience con un 9");
        document.formulario.txt_apellido.focus();
        return false;
    }
    if (correo.indexOf('@') < 0 || correo.indexOf('.') < 0) {
        alert("Debe ingresar un correo con @ y punto");
        document.formulario.txt_correo.focus();
        return false;
    }
    if (patente.length < 5) {
        alert("Debe ingresar patente en formato de 6 digitos" + txt_nombre);
        document.formulario.txt_patente.focus();
        return false;
    }
    alert("Datos enviados correctamente");
    //Si todo esta correcto se enviarían los datos a un back-end
    document.formulario.submit() = true;
}

