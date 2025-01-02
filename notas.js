// Selección de elementos
const backToDatosButton = document.getElementById('back-to-datos-button');
const userName = document.getElementById('user-name');

// Evento para regresar a los datos del postulante
backToDatosButton.addEventListener('click', () => {
    window.location.href = 'datos.html';
});

// Evento de redirección al hacer clic en el nombre del usuario
userName.addEventListener('click', () => {
    window.location.href = 'datos.html';
});
