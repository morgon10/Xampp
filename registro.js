document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.querySelector('form');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = registrationForm.username.value;
        const email = registrationForm.email.value;
        const password = registrationForm.password.value;
        const confirmPassword = registrationForm.confirmPassword.value;

        if (password !== confirmPassword) {
            Swal.fire({
                title: "Error",
                text: "Las contraseñas no coinciden.",
                icon: "error"
            });
            return;
        }

        // Validar si ya existe una cuenta con el mismo correo electrónico
        if (checkExistingEmail(email)) {
            Swal.fire({
                title: "Error",
                text: "Ya existe una cuenta con este correo electrónico.",
                icon: "error"
            });
            return;
        }

        // Si pasa todas las validaciones, guardar los datos en el almacenamiento local
        const userData = {
            username: username,
            email: email,
            password: password
        };
        saveUserData(userData);

        // Mostrar mensaje de confirmación
        Swal.fire({
            title: "Bien hecho!",
            text: "Se ha creado la cuenta exitosamente!",
            icon: "success"
        }).then((result) => {
            if (result.isConfirmed) {
                // Redirigir a index.html
                window.location.href = "Pagina.html";
            }
        });
    });

    function checkExistingEmail(email) {
        // Aquí simulas una verificación de si el correo electrónico ya está en uso.
        // En una aplicación real, esto implicaría una llamada a un servidor o una base de datos.
        // Por simplicidad, vamos a simularlo con una lista de correos electrónicos ya registrados.
        const existingEmails = ['usuario1@example.com', 'usuario2@example.com', 'usuario3@example.com'];
        return existingEmails.includes(email);
    }

    function saveUserData(userData) {
        // Obtener los datos existentes del almacenamiento local
        const existingData = JSON.parse(localStorage.getItem('userData')) || [];

        // Agregar los nuevos datos al arreglo existente
        existingData.push(userData);

        // Guardar los datos actualizados en el almacenamiento local
        localStorage.setItem('userData', JSON.stringify(existingData));
    }
});