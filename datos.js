// Selección de elementos
const logoutButton = document.getElementById('logout-button');
const userName = document.getElementById('user-name');

// Evento de Logout
logoutButton.addEventListener('click', () => {
    window.location.href = 'login.html';
});

// Evento de redirección al hacer clic en el nombre del usuario
userName.addEventListener('click', () => {
    window.location.href = 'datos.html';
});
