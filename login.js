// Selección de elementos
const loginScreen = document.getElementById('login-screen');

// Credenciales
const validCarnet = "14041802";
const validPreu = "198225";

// Evento de Login
document.getElementById('login-button').addEventListener('click', () => {
    const carnet = document.getElementById('carnet').value;
    const preu = document.getElementById('preu').value;

    if (carnet === validCarnet && preu === validPreu) {
        window.location.href = 'datos.html';
    } else {
        alert("Credenciales incorrectas");
    }
});
