function mostrarAlerta() {
    Swal.fire({
        title: '¡Atención!',
        text: "Opción no habilitada. ¿En verdad querías comprar un gato? 😡\nEs mejor adoptar. Te robaré tus datos por promover la venta de gatos. 😊",
        icon: 'warning',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#ff6f61',
        background: '#fff',
        color: '#333',
        width: 'auto',
        padding: '20px'
    });
}