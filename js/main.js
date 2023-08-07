//configuracion del volumen de mi audio de piratas del caribe
window.onload = function() {
    musicaFondo = document.getElementById('musica-fondo');
    musicaFondo.volume = 0.05;

    musicaFondo.addEventListener('ended', function() {
        musicaFondo.currenTime = 0;
        musicaFondo.play();
    })
    musicaFondo.currenTime = 0;
    musicaFondo.play();
};

//configuracion de mi boton principal
const botonPrincipal = document.getElementById('boton-principal');

botonPrincipal.addEventListener('click', function() {

    window.location.href = 'juego.html'
})