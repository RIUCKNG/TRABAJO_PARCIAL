// Definir credenciales válidas
const credencialesValidas = {
    usuario: "user",
    contrasena: "123"
};

// Función para manejar el inicio de sesión
function iniciarSesion(event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera predeterminada
    
    // Obtiene los valores ingresados por el usuario
    const usuario = document.getElementById("usuario").value;
    const contrasena = document.getElementById("contrasena").value;

    // Compara los valores ingresados con las credenciales válidas
    if (usuario === credencialesValidas.usuario && contrasena === credencialesValidas.contrasena) {
        document.getElementById("mensaje").textContent = "¡Inicio de sesión exitoso!";
        // Redirige al usuario a la siguiente página
        window.location.href = "principal.html"; // Cambia "pagina_siguiente.html" por la URL de tu siguiente página
    } else {
        document.getElementById("mensaje").textContent = "Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.";
    }

    // Limpia los campos del formulario después del inicio de sesión
    document.getElementById("loginForm").reset();
}

// Agrega un evento submit al formulario para llamar a la función de inicio de sesión
document.getElementById("loginForm").addEventListener("submit", iniciarSesion);