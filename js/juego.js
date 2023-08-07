window.onload = function() {
    const fondoJuego = document.getElementById('musica-fondo-juego');

    fondoJuego.volume = 0.05;
    fondoJuego.addEventListener('ended', function() {

        fondoJuego.currenTime = 0;
        fondoJuego.play();
    })
}
const WIDTH = 450;
const HEIGHT = 450;

let target = {
    x: numeroAleatorio(WIDTH),
    y: numeroAleatorio(HEIGHT)
};
let $map = document.getElementById('map');
$pista = document.getElementById('pistas');
$map.addEventListener('click', function(e) {
    let distancia = obtenerDistancia(e, target);

    let pistaDistancia = pista(distancia);

    $pista.innerHTML = pistaDistancia;

    if (distancia <= 25) {
        swal({
            title: '¡Has Ganado!',
            content: {
                element: 'img',
                attributes: {
                    src: 'img/icono.png',
                    alt: 'Icono de Victoria',
                }
            },
            timer: 100500,
            buttons: false
        }).then(() => {
            location.reload();
        });
    }
})