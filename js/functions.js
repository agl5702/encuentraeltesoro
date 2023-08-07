//funciones
let numeroAleatorio = size => {
    return Math.floor(Math.random() * size);
}

let obtenerDistancia = (e, objetivo) => {
    let diffx = e.offsetX - objetivo.x;
    let diffy = e.offsetY - objetivo.y;

    return Math.sqrt((diffx * diffx) + (diffy * diffy));
}
let pista = distance => {
    if (distance <= 40) {
        return "Muy caliente";
    } else if (distance <= 60) {
        return "Caliente";
    } else if (distance <= 80) {
        return "Calido";
    } else if (distance <= 160) {
        return "Frío";
    } else if (distance <= 320) {
        return "Muy Frío";
    } else {
        return "Congelado";
    }
}