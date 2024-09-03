document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('#login-form');
    const loginButton = document.querySelector('.login-button');
    const createAccountButton = document.querySelector('.create-account-button');

    // Obtener los datos de usuario almacenados en la base de datos local
    const userData = JSON.parse(localStorage.getItem('userData')) || [];

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = loginForm.username.value;
        const password = loginForm.password.value;

        // Verificar si las credenciales coinciden con alguna cuenta registrada
        const user = userData.find(user => user.username === username && user.password === password);
        if (user) {
            console.log('Inicio de sesión exitoso con:', username);
            // Mostrar mensaje de inicio de sesión exitoso
            Swal.fire({
                title: "Inicio de sesión exitoso",
                text: "Has iniciado sesión correctamente.",
                icon: "success",
                customClass: {
                    container: 'my-swal', // Clase de estilo personalizado
                    title: 'my-swal-title',
                    content: 'my-swal-content',
                    confirmButton: 'my-swal-confirm-button'
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    // Redirigir a la página principal después del inicio de sesión
                    window.location.href = "Pagina.html"; 
                }
            });
        } else {
            // Mostrar mensaje de error si las credenciales son incorrectas
            Swal.fire({
                title: "Error",
                text: "El nombre de usuario o la contraseña son incorrectos.",
                icon: "error"
            });
        }
    });

    createAccountButton.addEventListener('click', function(event) {
        event.preventDefault();
        // Redirigir al usuario a la página de creación de cuenta
        window.location.href = "crear-cuenta.html"; 
    });
});