function enviarDatos(event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera predeterminada

    // Obtiene los valores ingresados por el usuario
    const nombre = document.getElementById("nombre").value;
    const sexo = document.getElementById("sexo").value;
    const dni = document.getElementById("dni").value;
    const telefono = document.getElementById("telefono").value;
    const direccion = document.getElementById("direccion").value;
    const correo = document.getElementById("correo").value;
    const razaPerro = document.getElementById("razaPerro").value;
    const cantidad = document.getElementById("cantidad").value;
    const comentario = document.getElementById("comentario").value;

    // Muestra los datos ingresados en el formulario
    const resultado = `
        <h2>Datos Ingresados:</h2>
        <p><strong>Apellidos y Nombres:</strong> ${nombre}</p>
        <p><strong>Sexo:</strong> ${sexo}</p>
        <p><strong>DNI:</strong> ${dni}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Dirección:</strong> ${direccion}</p>
        <p><strong>Correo:</strong> ${correo}</p>
        <p><strong>Raza de Perro:</strong> ${razaPerro}</p>
        <p><strong>Cantidad:</strong> ${cantidad}</p>
        <p><strong>Comentario:</strong> ${comentario}</p>
    `;

    document.getElementById("resultado").innerHTML = resultado;
}